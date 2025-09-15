"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import React, { useState, useEffect } from "react"

export function ModeIntl({ }: React.ComponentProps<typeof Button>) {
  const [locale, setLocale] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale)
    } else {
      const bowerLocale = navigator.language.slice(0, 2);
      setLocale(bowerLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${bowerLocale};`;
      router.refresh();
    }
  }, [router]);
  const changeLocale = (newLocale: string) => {
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}; `;
    setLocale(newLocale);
    router.refresh();
  }
  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className={`border p=2 font-bold rounded-md text-sm`}
        onClick={() => changeLocale("en")}
      >
        EN
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className={`border p=2 font-bold rounded-md text-sm `}
        onClick={() => changeLocale("zh")}
      >
        中文
      </Button>
    </>
  )
}
