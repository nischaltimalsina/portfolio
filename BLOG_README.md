# Blog Module

A complete blog system built with Next.js, MDX, and TypeScript.

## Features

- 📝 Write blog posts in MDX
- 🎨 Syntax highlighting with Shiki
- 🏷️ Tag system for categorization
- 🔍 SEO optimized with metadata
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Server-side rendering
- 🚀 Static generation for performance
- 🧭 Blog navigation (previous/next posts)
- 📊 Reading time estimation

## Directory Structure

```
/content/blog/          # MDX blog posts
/app/blog/              # Blog pages
  - page.tsx            # Blog listing page
  - [slug]/page.tsx     # Individual blog post page
  - not-found.tsx       # 404 page
/components/blog/       # Blog components
  - blog-card.tsx       # Blog post card component
  - blog-header.tsx     # Blog post header
  - blog-navigation.tsx # Post navigation (prev/next)
  - mdx-components.tsx  # Custom MDX components
/lib/
  - blog.ts             # Blog utility functions
  - utils.ts            # Shared utilities
```

## Creating a New Blog Post

1. Create a new `.mdx` file in `/content/blog/`
2. Add frontmatter metadata:

```mdx
---
title: "Your Blog Post Title"
excerpt: "A brief description of your post"
date: "2024-12-14"
author: "Your Name"
tags: ["tag1", "tag2"]
published: true
---

# Your Content Here

Write your blog post content using Markdown and MDX...
```

## Frontmatter Fields

- `title` (required): Post title
- `excerpt` (required): Short description
- `date` (required): Publication date (YYYY-MM-DD)
- `author` (required): Author name
- `tags` (required): Array of tags
- `published` (required): Boolean to show/hide post

## Custom Components

You can use custom components in your MDX:

### Callout Component

```mdx
<Callout type="info">
This is an informational callout!
</Callout>

<Callout type="warning">
This is a warning!
</Callout>

<Callout type="success">
This is a success message!
</Callout>

<Callout type="danger">
This is a danger alert!
</Callout>
```

## Code Blocks

Code blocks support syntax highlighting:

````mdx
```typescript
function hello(name: string) {
  console.log(`Hello, ${name}!`)
}
```
````

## API Functions

### `getAllPosts()`
Returns all published blog posts sorted by date (newest first).

### `getPostBySlug(slug)`
Returns a single blog post by its slug.

### `getAdjacentPosts(slug)`
Returns the previous and next posts for navigation.

### `getAllTags()`
Returns all tags with post counts.

### `getPostsByTag(tag)`
Returns all posts with a specific tag.

## Styling

The blog uses Tailwind CSS with custom prose styling for MDX content. Code blocks are styled with `rehype-pretty-code` using GitHub themes (light/dark).

## Performance

- Static generation at build time
- Optimized images with Next.js Image
- Minimal JavaScript bundle
- Server Components by default

## SEO

Each blog post includes:
- Dynamic metadata (title, description)
- Open Graph tags
- Twitter Card support
- Structured publication data
- Semantic HTML

## Development

To run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000/blog` to see your blog.

## Building for Production

```bash
npm run build
npm start
```

All blog posts will be statically generated at build time for optimal performance.
