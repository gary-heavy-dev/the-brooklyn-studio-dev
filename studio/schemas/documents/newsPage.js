export default {
  name: 'newsPage',
  type: 'document',
  title: 'News (Page)',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Add the SEO friendly title of this page here. For example, "About Us".'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      description: 'Add an optional SEO friendly description of this page. Aim for a description between 120 and 155 characters that accurately describes what this page is using relevant keywords where possible. If no description is provided the default description in the "Settings" tab will be used.',
      validation: Rule => Rule.max(155)
    },
    {
      name: 'hero',
      type: 'heroSecondary',
      title: 'HERO',
      options: {
        collapsible: true
      }
    },
    {
      name: 'newsFeedIntro',
      type: 'excerptPortableText',
      title: 'News Feed Intro'
    },
    {
      name: 'featuredNews',
      title: 'Featured Post',
      type: 'reference',
      to: [{ type: 'news' }]
    },
    {
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'award'}] }],
    },
    {
      name: 'press',
      title: 'Press',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'press'}] }],
    }
  ]
}