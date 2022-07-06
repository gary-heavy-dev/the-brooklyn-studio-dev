export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO'
    },
    {
      name: 'social',
      title: 'SOCIAL'
    },
    {
      name: 'credits',
      title: 'CREDITS'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
      fieldset: 'seo'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media. This will be used as the page title on any pages where a title isn\'t otherwise specified.',
      validation: Rule => Rule.required(),
      fieldset: 'seo'
    },
    {
      name: 'ogImage',
      type: 'mainImage',
      title: 'OG Image',
      description: 'Upload a default sharecard image for Facebook (Open Graph). The ideal dimensions for this image are 1200px by 630px.',
      fieldset: 'seo'
    },
    {
      name: 'twitterImage',
      type: 'mainImage',
      title: 'Twitter Image',
      description: 'Upload a default sharecard image for Twitter. The ideal dimensions for this image are 800px by 418px.',
      fieldset: 'seo'
    },
    {
      name: 'socialLinkIg',
      type: 'string',
      title: 'Instagram Account Link',
      fieldset: 'social'
    },
    {
      name: 'hero',
      type: 'heroTertiary',
      title: 'Credits Page Hero',
      options: {
        collapsible: true
      },
      fieldset: 'credits'
    },
    {
      name: 'credits',
      type: 'array',
      title: 'Credits Blocks',
      description: 'Add credit blocks using the following repeater field. The multi-line text fields support HTML so you can link websites or email addresses.',
      of: [{ type: 'headingPortablePair' }],
      fieldset: 'credits'
    },
  ]
}
