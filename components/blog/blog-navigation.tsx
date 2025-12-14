"use client"

import { BlogPost } from "@/lib/blog"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

interface BlogNavigationProps {
  previousPost?: BlogPost | null
  nextPost?: BlogPost | null
}

export function BlogNavigation({
  previousPost,
  nextPost,
}: BlogNavigationProps) {
  if (!previousPost && !nextPost) return null

  return (
    <nav className="mt-12 flex items-center justify-between gap-4 border-t pt-8">
      {previousPost ? (
        <Link
          href={`/blog/${previousPost.slug}`}
          className="flex-1 cursor-pointer"
        >
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-full justify-start"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            <div className="flex flex-col items-start overflow-hidden">
              <span className="text-muted-foreground text-xs">Previous</span>
              <span className="truncate font-semibold">
                {previousPost.title}
              </span>
            </div>
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextPost ? (
        <Link href={`/blog/${nextPost.slug}`} className="flex-1 cursor-pointer">
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-full justify-end"
          >
            <div className="flex flex-col items-end overflow-hidden">
              <span className="text-muted-foreground text-xs">Next</span>
              <span className="truncate font-semibold">{nextPost.title}</span>
            </div>
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  )
}
