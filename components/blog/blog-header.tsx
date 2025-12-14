import { BlogPost } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { formatDate } from "@/lib/utils"
import { CalendarIcon, UserIcon } from "@heroicons/react/24/outline"

interface BlogHeaderProps {
  post: BlogPost
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <header className="mb-8 space-y-4">
      <div className="space-y-4">
        <h1 className="text-xl font-bold tracking-tight lg:text-2xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-muted-foreground text-sm">{post.excerpt}</p>
        )}
      </div>

      <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <div className="flex items-center gap-2">
          <UserIcon className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
      </div>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      <Separator />
    </header>
  )
}
