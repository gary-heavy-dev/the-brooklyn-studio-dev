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
      name: 'navTitle',
      type: 'string',
      title: 'Navigation Title',
      description: 'If the page this section will be on has a sub nav please add a short title here for inclusion in that nav bar. Then, use the slug generator below to create a URL friendly version of this title.'
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
      description: 'The ideal WxH for this image upload is 2170px by 2712px.'
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [{ type: 'scrollingGallerySection' }]
    }
  ]
}