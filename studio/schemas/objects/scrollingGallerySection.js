export default {
  name: 'scrollingGallerySection',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'copy',
      type: 'text',
      title: 'Copy'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Gallery Image'
    }
  ]
}