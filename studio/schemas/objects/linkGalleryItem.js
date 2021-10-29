export default {
  name: 'linkGalleryItem',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'copy',
      type: 'string',
      title: 'Link Text',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'link',
      type: 'reference',
      to: [
        { type: 'adaptiveReuse' },
        { type: 'interiorDesign' },
        { type: 'residentialArchitecture' }
      ]
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Gallery Image'
    }
  ]
}