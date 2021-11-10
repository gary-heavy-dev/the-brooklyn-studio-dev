export default {
  name: 'ctaComplex',
  type: 'object',
  title: 'Complex CTA',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'copy',
      type: 'excerptPortableText',
      title: 'Copy'
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{ type: 'linkInternal' }]
    }
  ]
}