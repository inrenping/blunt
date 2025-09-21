import type { Metadata } from "next";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { ModeIntl } from "@/components/mode-intl";
import "../globals.css";


const title = "Blunt."
const description = "A example registry for distributing code using shadcn."

export const metadata: Metadata = {
  title: `${title} | ${description}`,
  description: description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
    <header>
      <div className="max-w-7xl mx-auto flex items-center px-4 py-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Logo /> <span className="sr-only">{title}</span>
          </Link>
          <MainNav />
        </div>
        <div className="ml-auto flex gap-2">
          <ModeIntl />
          <ModeToggle />
        </div>
      </div>
    </header>
    {children}
  </>
  );
}
