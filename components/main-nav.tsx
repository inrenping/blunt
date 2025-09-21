
import { Button } from '@/components/ui/button';
import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-1">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/features">Features</Link>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <Link href="/maps">Maps</Link>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <Link href="/subscribe">Subscribe</Link>
      </Button>
    </nav>
  )
}
