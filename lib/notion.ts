import { Client } from '@notionhq/client'

const isConfigured =
  process.env.NOTION_API_KEY &&
  process.env.NOTION_DATABASE_ID &&
  !process.env.NOTION_API_KEY.includes('REPLACE')

const notion = isConfigured
  ? new Client({ auth: process.env.NOTION_API_KEY })
  : null

const databaseId = process.env.NOTION_DATABASE_ID ?? ''

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  category: string
  coverImage: string
  readTime: string
  author: string
}

// Get the data source ID from the database
async function getDataSourceId(): Promise<string | null> {
  if (!notion) return null
  try {
    const db = await notion.databases.retrieve({ database_id: databaseId })
    const dataSources = (db as any).data_sources
    return dataSources?.[0]?.id ?? null
  } catch {
    return null
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  if (!notion) return []

  const dataSourceId = await getDataSourceId()
  if (!dataSourceId) return []

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: 'Published',
      checkbox: { equals: true },
    },
    sorts: [{ property: 'Date', direction: 'descending' }],
  })

  return response.results.map((page: any) => {
    const props = page.properties
    return {
      id: page.id,
      title: props.Name?.title?.[0]?.plain_text ?? '',
      slug: props.Slug?.rich_text?.[0]?.plain_text ?? '',
      excerpt: props.Excerpt?.rich_text?.[0]?.plain_text ?? '',
      date: props.Date?.date?.start ?? '',
      category: props.Category?.select?.name ?? '',
      coverImage:
        props['Cover Image']?.files?.[0]?.file?.url ??
        props['Cover Image']?.files?.[0]?.external?.url ??
        '/placeholder.svg',
      readTime: props['Read Time']?.rich_text?.[0]?.plain_text ?? '5 min read',
      author: props.Author?.rich_text?.[0]?.plain_text ?? 'Khalid Farig',
    }
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!notion) return null

  const dataSourceId = await getDataSourceId()
  if (!dataSourceId) return null

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      and: [
        { property: 'Slug', rich_text: { equals: slug } },
        { property: 'Published', checkbox: { equals: true } },
      ],
    },
  })

  if (response.results.length === 0) return null

  const page: any = response.results[0]
  const props = page.properties

  return {
    id: page.id,
    title: props.Name?.title?.[0]?.plain_text ?? '',
    slug: props.Slug?.rich_text?.[0]?.plain_text ?? '',
    excerpt: props.Excerpt?.rich_text?.[0]?.plain_text ?? '',
    date: props.Date?.date?.start ?? '',
    category: props.Category?.select?.name ?? '',
    coverImage:
      props['Cover Image']?.files?.[0]?.file?.url ??
      props['Cover Image']?.files?.[0]?.external?.url ??
      '/placeholder.svg',
    readTime: props['Read Time']?.rich_text?.[0]?.plain_text ?? '5 min read',
    author: props.Author?.rich_text?.[0]?.plain_text ?? 'Khalid Farig',
  }
}

export async function getPageBlocks(pageId: string) {
  if (!notion) return []

  const blocks: any[] = []
  let cursor: string | undefined

  do {
    const response: any = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    })
    blocks.push(...response.results)
    cursor = response.has_more ? response.next_cursor : undefined
  } while (cursor)

  return blocks
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getPublishedPosts()
  return posts.map((post) => post.slug)
}
