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
      name: 'hero',
      type: 'heroSecondary',
      title: 'HERO',
      options: {
        collapsible: true
      }
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