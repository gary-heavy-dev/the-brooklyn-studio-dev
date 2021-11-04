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
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [{ type: 'scrollingGallerySection' }]
    }
  ]
}