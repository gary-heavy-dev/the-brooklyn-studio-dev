export default {
  name: 'scrollingGallery',
  type: 'object',
  title: 'Scrolling Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'For example: "Guiding Principles"'
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro',
      description: 'Provide a brief description on the subsections you\'ll be displaying.'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Default Image',
      description: 'The ideal WxH for this image upload is 2170px by 1956px.'
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [{ type: 'scrollingGallerySection' }]
    }
  ]
}