export default {
  name: 'linkInternal',
  type: 'object',
  title: 'Link (Internal)',
  fields: [
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text'
    },
    {
      name: 'link',
      type: 'reference',
      title: 'Link',
      to: [
        { type: 'about' },
        { type: 'adaptiveReuse' },
        { type: 'home' },
        { type: 'interiorDesign' },
        { type: 'residentialArchitecture' },
        { type: 'team' },
        { type: 'teamMember' }
      ]
    }
  ]
}