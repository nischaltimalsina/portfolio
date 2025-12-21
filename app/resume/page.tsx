import type { Metadata } from "next"
import ResumeClient from "@/components/resume/resume-client"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Learn more about Nischal Timalsina, a Software Engineer and product-focused builder working at the intersection of design, engineering, and human-centered thinking. Discover his approach to creating user-centric software that bridges the gap between functionality and usability.",
}
export default function Page() {
  return (
    <main className="print:light py-10 print:py-0">
      <ResumeClient />
    </main>
  )
}
