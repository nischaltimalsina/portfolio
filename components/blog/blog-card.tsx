import { BlogPost } from "@/lib/blog"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group bg-background relative overflow-hidden rounded p-4 ring-0 transition-all hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="mb-4">
          <h2 className="group-hover:text-primary mb-2 text-lg font-bold transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="text-muted-foreground flex items-center justify-between text-xs">
          <span>{formatDate(post.date)}</span>
          <span>{post.author}</span>
        </div>
      </Link>
    </Card>
  )
}
