"use client"
import {
  Call02Icon,
  Globe02Icon,
  Location03Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useRef } from "react"
import { Button } from "../ui/button"
import {
  education,
  type EducationItem as IEducationItem,
  type ProjectItem as IProjectItem,
  openSource,
  projects,
  type ResumeItem,
  work,
} from "./content"

export default function ResumeClient() {
  const contentRef = useRef<HTMLDivElement>(null)

  const handleDownloadPdf = () => {
    window.open("/assets/Resume:Nischal_Timalsina.pdf", "_blank")
  }

  return (
    <div className="resume-root print:light mx-auto grid h-fit max-w-3xl gap-8 p-4 text-sm print:max-w-full print:gap-4 print:p-0">
      <section>
        <div className="resume-actions sticky top-12 mx-auto flex justify-end pl-4 print:hidden print:h-0">
          <Button size="lg" className="rounded-md" onClick={handleDownloadPdf}>
            Download a Copy
          </Button>
        </div>
        <div
          ref={contentRef}
          id={"resume"}
          className="resume-container container mx-auto font-light print:max-w-full print:px-0 print:py-0 print:font-normal print:text-black"
        >
          <div className="resume-header flex w-full flex-col gap-6 duration-200 sm:flex-row md:items-end print:px-0">
            <div className="resume-header-text flex flex-col justify-end space-y-1">
              <h1 className="resume-name text-xl leading-none font-medium duration-200 print:text-3xl">
                Nischal Timalsina
              </h1>
              <h2 className="resume-title text-muted-foreground text-sm duration-200">
                Product Designer / Fullstack Developer
              </h2>
            </div>
          </div>

          <div className="resume-contact-wrapper w-full py-8 print:px-0">
            <div className="resume-contact mb-4 flex max-w-4xl flex-wrap justify-between gap-2 text-sm">
              <p className="resume-contact-item flex items-center gap-2">
                <HugeiconsIcon
                  icon={Location03Icon}
                  strokeWidth={2}
                  className="resume-icon pointer-events-none size-3.5"
                />
                Kathmandu, Nepal
              </p>
              <a
                href="tel:+9779855011882"
                className="resume-contact-link flex items-center gap-2"
              >
                <HugeiconsIcon
                  icon={Call02Icon}
                  strokeWidth={2}
                  className="resume-icon pointer-events-none size-3.5"
                />
                +977-985-5011772
              </a>
              <a
                href="mailto:contact@nischaltimalsina.com.np"
                className="resume-contact-link flex items-center gap-2"
              >
                <HugeiconsIcon
                  icon={Mail01Icon}
                  strokeWidth={2}
                  className="resume-icon pointer-events-none size-3.5"
                />
                contact@nischaltimalsina.com.np
              </a>
              <a
                href="https://nischaltimalsina.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-link flex items-center gap-2"
              >
                <HugeiconsIcon
                  icon={Globe02Icon}
                  strokeWidth={2}
                  className="resume-icon pointer-events-none size-3.5"
                />
                nischaltimalsina.com.np
              </a>
            </div>
            <p className="text-muted-foreground">
              Experienced Frontend Developer and UI/UX-oriented engineer with
              deep expertise in Next.js, React, TypeScript, and modern
              component-driven architectures. Skilled at transforming complex
              requirements into clean, usable interfaces with a strong focus on
              accessibility, performance, and responsive design. Blends
              technical leadership with creative design thinking to deliver
              polished, user-focused digital experiences. Adept at building
              scalable frontend systems, reusable components, and
              cross-functional design-development workflows.
            </p>
          </div>

          <div className="resume-section py-4">
            <h2 className="resume-section-title text-xl font-normal print:px-0">
              Work Experience
            </h2>
            <div className="bg-accent mt-4 space-y-0.5 rounded p-0.5 print:space-y-4 print:bg-transparent">
              {work.map((item) => (
                <WorkItem key={item.company} {...item} />
              ))}
            </div>
          </div>
          <div className="resume-section py-4 print:pt-8">
            <h2 className="resume-section-title text-xl font-normal print:px-0">
              Education
            </h2>
            <div className="bg-accent mt-4 space-y-0.5 rounded p-0.5 print:space-y-4 print:bg-transparent">
              {education.map((item) => (
                <EducationItem key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div className="resume-section py-4 print:pt-8">
            <h2 className="resume-section-title text-xl font-normal print:px-0">
              Selected Projects
            </h2>
            <div className="bg-accent mt-4 space-y-0.5 rounded p-0.5 print:space-y-4 print:bg-transparent">
              {projects.map((item) => (
                <ProjectItem key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div className="resume-section py-4 print:pt-8">
            <h2 className="resume-section-title text-xl font-normal print:px-0">
              Open Source
            </h2>
            <div className="bg-accent mt-4 space-y-0.5 rounded p-0.5 print:space-y-4 print:bg-transparent">
              {openSource.map((item) => (
                <ProjectItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function WorkItem(item: ResumeItem) {
  return (
    <div className="bg-background hover:bg-background/30 grid gap-4 rounded-sm p-2 duration-300 md:grid-cols-5 print:grid-cols-5 print:px-0">
      <div className="md:col-span-2 print:col-span-2">
        <div className="gap flex items-end font-medium">
          {item.role} at {item.company}
        </div>
        <p className="text-muted-foreground">{item.duration}</p>
        <p className="text-muted-foreground">{item.location}</p>
      </div>

      <ul className="resume-work-points text-muted-foreground space-y-1.5 md:col-span-3 print:col-span-3">
        {item.responsibilities?.map((responsibility) => (
          <li key={responsibility}>
            <p className="resume-work-point text-sm">{responsibility}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectItem(item: IProjectItem) {
  return (
    <div className="bg-background hover:bg-background/30 grid gap-4 rounded-sm p-2 duration-300 md:grid-cols-5 print:grid-cols-5 print:px-0">
      <a href={item.href} className="md:col-span-2 print:col-span-2">
        <p className="decoration-border font-medium underline decoration-dotted underline-offset-4 print:no-underline">
          {item.title}
        </p>
        <p className="text-muted-foreground">{item.href.slice(8)}</p>
      </a>

      <ul className="text-muted-foreground space-y-1.5 md:col-span-3 print:col-span-3">
        {item.description?.map((description) => (
          <li key={description}>
            <p className="resume-work-point text-sm">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function EducationItem(item: IEducationItem) {
  return (
    <div className="bg-background hover:bg-background/30 grid gap-4 rounded-sm p-2 duration-300 md:grid-cols-5 print:grid-cols-5 print:px-0">
      <div className="md:col-span-2 print:col-span-2">
        <p className="decoration-border font-medium underline decoration-dotted underline-offset-4 print:no-underline">
          {item.title}
        </p>
        <p className="text-muted-foreground">{item.location}</p>
      </div>

      <ul className="text-muted-foreground space-y-1.5 md:col-span-3 print:col-span-3">
        {item.description?.map((description) => (
          <li key={description}>
            <p className="text-sm">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
