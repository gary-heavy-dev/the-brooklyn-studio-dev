export default {
  name: 'ctaSimple',
  type: 'object',
  title: 'Simple CTA',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'largeText',
      type: 'string',
      title: 'Large Text'
    },
    {
      name: 'copy',
      type: 'text',
      title: 'Copy (Small Text)'
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
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'imageLocation',
      type: 'string',
      title: 'Image Location',
      description: 'Select which side you\'d like the image to appear on.',
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