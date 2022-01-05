export default {
  name: 'linkSimple',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'linkText',
      title: 'Link Text',
      description: 'For example "Read More" or "Meet Our Team".',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link URL',
      description: 'For internal links please use the relative URL, for example "/about-us/team".',
      type: 'string'
    }
  ]
}