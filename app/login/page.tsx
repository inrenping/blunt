'use client';

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail } from 'lucide-react'
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const t = useTranslations("LoginPage");
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md">
        <div className='bg-white dark:bg-black rounded-2xl shadow-xl p-8 space-y-6'>
          <div className='text-center space-y-2'>

            <h1 className='text-3xl font-blod'>Welcome back</h1>
            <p className='text-gray-600'>Please enter credentails</p>
          </div>


          {/* socail login */}
          <div className='flex justify-between'>
            <div className='grid grid-cols-1 gap-4 w-full'>
              <Button variant="outline" className='w-full'>
                <Mail className="mr-2 h-4 w-8" /> Login with Google
              </Button>
            </div>
          </div>

          {/* br */}
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t border-gray-300'></span>
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-white dark:bg-black px-2 text-muted-foreground'>Or</span>
            </div>
          </div>

          {/* form */}
          <form className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id="email" type='email' value={email} required onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-y-2'>
                <Checkbox id="remeber" />
                <Label htmlFor='remeber'>Remember me</Label>
              </div>
              <a href="#" className='text-sm text-primary-500 hover:text-primary-600'>Forgot password?</a>
            </div>

            <div className='space-y-2'>
              <Button type="submit" className="btn btn-wide w-full">{t("login")}</Button>
            </div>
          </form>
          <div className='text-center text-sm'>
            Dont have an account? <a href="#" className='text-primary-500 font-medium hover:text-primary-600'>Sign up</a>
          </div>
        </div>
      </motion.div>


    </div>
  );
}