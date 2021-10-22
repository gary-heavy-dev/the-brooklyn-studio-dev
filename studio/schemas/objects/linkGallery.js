export default {
  name: 'linkGallery',
  type: 'object',
  title: 'Link Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'For example: "Projects"'
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro',
      description: 'Provide a brief description on the sections of the site you\'ll be linking to.'
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{ type: 'linkGalleryItem' }]
    }
  ]
}