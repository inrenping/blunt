'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { storage } from '@/lib/storage';

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const t = useTranslations("LoginPage");

  const handleCheckEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/check?email=${encodeURIComponent(email)}`);
      const data = await res.json();

      if (res.ok) {
        setDisplayName(data.username);
        setStep(2);
      } else {
        toast.error(data.message || "邮箱未注册或已禁用");
      }
    } catch {
      toast.error("网络请求失败");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        storage.set('accessToken', data.Token);
        storage.set('refreshToken', data.RefreshToken);
        storage.set('user', data.User);
        storage.set('tokenExpires', data.Expires);
        toast.success("欢迎回来，" + displayName);
        router.push('/dash');
      } else {
        toast.error(data.message || "密码错误");
      }
    } catch {
      toast.error("登录时发生错误");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <motion.div layout className="w-full max-w-md bg-white dark:bg-black rounded-2xl shadow-xl p-8">

        <div className='text-center space-y-2 mb-6'>
          <h1 className='text-3xl font-bold'>
            {step === 1 ? "Welcome" : `Hi, ${displayName}`}
          </h1>
          <p className='text-gray-600'>
            {step === 1 ? "Enter email to get started" : "Please enter your password"}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.form
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleCheckEmail}
              className="space-y-4"
            >
              <div className='space-y-2'>
                <Label htmlFor='email'>{t("email")}</Label>
                <Input
                  id="email"
                  type='email'
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Checking..." : "Next Step"}
              </Button>
            </motion.form>
          ) : (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleLogin}
              className="space-y-4"
            >
              <div className='space-y-2'>
                <div className="flex justify-between">
                  <Label htmlFor='password'>Password</Label>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-primary-600 hover:underline"
                  >
                    Change Email
                  </button>
                </div>
                <Input
                  id="password"
                  type='password'
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : t("login")}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>

        {step === 1 && (
          <div className='mt-6 text-center text-sm'>
            <p className="text-gray-500">Don&apos;t have an account? <a href="#" className="text-primary-600 font-medium hover:underline">Sign up</a></p>
          </div>
        )}
      </motion.div>
    </div>
  );
}