export default {
  name: 'headingPortablePair',
  type: 'object',
  title: 'Heading + Copy Pair',
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
    }
  ]
}