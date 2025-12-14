"use client"

import { BlogPost } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

interface BlogPageClientProps {
  posts: BlogPost[]
  tags: { tag: string; count: number }[]
}

export function BlogPageClient({ posts, tags }: BlogPageClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl">
        <div className="group mx-auto h-full w-full max-w-3xl p-4 pt-6">
          <h1 className="text-lg font-semibold">Blog</h1>
          <p className="text-muted-foreground text-sm">
            Thoughts on software development, design, and building products.
          </p>
          <div className="group flex gap-0.5 py-1.5 pr-6">
            <div className="bg-accent size-1.5 rounded-full duration-200 group-hover:bg-orange-500 group-focus:bg-orange-500 group-active:bg-orange-500"></div>
            <div className="bg-accent size-1.5 rounded-full duration-300 group-hover:bg-orange-500/70 group-focus:bg-orange-500/70 group-active:bg-orange-500"></div>
            <div className="bg-accent size-1.5 rounded-full duration-400 group-hover:bg-orange-500/40 group-focus:bg-orange-500/40 group-active:bg-orange-500"></div>
            <div className="bg-accent size-1.5 rounded-full duration-500 group-hover:bg-orange-500/20 group-focus:bg-orange-500/20 group-active:bg-orange-500"></div>
          </div>
        </div>

        {tags.length > 0 && (
          <div className="group mx-auto h-full w-full max-w-3xl p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
                Topics
              </h2>
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="text-primary text-xs hover:underline"
                >
                  Clear filter
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(({ tag, count }) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="hover:bg-accent! hover:text-foreground cursor-pointer transition-colors"
                  onClick={() =>
                    setSelectedTag(tag === selectedTag ? null : tag)
                  }
                >
                  {tag} ({count})
                </Badge>
              ))}
            </div>
          </div>
        )}

        {selectedTag && (
          <div className="mb-6">
            <p className="text-muted-foreground text-sm">
              Showing {filteredPosts.length} post
              {filteredPosts.length !== 1 ? "s" : ""} tagged with{" "}
              <span className="text-foreground font-semibold">
                {selectedTag}
              </span>
            </p>
          </div>
        )}
        <div className="group mx-auto h-full w-full max-w-3xl p-4">
          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground text-lg">
                {selectedTag
                  ? `No blog posts found with tag "${selectedTag}".`
                  : "No blog posts published yet. Check back soon!"}
              </p>
            </div>
          ) : (
            <div className="bg-accent grid gap-0.5 rounded p-0.5 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
