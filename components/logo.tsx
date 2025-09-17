import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: React.ComponentProps<typeof Image>) {
  return (
    <>
      <Image src="/logo.png"
        className={cn("text-foreground h-6", className)}
        width={24}
        height={24}
        alt="" />
    </>
  )
}
