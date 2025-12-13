"use client"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Logo } from "../common/logo"
import { Button } from "../ui/button"
import { toast } from "sonner"

export function Header() {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("contact@nischaltimalsina.com.np")
    console.log("Copying email to clipboard")
    toast.success("Email copied to clipboard!")
  }
  return (
    <header className="fixed top-0 left-0 z-50 w-screen">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between p-4 px-4">
        <Link href="/">
          <Logo className="size-7 duration-300 hover:text-orange-500" />
        </Link>
        <span className="sr-only">Nischal Timalsina</span>
        <Button
          onClick={() => handleCopyToClipboard()}
          size="icon-lg"
          variant="outline"
        >
          <EnvelopeIcon />
        </Button>
      </div>
    </header>
  )
}
