export default {
  name: 'headingTextPair',
  type: 'object',
  title: 'Heading & Text Pair',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'string',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'text'
    }
  }
}