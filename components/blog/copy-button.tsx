"use client"

import type { ButtonProps } from "@base-ui/react"
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "../ui/button"

export default function CopyButton(props: ButtonProps & { content: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopyCode = async (code: string) => {
    if (typeof code === "string") {
      try {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 5000)
      } catch (error) {
        toast.error("Failed to copy code to clipboard")
      }
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      className="absolute top-2 right-2 transition-opacity group-hover:opacity-100 md:opacity-0"
      onClick={() => handleCopyCode(props.content)}
      aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
    >
      {copied ? (
        <CheckIcon className="size-3 text-green-500" />
      ) : (
        <DocumentDuplicateIcon className="size-3" />
      )}
    </Button>
  )
}
