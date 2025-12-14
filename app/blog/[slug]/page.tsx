import { BlogHeader } from "@/components/blog/blog-header"
import { BlogNavigation } from "@/components/blog/blog-navigation"
import CopyButton from "@/components/blog/copy-button"
import { Button } from "@/components/ui/button"
import { getAdjacentPosts, getAllPosts, getPostBySlug } from "@/lib/blog"
import { getReadingTime } from "@/lib/utils"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { toast } from "sonner"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { previous, next } = getAdjacentPosts(slug)
  const readingTime = getReadingTime(post.content)

  const markdownComponents: Components = {
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-2xl font-bold tracking-tight first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 border-b pb-2 text-xl font-semibold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 text-lg font-semibold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 mb-2 text-base font-semibold">{children}</h4>
    ),
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-1">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-primary text-muted-foreground my-4 border-l-4 pl-4 italic">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      const isInline = !className?.includes("language-")
      return isInline ? (
        <code className="bg-input/50 rounded px-1.5 py-0.5 font-mono text-xs">
          {children}
        </code>
      ) : (
        <code className="block font-mono text-xs">
          <CopyButton>{children}</CopyButton>
          {children}
        </code>
      )
    },
    pre: ({ children }) => (
      <pre className="bg-input/50 group relative my-4 overflow-x-auto rounded-lg border p-4">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary font-medium underline-offset-4 hover:underline"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    hr: () => <hr className="border-border my-8" />,
    table: ({ children }) => (
      <div className="my-4 w-full overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="border-b">{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="hover:bg-muted/50 border-b transition-colors">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-semibold">{children}</th>
    ),
    td: ({ children }) => <td className="px-4 py-2">{children}</td>,
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <Link href="/blog" className="mb-8 inline-block">
        <Button variant="ghost" size="sm">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <BlogHeader post={post} />

      <div className="text-muted-foreground mb-6 text-sm">{readingTime}</div>

      <article className="blog-content space-y-4 text-[15px] leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
          {post.content}
        </ReactMarkdown>
      </article>

      <BlogNavigation previousPost={previous} nextPost={next} />
    </div>
  )
}
