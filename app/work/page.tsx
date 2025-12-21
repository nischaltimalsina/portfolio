import { cn } from "@/lib/utils"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { Metadata } from "next"
import Link from "next/link"

const work = [
  {
    company: "Threatsview Pvt. Ltd",
    role: "Product Designer / Senior Software Developer",
    duration: "Jun 2024 - Present",
    summary:
      "Leading frontend development and product design for a vulnerability management platform, focusing on intuitive UX, scalable design systems, and high-performance Next.js interfaces.",
  },
  {
    company: "E-Signature Pvt. Ltd",
    role: "Senior Frontend Developer",
    duration: "Mar 2023 - May 2024",
    summary:
      "Built and refined interactive web and desktop interfaces by combining user research, thoughtful UI design, and frontend engineering across React, Next.js, and Electron.",
  },
  {
    company: "Adsflow",
    role: "Product Designer / Lead Frontend Developer",
    duration: "Jan 2024 - Feb 2025",
    summary:
      "Designed and led the development of a user-centric product experience, shaping user flows, interfaces, and a reusable design system using Next.js.",
  },
  {
    company: "Iagon",
    role: "Mid-Level Frontend Developer",
    duration: "May 2023 - Jan 2024",
    summary:
      "Implemented complex frontend features including Web3 integrations, translating UX designs into functional, scalable React and Next.js components.",
  },
  {
    company: "Aspirant Technology",
    role: "Frontend Developer",
    duration: "May 2020 - Aug 2022",
    summary:
      "Developed and maintained React-based applications with a strong focus on reusable components, responsive design, and seamless third-party integrations.",
  },
  {
    company: "Triaple Studios",
    role: "Designer / Web Developer",
    duration: "Feb 2018 - Oct 2019",
    summary:
      "Worked across branding, marketing design, and web development, creating user-focused websites and web applications with attention to visual clarity, usability, and frontend performance.",
  },
]
const ventures = [
  {
    company: "Viewframe",
    role: "Founder / Developer",
    summary:
      "A dynamic technology, design, development, and branding company dedicated to building innovative digital products and services.",
    link: "https://viewfra.me",
  },
  {
    company: "Appointree",
    role: "Founder",
    summary:
      "A simple and efficient appointment booking platform designed to streamline scheduling for businesses and clients alike.",
    link: "https://appointree.dev",
  },
]
const websites = [
  {
    name: "Kuruwaa",
    link: "https://kuruwaa.com",
    status: "Active",
  },
  {
    name: "Artseum",
    link: "https://www.artseumit.com",
    status: "Active",
  },
  {
    name: "Developer Portfolio",
    link: "https://mkarna.com.np",
    status: "Active",
  },
  {
    name: "Viewframe",
    link: "https://viewfra.me",
    status: "WIP",
  },
  {
    name: "Appointree",
    link: "https://appointree.dev",
    status: "WIP",
  },
  {
    name: "Doqett",
    link: "https://doqett.com",
    status: "WIP",
  },
  {
    name: "Adsflow",
    link: "https://adsflow.vercel.app",
    status: "Archived",
  },
  {
    name: "TerrablazeX",
    link: "https://terrablazex.vercel.app",
    status: "Archived",
  },
]
const resume = [
  {
    name: "Check out my Resume",
    link: "/resume",
    status: "Active",
  },
  {
    name: "Download my Resume",
    link: "/api/resume",
    status: "Active",
  },
]

export const metadata: Metadata = {
  title: "Work — Nischal Timalsina",
  description:
    "Explore the professional journey of Nischal Timalsina, a Software Developer and Product Designer. Discover his experience in building scalable web applications, design systems, and user-centric digital products.",
}

export default function Page() {
  return (
    <section className="py-24">
      <div className="group mx-auto h-full w-full max-w-3xl p-4 pt-6">
        <h1 className="text-lg font-semibold">Work</h1>
        <div className="group flex gap-0.5 py-1.5 pr-6">
          <div className="bg-accent size-1.5 rounded-full duration-200 group-hover:bg-orange-500 group-focus:bg-orange-500 group-active:bg-orange-500"></div>
          <div className="bg-accent size-1.5 rounded-full duration-300 group-hover:bg-orange-500/70 group-focus:bg-orange-500/70 group-active:bg-orange-500"></div>
          <div className="bg-accent size-1.5 rounded-full duration-400 group-hover:bg-orange-500/40 group-focus:bg-orange-500/40 group-active:bg-orange-500"></div>
          <div className="bg-accent size-1.5 rounded-full duration-500 group-hover:bg-orange-500/20 group-focus:bg-orange-500/20 group-active:bg-orange-500"></div>
        </div>
      </div>
      <div className="mx-auto h-full w-full max-w-3xl space-y-4 p-4 text-sm">
        <p className="max-w-3xl leading-relaxed text-pretty">
          These are a few things I’ve worked on, but more importantly, they’re
          examples of how I think. I’m drawn to problems that don’t have obvious
          answers and products that need more care than polish.
        </p>
        <p className="max-w-3xl leading-relaxed text-pretty">
          What you’ll see here isn’t perfect or flashy — it’s considered. Built
          with attention to trade-offs, real users, and what happens after the
          first release.
        </p>
      </div>
      <div className="mx-auto w-full max-w-3xl p-4">
        <h1 className="mb-2 text-lg font-semibold">Experience</h1>
        <div className="bg-accent grid gap-0.5 rounded-md p-0.5 sm:grid-cols-2">
          {work.map((item) => (
            <div
              key={item.company}
              className="bg-background size-full space-y-3 rounded-sm p-3"
            >
              <div className="space-y-0.5">
                <div>
                  <h3 className="font-semibold">{item.company}</h3>
                  <p className="text-muted-foreground text-sm">{item.role}</p>
                </div>
              </div>
              <p className="text-sm">{item.summary}</p>
              <p className="text-muted-foreground text-xs">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl p-4">
        <h1 className="mb-2 text-lg font-semibold">Resume</h1>
        <div className="bg-accent grid gap-0.5 rounded-md p-0.5 sm:grid-cols-2">
          {resume.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background group size-full space-y-3 rounded-sm p-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold group-hover:text-orange-500">
                    {item.name}
                  </h3>
                </div>
                <ArrowUpRightIcon className="text-muted-foreground size-4 duration-300 group-hover:rotate-45 group-hover:text-orange-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl p-4">
        <h1 className="mb-2 text-lg font-semibold">Ventures</h1>
        <div className="bg-accent grid gap-0.5 rounded-md p-0.5 sm:grid-cols-2">
          {ventures.map((item) => (
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.company}
              className="bg-background group size-full space-y-3 rounded-sm p-3"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold group-hover:text-orange-500">
                    {item.company}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.role}</p>
                </div>
                <ArrowUpRightIcon className="text-muted-foreground size-4 duration-300 group-hover:rotate-45 group-hover:text-orange-500" />
              </div>
              <p className="text-sm">{item.summary}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl p-4">
        <h1 className="mb-2 text-lg font-semibold">Websites</h1>
        <div className="bg-accent grid gap-0.5 rounded-md p-0.5 sm:grid-cols-2">
          {websites.map((item) => (
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.name}
              className="bg-background group size-full space-y-3 rounded-sm p-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold group-hover:text-orange-500">
                    {item.name}
                  </h3>
                  <div
                    className={cn(
                      "flex items-center gap-1 rounded border px-1 py-0.5 text-xs"
                    )}
                  >
                    <div
                      className={cn(
                        "size-3 rounded-full",
                        item.status === "Active"
                          ? "border-green-500 bg-green-500 text-green-800"
                          : item.status === "WIP"
                            ? "border-yellow-500 bg-yellow-500 text-yellow-800"
                            : "border-stone-500 bg-stone-500 text-stone-800"
                      )}
                    ></div>
                    {item.status}
                  </div>
                </div>
                <ArrowUpRightIcon className="text-muted-foreground size-4 duration-300 group-hover:rotate-45 group-hover:text-orange-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
