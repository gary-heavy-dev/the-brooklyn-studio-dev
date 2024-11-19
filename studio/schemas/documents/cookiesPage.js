export default {
  name: 'cookiesPage',
  type: 'document',
  title: 'Cookies (Page)',
  __experimental_actions: ['update', /* 'delete', */ 'publish'],
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
      name: 'cookies',
      title: 'Cookies',
      description: 'Select cookies that you would like to display on the cookies landing page.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'cookie'}]}]
    }
  ]
}
