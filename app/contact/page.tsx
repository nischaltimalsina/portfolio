import { ContactClient } from "@/components/contact/contact-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nischal Timalsina for thoughtful conversations about software design, engineering, and building user-centric products. Reach out via email, LinkedIn, or the contact form to discuss ideas and collaborations.",
}

export default function Page() {
  return <ContactClient />
}
