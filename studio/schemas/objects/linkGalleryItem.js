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
      title: 'Link',
      to: [
        { type: 'adaptiveReuse' },
        { type: 'interiorDesign' },
        { type: 'residentialArchitecture' }
      ]
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Gallery Image',
      description: 'The ideal WxH for this image upload is 1630px by 2172px'
    }
  ]
}