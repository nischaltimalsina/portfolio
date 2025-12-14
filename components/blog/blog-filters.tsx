"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface BlogFiltersProps {
  tags: { tag: string; count: number }[]
  selectedTag: string | null
  onTagSelect: (tag: string | null) => void
}

export function BlogFilters({
  tags,
  selectedTag,
  onTagSelect,
}: BlogFiltersProps) {
  if (tags.length === 0) return null

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Topics
        </h2>
        {selectedTag && (
          <button
            onClick={() => onTagSelect(null)}
            className="text-sm text-primary hover:underline"
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
            className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
            onClick={() => onTagSelect(tag === selectedTag ? null : tag)}
          >
            {tag} ({count})
          </Badge>
        ))}
      </div>
      <Separator className="mt-8" />
    </div>
  )
}
