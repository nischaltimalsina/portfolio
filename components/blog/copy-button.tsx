"use client"

import { ButtonProps } from "@base-ui/react"
import React, { useState } from "react"
import { toast } from "sonner"
import { Button } from "../ui/button"
import {
  DocumentDuplicateIcon,
  CheckIcon,
} from "@heroicons/react/24/outline"

export default function CopyButton(
  props: ButtonProps & { children: string | React.ReactNode }
) {
  const [copied, setCopied] = useState(false)

  const handleCopyCode = async (code: string | React.ReactNode) => {
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
      className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
      onClick={() => handleCopyCode(String(props.children))}
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
