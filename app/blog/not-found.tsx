import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <h2 className="mb-6 text-2xl font-semibold">Blog Post Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          Sorry, we couldn&apos;t find the blog post you&apos;re looking for.
        </p>
        <Link href="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    </div>
  )
}
