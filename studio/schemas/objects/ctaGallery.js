export default {
  name: 'ctaGallery',
  type: 'object',
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
      name: 'linkText',
      type: 'string',
      title: 'Link Text'
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link'
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Image Gallery',
      of: [
        { type: 'mainImage' }
      ]
    },
    {
      name: 'imageGalleryLocation',
      type: 'string',
      title: 'Image Gallery Location',
      description: 'Select which side you\'d like the image gallery to appear on.',
      options: {
        list: [
          {title: 'Right', value: 'right'},
          {title: 'Left', value: 'left'}
        ],
        layout: 'radio'
      }
    },
    {
      name: 'reverseMobile',
      type: 'boolean',
      title: 'Reverse Order On Mobile?',
      description: 'Content on the left of this layout will display below at mobile breakpoints. Check this box to reverse the order on mobile.'
    }
  ]
}