"use client"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

export default function Page() {
  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5NU5SjyURVp6_Ea9Q6pgSQYWlTC2851mGBHZsPphgx8cCzQ/formResponse"

  const ENTRY_NAME = "entry.2015565821"
  const ENTRY_EMAIL = "entry.600547022"
  const ENTRY_MESSAGE = "entry.1086330122"

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    message?: string
  }>({})

  const validateForm = (formData: FormData) => {
    const newErrors: typeof errors = {}

    const name = formData.get(ENTRY_NAME) as string
    const email = formData.get(ENTRY_EMAIL) as string
    const message = formData.get(ENTRY_MESSAGE) as string

    if (!name?.trim()) {
      newErrors.name = "Full name is required"
    } else if (name.trim().length < 2) {
      newErrors.name = "Full name must be at least 2 characters"
    }

    if (!email?.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!message?.trim()) {
      newErrors.message = "Message is required"
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setErrors({})

    const formData = new FormData(event.target as HTMLFormElement)
    const validationErrors = validateForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setLoading(false)
      return
    }

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })
      setLoading(false)
      ;(event.target as HTMLFormElement).reset()
      toast.success("Message sent successfully!")
    } catch (error) {
      console.error("Submission error:", error)
      setLoading(false)
      toast.error("Failed to send message. Please try again.")
    }
  }
  return (
    <section className="py-24">
      <div className="group mx-auto h-full w-full max-w-3xl p-4 pt-6">
        <h1 className="text-lg font-semibold">Contact</h1>
        <div className="group flex gap-0.5 py-1.5 pr-6">
          <div className="bg-accent size-1.5 rounded-full duration-200 group-hover:bg-orange-500 group-focus:bg-orange-500 group-active:bg-orange-500"></div>
          <div className="bg-accent size-1.5 rounded-full duration-300 group-hover:bg-orange-500/70 group-focus:bg-orange-500/70 group-active:bg-orange-500"></div>
          <div className="bg-accent size-1.5 rounded-full duration-400 group-hover:bg-orange-500/40 group-focus:bg-orange-500/40 group-active:bg-orange-500"></div>
          <div className="bg-accent size-1.5 rounded-full duration-500 group-hover:bg-orange-500/20 group-focus:bg-orange-500/20 group-active:bg-orange-500"></div>
        </div>
      </div>
      <div className="mx-auto h-full w-full max-w-3xl space-y-4 p-4 text-sm">
        <p className="max-w-3xl leading-relaxed text-pretty">
          If something you read here resonated, that’s probably a good reason to
          reach out.
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          Maybe you’re building a product and thinking through design or
          engineering decisions. Maybe you’re stuck on a complex problem and
          want a second perspective. Or maybe you just want to talk about how
          software could work better than it does today.
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          I’m always open to thoughtful conversations. No pitches, no pressure —
          just honest discussions about ideas, products, and the work behind
          them.
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          You can email me at{" "}
          <Link
            className="inline-flex items-center gap-1 font-semibold underline duration-300 hover:text-orange-500"
            href="mailto:contact@nischaltimalsina.com.np"
          >
            contact@nischaltimalsina.com.np
            <ArrowUpRightIcon className="size-3 stroke-2" />
          </Link>{" "}
          , or reach out on{" "}
          <Link
            href="https://www.linkedin.com/in/nischaltimalsina"
            className="inline-flex items-center gap-1 font-semibold underline duration-300 hover:text-orange-500"
          >
            LinkedIn <ArrowUpRightIcon className="size-3 stroke-2" />
          </Link>
          .
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          If writing feels easier, the form below works too. I read everything
          and reply when it makes sense to.
        </p>
      </div>
      <div className="mx-auto w-full max-w-3xl p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          noValidate
        >
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  name={ENTRY_NAME}
                  placeholder="Full Name"
                  className="h-10"
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name={ENTRY_EMAIL}
                  placeholder="Email Address"
                  className="h-10"
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>
              <Field>
                <FieldLabel htmlFor="message">
                  What do you want to talk about?
                </FieldLabel>
                <Textarea
                  id="message"
                  name={ENTRY_MESSAGE}
                  placeholder="What do you want to talk about?"
                  rows={5}
                  className="bg-accent min-h-32"
                />
                {errors.message && <FieldError>{errors.message}</FieldError>}
              </Field>
            </FieldGroup>
          </FieldSet>
          <Button
            size={"lg"}
            type="submit"
            className="h-10 self-start hover:bg-orange-500"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}
