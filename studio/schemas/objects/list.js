export default {
  name: 'list',
  type: 'object',
  title: 'List',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'List Heading'
    },
    {
      name: 'listItems',
      type: 'array',
      title: 'List Items',
      of: [{ type: 'string' }]
    }
  ]
}