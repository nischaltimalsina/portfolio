import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Urbanist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Toaster } from "sonner"
import { competencies, portfolioKeywords, skills } from "@/config/site"

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nischaltimalsina.com.np"),
  title: {
    default: "Nischal Timalsina — Software Developer & Product Designer",
    template: "%s | Nischal Timalsina",
  },
  description:
    "Portfolio of Nischal Timalsina, a Software Developer and Product Designer specializing in Next.js, React, TypeScript, and UX-driven product design. Building scalable, high-performance web applications and intuitive user experiences.",
  keywords: [
    "Nischal Timalsina",
    "Software Developer",
    "Product Designer",
    "UI UX Designer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Application Developer",
    "Frontend Engineer",
    "Product Design Portfolio",
    "SaaS UI Design",
    "Dashboard Design",
    "Design Systems",
    ...skills,
    ...competencies,
    ...portfolioKeywords,
  ],
  authors: [{ name: "Nischal Timalsina" }],
  creator: "Nischal Timalsina",
  publisher: "Nischal Timalsina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nischaltimalsina.com.np",
    title: "Nischal Timalsina — Senior Frontend Developer & Product Designer",
    description:
      "Senior Frontend Developer and Product Designer crafting scalable web applications, design systems, and user-centric digital products.",
    siteName: "Nischal Timalsina",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nischal Timalsina Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nischal Timalsina — Frontend Developer & Product Designer",
    description:
      "Senior Frontend Developer and Product Designer specializing in Next.js, React, and UX-driven products.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={urbanist.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative scroll-smooth antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <ScrollArea className="h-screen">{children}</ScrollArea>
          <Footer />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
