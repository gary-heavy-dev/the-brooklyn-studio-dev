export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Add the SEO friendly title of this page here. For example, "People".'
    },
    {
      name: 'hero',
      type: 'heroSecondary',
      title: 'HERO',
      options: {
        collapsible: true
      }
    }
  ]
}