import { getAllPosts, getAllTags } from "@/lib/blog"
import { BlogPageClient } from "@/components/blog/blog-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software development, design, and building products.",
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return <BlogPageClient posts={posts} tags={tags} />
}
