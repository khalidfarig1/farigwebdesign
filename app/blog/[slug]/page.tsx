import { getPostBySlug, getPageBlocks, getAllPostSlugs } from '@/lib/notion'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Khalid Farig Web Design Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images:
        post.coverImage !== '/placeholder.svg'
          ? [{ url: post.coverImage }]
          : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

function renderRichText(richText: any[]): React.ReactNode {
  if (!richText) return null
  return richText.map((text: any, i: number) => {
    let content: React.ReactNode = text.plain_text
    if (text.annotations.bold) content = <strong key={`b-${i}`}>{content}</strong>
    if (text.annotations.italic) content = <em key={`i-${i}`}>{content}</em>
    if (text.annotations.code)
      content = (
        <code key={`c-${i}`} className="bg-navy-50 text-navy-800 px-1.5 py-0.5 rounded text-sm">
          {content}
        </code>
      )
    if (text.annotations.strikethrough) content = <s key={`s-${i}`}>{content}</s>
    if (text.annotations.underline) content = <u key={`u-${i}`}>{content}</u>
    if (text.href)
      content = (
        <a
          key={`a-${i}`}
          href={text.href}
          className="text-blue-600 hover:text-navy-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      )
    return <span key={i}>{content}</span>
  })
}

function renderBlock(block: any): React.ReactNode {
  const { type } = block
  const value = block[type]

  switch (type) {
    case 'paragraph':
      if (!value.rich_text?.length) return <div className="h-4" />
      return <p className="text-gray-700 leading-relaxed mb-4">{renderRichText(value.rich_text)}</p>

    case 'heading_1':
      return <h1 className="text-3xl font-bold text-navy-900 mt-8 mb-4">{renderRichText(value.rich_text)}</h1>

    case 'heading_2':
      return <h2 className="text-2xl font-bold text-navy-900 mt-6 mb-3">{renderRichText(value.rich_text)}</h2>

    case 'heading_3':
      return <h3 className="text-xl font-semibold text-navy-800 mt-4 mb-2">{renderRichText(value.rich_text)}</h3>

    case 'bulleted_list_item':
      return (
        <li className="text-gray-700 leading-relaxed ml-6 list-disc mb-1">
          {renderRichText(value.rich_text)}
        </li>
      )

    case 'numbered_list_item':
      return (
        <li className="text-gray-700 leading-relaxed ml-6 list-decimal mb-1">
          {renderRichText(value.rich_text)}
        </li>
      )

    case 'quote':
      return (
        <blockquote className="border-l-4 border-navy-600 pl-4 py-2 my-4 bg-navy-50 rounded-r-lg">
          <p className="text-gray-700 italic">{renderRichText(value.rich_text)}</p>
        </blockquote>
      )

    case 'code':
      return (
        <pre className="bg-navy-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-4">
          <code>{value.rich_text?.[0]?.plain_text}</code>
        </pre>
      )

    case 'image': {
      const src = value.type === 'file' ? value.file.url : value.external.url
      const caption = value.caption?.[0]?.plain_text ?? ''
      return (
        <figure className="my-6">
          {/* Using img tag for Notion images since their URLs expire */}
          <img src={src} alt={caption} className="rounded-lg w-full" loading="lazy" />
          {caption && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center">{caption}</figcaption>
          )}
        </figure>
      )
    }

    case 'divider':
      return <hr className="my-8 border-gray-200" />

    case 'callout':
      return (
        <div className="bg-navy-50 border border-navy-200 rounded-lg p-4 my-4 flex gap-3">
          <span>{value.icon?.emoji ?? 'ℹ️'}</span>
          <p className="text-gray-700">{renderRichText(value.rich_text)}</p>
        </div>
      )

    case 'toggle':
      return (
        <details className="my-4 border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold text-navy-900 cursor-pointer">
            {renderRichText(value.rich_text)}
          </summary>
        </details>
      )

    case 'bookmark':
      return (
        <a
          href={value.url}
          className="block my-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value.url}
        </a>
      )

    default:
      return null
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const blocks = await getPageBlocks(post.id)

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-navy-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 text-navy-600 hover:text-navy-800">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
          <Badge className="bg-navy-100 text-navy-800 hover:bg-navy-200 mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date ? format(new Date(post.date), 'MMMM d, yyyy') : ''}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage !== '/placeholder.svg' && (
        <div className="container mx-auto px-4 max-w-4xl -mt-2">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full rounded-lg shadow-lg object-cover max-h-[400px]"
            priority
          />
        </div>
      )}

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-12">
        {blocks.map((block: any) => (
          <div key={block.id}>{renderBlock(block)}</div>
        ))}
      </article>

      {/* Back to Blog CTA */}
      <section className="py-12 bg-navy-50">
        <div className="container mx-auto px-4 text-center">
          <Link href="/blog">
            <Button className="bg-navy-600 hover:bg-navy-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Posts
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
