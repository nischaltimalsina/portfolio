import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Page() {
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
          action="https://formspree.io/f/mnqyojwp"
          method="POST"
          className="flex flex-col gap-4"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="h-10"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="h-10"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="bg-accent min-h-32"
          />
          <Button
            size={"lg"}
            type="submit"
            className="h-10 self-start hover:bg-orange-500"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
