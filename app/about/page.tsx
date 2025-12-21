import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Nischal Timalsina, a Software Engineer and product-focused builder working at the intersection of design, engineering, and human-centered thinking. Discover his approach to creating user-centric software that bridges the gap between functionality and usability.",
}
export default function Page() {
  return (
    <section className="py-24">
      <div className="group mx-auto h-full w-full max-w-3xl p-4 pt-6">
        <h1 className="text-lg font-semibold">About</h1>
        <div className="group flex gap-0.5 py-1.5 pr-6">
          <div className="bg-accent size-1.5 rounded-full duration-200 group-hover:bg-orange-500 group-focus:bg-orange-500 group-active:bg-orange-500"></div>
          <div className="bg-accent size-1.5 rounded-full duration-300 group-hover:bg-orange-500/70 group-focus:bg-orange-500/70 group-active:bg-orange-500"></div>
          <div className="bg-accent size-1.5 rounded-full duration-400 group-hover:bg-orange-500/40 group-focus:bg-orange-500/40 group-active:bg-orange-500"></div>
          <div className="bg-accent size-1.5 rounded-full duration-500 group-hover:bg-orange-500/20 group-focus:bg-orange-500/20 group-active:bg-orange-500"></div>
        </div>
      </div>
      <div className="mx-auto h-full w-full max-w-3xl space-y-4 p-4 text-sm">
        <p className="max-w-3xl leading-relaxed text-pretty">
          I’m a Software Engineer and product-focused builder who works at the
          intersection of design, engineering, and human-centered thinking.
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          I believe most software doesn’t fail because the technology is weak —
          it fails because it’s built without enough empathy for the people
          using it. Too many systems are powerful on paper but frustrating in
          practice. My work is about closing that gap.
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          Over the years, I’ve built web applications, internal tools, and
          full-scale products with a strong focus on usability, clarity, and
          thoughtful interaction design. I care deeply about how software feels
          to use — because great products don’t demand attention, they quietly
          enable it.
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          My approach is simple: understand the problem deeply, design with
          intention, and build systems that are easy to use and easy to
          maintain. Whether I’m designing a workflow, crafting a component
          system, or implementing a complex feature, my goal is always the same
          — turn complexity into clarity.
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          I specialize in modern frontend technologies like React and Next.js,
          paired with strong UI/UX practices and scalable backend systems. I’m
          especially interested in hard problems: designing interfaces for
          complex systems, reducing friction in everyday workflows, and building
          software that actually helps people instead of getting in their way.
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          If you’re working on products where usability matters as much as
          functionality, I’d love to connect.
        </p>
      </div>
      <div className="mx-auto w-full max-w-3xl p-4">
        <div className="overflow-hidden rounded-lg">
          <Image
            alt="me"
            src="/assets/personal.jpg"
            width={3512}
            height={1975}
            className="w-full rounded-lg grayscale-50 saturate-50 duration-300 hover:scale-115 hover:grayscale-0 hover:saturate-100"
          />
        </div>
      </div>
    </section>
  )
}
