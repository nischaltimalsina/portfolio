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
        <div className="bg-accent grid max-w-3xl grid-cols-2 gap-0.5 rounded-md p-0.5 text-sm md:grid-cols-4">
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
        <h1 className="mb-1 text-lg font-semibold">Follow Me on Social</h1>
        <div className="bg-accent grid grid-cols-2 gap-0.5 rounded-md p-0.5 md:grid-cols-4">
          <Link
            href="https://github.com/nischaltimalsina"
            className="bg-accent group flex h-8 w-full gap-0.5 overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500"
          >
            <div className="group bg-background group-hover:bg-card/80 flex size-full items-center gap-2 px-2 duration-300">
              <ArrowUpRightIcon className="size-4 stroke-1 duration-300 group-hover:rotate-45" />
              <p>Github</p>
            </div>
            <div className="bg-background group-hover:bg-card/80 flex h-8 w-8 shrink-0 items-center justify-center overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path
                  d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
          <Link
            href="https://linkedin.com/in/nischaltimalsina"
            className="bg-accent group flex h-8 w-full gap-0.5 overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500"
          >
            <div className="bg-background group-hover:bg-card/80 flex size-full items-center gap-2 px-2 duration-300">
              <ArrowUpRightIcon className="size-4 stroke-1 duration-300 group-hover:rotate-45" />
              <p>Linkedin</p>
            </div>
            <div className="bg-background group-hover:bg-card/80 flex h-8 w-8 shrink-0 items-center justify-center overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Linkedin</title>
                <path
                  d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30917 8.5752 7.003 8.575ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.67Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
          <Link
            href="https://instagram.com/nischaltimalcna"
            className="bg-accent group flex h-8 w-full gap-0.5 overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500"
          >
            <div className="group bg-background group-hover:bg-card/80 flex grow items-center gap-2 rounded px-2 duration-300">
              <ArrowUpRightIcon className="size-4 stroke-1 duration-300 group-hover:rotate-45" />
              <p>Instagram</p>
            </div>
            <div className="bg-background group-hover:bg-card/80 flex h-8 w-8 shrink-0 items-center justify-center overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path
                  d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75ZM12 4C9.526 4 9.122 4.007 7.971 4.058C7.187 4.095 6.661 4.2 6.173 4.39C5.739 4.558 5.426 4.759 5.093 5.093C4.78001 5.3954 4.53935 5.76458 4.389 6.173C4.199 6.663 4.094 7.188 4.058 7.971C4.006 9.075 4 9.461 4 12C4 14.474 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.474 20 14.878 19.993 16.029 19.942C16.811 19.905 17.338 19.8 17.826 19.611C18.259 19.442 18.574 19.241 18.906 18.909C19.243 18.572 19.444 18.259 19.61 17.829C19.8 17.336 19.906 16.809 19.942 16.029C19.994 14.925 20 14.539 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.8 6.661 19.61 6.173C19.4593 5.765 19.2191 5.39596 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.925 4.006 14.539 4 12 4ZM12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
          <Link
            href="https://facebook.com/nischaltimalcna"
            className="bg-accent group flex h-8 w-full gap-0.5 overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500"
          >
            <div className="group bg-background group-hover:bg-card/80 flex size-full items-center gap-2 px-2 duration-300">
              <ArrowUpRightIcon className="size-4 stroke-1 duration-300 group-hover:rotate-45" />
              <p>Facebook</p>
            </div>
            <div className="bg-background group-hover:bg-card/80 flex h-8 w-8 shrink-0 items-center justify-center overflow-clip rounded duration-300 hover:text-orange-500 focus:text-orange-500 active:text-orange-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path
                  d="M20.25 1.5H3.75C3.15326 1.5 2.58097 1.73705 2.15901 2.15901C1.73705 2.58097 1.5 3.15326 1.5 3.75L1.5 20.25C1.5 20.8467 1.73705 21.419 2.15901 21.841C2.58097 22.2629 3.15326 22.5 3.75 22.5H10.1836V15.3605H7.23047V12H10.1836V9.43875C10.1836 6.52547 11.918 4.91625 14.5744 4.91625C15.8466 4.91625 17.1769 5.14313 17.1769 5.14313V8.0025H15.7111C14.2669 8.0025 13.8164 8.89875 13.8164 9.81797V12H17.0405L16.5248 15.3605H13.8164V22.5H20.25C20.8467 22.5 21.419 22.2629 21.841 21.841C22.2629 21.419 22.5 20.8467 22.5 20.25V3.75C22.5 3.15326 22.2629 2.58097 21.841 2.15901C21.419 1.73705 20.8467 1.5 20.25 1.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
