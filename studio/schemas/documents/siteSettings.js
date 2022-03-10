export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media. This will be used as the page title on any pages where a title isn\'t otherwise specified.',
      validation: Rule => Rule.required()
    },
    {
      name: 'socialLinkIg',
      type: 'string',
      title: 'Instagram Account Link'
    }
  ]
}
