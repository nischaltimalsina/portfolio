export interface Intro {
  name: string
  about: string
  href: string
  github: string
  linkedin: string
  email: string
}

export interface ResumeItem {
  company?: string
  role?: string
  employmentType?: string
  duration?: string
  responsibilities?: string[]
  href?: string
  location?: string
}

export interface EducationItem extends ResumeItem {
  title: string
  date: string
  location: string
  description: string[]
}

export interface ProjectItem extends ResumeItem {
  title: string
  href: string
  description: string[]
}

export interface OpenSourceItem extends ResumeItem {
  title: string
  href: string
  description: string[]
}

export const intro: Intro = {
  name: "Nischal Timalsina",
  about:
    "Passionate Product Designer and Developer with 4+ years of experience building clean, modern, and user-friendly web applications. Skilled in UI/UX, frontend architecture, and design systems using React, Next.js, and Node.js. Strong believer in usability, performance, and design-led development.",
  href: "https://nischaltimalsina.com.np",
  github: "https://github.com/nischaltimalsina",
  linkedin: "https://linkedin.com/in/nischaltimalsina",
  email: "contact@nischaltimalsina.com.np",
}

export const work: ResumeItem[] = [
  {
    company: "Threatsview",
    employmentType: "Full Time",
    duration: "Jun 2024 - Present",
    role: "Product Designer",
    responsibilities: [
      "Lead frontend architecture using Next.js for performance and scalability",
      "Own product and UI/UX design decisions for security workflows",
      "Design and maintain reusable design system and component library",
    ],
    location: "Remote (Qatar)",
  },
  {
    company: "E-Signature",
    employmentType: "Full Time",
    duration: "Mar 2023 - May 2024",
    role: "Senior Frontend Developer",
    responsibilities: [
      "Build interactive web and desktop interfaces with React and Electron",
      "Translate product requirements into reliable frontend implementations",
      "Establish reusable component patterns and design systems",
    ],
    location: "Kathmandu, Nepal",
  },
  {
    company: "Adsflow",
    employmentType: "Part Time",
    duration: "Jan 2024 - Feb 2025",
    role: "Product Designer",
    responsibilities: [
      "Lead product design and frontend development for user flows and UI",
      "Conduct user research to improve usability and reduce friction",
      "Build and maintain Next.js design system for consistency",
    ],
    location: "Remote",
  },
  {
    company: "Iagon",
    employmentType: "Full Time",
    duration: "May 2023 - Jan 2024",
    role: "Frontend Developer",
    responsibilities: [
      "Implement complex features with scalable React and Next.js components",
      "Integrate Web3 functionality and third-party authentication systems",
      "Contribute to shared component libraries and frontend architecture",
    ],
    location: "Kathmandu, Nepal",
  },
  {
    company: "Aspirant Technology",
    employmentType: "Full Time",
    duration: "May 2020 - Aug 2022",
    role: "Frontend Developer",
    responsibilities: [
      "Develop and maintain React applications with reusable components",
      "Implement responsive and accessible user interfaces",
      "Collaborate with designers and backend teams on frontend features",
    ],
    location: "Kathmandu, Nepal",
  },
  {
    company: "Triaple Studios",
    employmentType: "Full Time",
    duration: "Feb 2018 - Oct 2019",
    role: "Web/Graphics Designer",
    responsibilities: [
      "Deliver complete digital experiences across branding and web development",
      "Design and build responsive websites with usability focus",
      "Work directly with clients to create production-ready websites",
    ],
    location: "Sydney, Australia",
  },
]

export const education: EducationItem[] = [
  {
    title: "Bachelor’s in Networking",
    date: "",
    location: "Melbourne Institute of Technology",
    description: [
      "Focused on networking fundamentals and IT systems",
      "Developed strong problem-solving and technical foundations",
    ],
  },
  {
    title: "Diploma in Full Stack Development (MERN)",
    date: "",
    location: "Vrit Technologies",
    description: [
      "Hands-on experience with MongoDB, Express, React, and Node.js",
      "Built multiple full-stack applications",
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: "Viewframe",
    href: "https://viewfra.me",
    description: [
      "Dynamic website for technology and design company",
      "Built with Next.js, Tailwind CSS, and Framer Motion",
    ],
  },
  {
    title: "Kuruwaa",
    href: "https://kuruwaa.com",
    description: [
      "Modern website for leading caretaker provider service in Nepal",
      "Built with Next.js, Tailwind CSS",
    ],
  },
  {
    title: "Artseum",
    href: "https://artseumit.com",
    description: [
      "Sleek website for tech company specializing in web development",
      "Built with Next.js, Tailwind CSS, and Framer Motion",
    ],
  },
  {
    title: "Appointree",
    href: "https://appointree.dev",
    description: [
      "Efficient appointment booking platform for businesses and clients",
      "Built with Next.js, Tailwind CSS, and Node.js",
    ],
  },
]

export const openSource: OpenSourceItem[] = [
  {
    title: "Fontline",
    href: "https://www.npmjs.com/package/fontline",
    description: [
      "Powerful font management system for Next.js applications",
      "Features font loading, fallback, and optimization",
    ],
  },
  {
    title: "Templates",
    href: "https://design.viewfra.me/templates",
    description: [
      "Collection of ready-to-use templates for Next.js projects",
      "Includes portfolios, blogs, e-commerce sites, and more",
    ],
  },
]
