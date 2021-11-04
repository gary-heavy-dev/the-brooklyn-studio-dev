export default {
  name: 'heroHome',
  type: 'object',
  title: 'Hero Home',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'mainImage'
        }
      ]
    }
  ]
}