"use client"

import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-3xl p-4">
        <div className="group py-2 pb-8">
          <h1 className="text-lg font-semibold">Nischal Timalsina</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Product Designer | FullStack Developer
          </p>
          <div className="group flex gap-0.5 py-3 pr-6">
            <div className="bg-accent size-1.5 rounded-full duration-200 group-hover:bg-orange-500 group-focus:bg-orange-500 group-active:bg-orange-500"></div>
            <div className="bg-accent size-1.5 rounded-full duration-300 group-hover:bg-orange-500/70 group-focus:bg-orange-500/70 group-active:bg-orange-500"></div>
            <div className="bg-accent size-1.5 rounded-full duration-400 group-hover:bg-orange-500/40 group-focus:bg-orange-500/40 group-active:bg-orange-500"></div>
            <div className="bg-accent size-1.5 rounded-full duration-500 group-hover:bg-orange-500/20 group-focus:bg-orange-500/20 group-active:bg-orange-500"></div>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-pretty">
            Software Engineer and Product Designer focused on building
            intuitive, well-crafted digital products. I combine strong frontend
            engineering with product design and UI/UX to create systems that are
            both powerful and easy to use. My work centers on turning complex
            requirements into simple, elegant experiences—bridging the gap
            between technical capability and real user needs through thoughtful
            design and clean implementation.
          </p>
        </div>
        <div className="bg-accent grid max-w-3xl grid-cols-2 gap-0.5 rounded-sm p-0.5 text-sm md:grid-cols-4">
          <Link
            href="/about"
            className="bg-accent h-8 overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500"
          >
            <div className="group bg-background hover:bg-card/80 flex size-full items-center gap-2 px-2">
              <ArrowUpRightIcon className="size-4 stroke-1 duration-300 group-hover:rotate-45" />
              <p>About</p>
            </div>
          </Link>
          <Link
            href="/contact"
            className="bg-accent h-8 overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500"
          >
            <div className="group bg-background hover:bg-card/80 flex size-full items-center gap-2 px-2">
              <ArrowUpRightIcon className="size-4 stroke-1 duration-300 group-hover:rotate-45" />
              <p>Contact</p>
            </div>
          </Link>
          <Link
            href="/work"
            className="bg-accent h-8 overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500"
          >
            <div className="group bg-background hover:bg-card/80 flex size-full items-center gap-2 px-2">
              <ArrowUpRightIcon className="size-4 stroke-1 duration-300 group-hover:rotate-45" />
              <p>Work</p>
            </div>
          </Link>
          <Link
            href="/blog"
            className="bg-accent h-8 overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500"
          >
            <div className="group bg-background hover:bg-card/80 flex size-full items-center gap-2 px-2">
              <ArrowUpRightIcon className="size-4 stroke-1 duration-300 group-hover:rotate-45" />
              <p>Blog</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl p-4">
        <div className="overflow-hidden rounded-lg">
          <Image
            alt="pigeons"
            src="/assets/pigeons.jpg"
            width={3512}
            height={1975}
            className="w-full rounded-lg grayscale-50 saturate-50 duration-300 hover:scale-115 hover:grayscale-0 hover:saturate-100"
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl p-4">
        <h1 className="mb-1 text-lg font-semibold">Recent Posts</h1>
        <div className="bg-accent grid grid-cols-2 gap-0.5 rounded-md p-0.5">
          <div className="bg-background size-full rounded-sm p-4"></div>
          <div className="bg-background size-full rounded-sm p-4"></div>
          <div className="bg-background size-full rounded-sm p-4"></div>
          <div className="bg-background size-full rounded-sm p-4"></div>
        </div>
      </div>
    </section>
  )
}
