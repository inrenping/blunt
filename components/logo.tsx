import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: React.ComponentProps<typeof Image>) {
  return (
    <>
      <Image src="/logo.png"
        className={cn("text-foreground", className)}
        width={48}
        height={48}
        alt="" />
    </>
  )
}
