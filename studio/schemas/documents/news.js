import {format} from 'date-fns'

export default {
  name: 'news',
  type: 'document',
  title: 'News Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'An optional subtitle that appears below the post\'s title in gray text.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Click the "Generate" button to generate a URL friendly slug, which you can then edit if desired.',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'publisher',
      type: 'reference',
      title: 'Publisher',
      description: 'Add an optional publisher.',
      to: {
        type: 'publisher'
      }
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      description: 'Add an optional author.',
      to: {
        type: 'author'
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
      description: 'Please upload an image 2170px wide. The height is up to you!'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description: 'This ends up on summary pages, on Google, when people share your post in social media. The contents of this field are also used for the SEO friendly page description.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      title: 'External Link',
      description: 'If this news post should link to an external URL, please paste that URL here.'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories/Tags',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'flexibleContent',
      type: 'array',
      title: 'FLEXIBLE CONTENT',
      description: 'Choose from a list of different content types to build your page.',
      of: [
        { type: 'flexibleImage' },
        { type: 'flexibleImagePair' },
        { type: 'flexibleImageWithText' },
        { type: 'flexibleText' },
        { type: 'gallerySimple' },
      ]
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      description: 'Use sections to group headings. Each section has a larger bottom margin than the standard paragraph.',
      of: [{ type: 'portableTextWrapper' }]
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      try {
        const dateSegment = format(new Date(publishedAt), 'yyyy/MM')
        const path = `/${dateSegment}/${slug.current}/`
        return {
          title,
          media,
          subtitle: publishedAt ? path : 'Missing publishing date'
        }
      } catch (error) {
        return {
          title,
          media
        }
      }
    }
  }
}
