export default {
  name: 'careersPost',
  type: 'document',
  title: 'Career Posting',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'overview',
      type: 'excerptPortableText',
      title: 'Overview'
    },
    {
      name: 'responsibilities',
      type: 'array',
      title: 'Responsibility List',
      description: 'Add individual lists with headings below.',
      of: [{ type: 'list' }]
    },
    {
      name: 'requirements',
      type: 'array',
      title: 'Requirements List',
      description: 'Add list items below.',
      of: [{ type: 'string' }]
    }
  ]
}