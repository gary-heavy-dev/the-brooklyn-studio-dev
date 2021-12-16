export default {
  name: 'ctaGallery',
  title: 'CTA Gallery',
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
      name: "bgColor",
      type: "colorlist", // required
      title: "Background Color",
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%"
        },
        list: [
          { title: "white", value: "white" },
          { title: "gray-light", value: "#F8F7F7" },
          { title: "gray-tertiary-light", value: "#CBD0CC" },
          { title: "navy", value: "#262C3E" }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'imageGalleryLocation',
      type: 'string',
      title: 'Image Gallery Location',
      description: 'Select which side you\'d like the image gallery to appear on.',
      options: {
        list: [
          { title: 'Right', value: 'right' },
          { title: 'Left', value: 'left' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'reverseMobile',
      type: 'boolean',
      title: 'Reverse Order On Mobile?',
      description: 'Content on the left of this layout will display below at mobile breakpoints. Check this box to reverse the order on mobile.'
    },
    {
      name: 'paddingSize',
      type: 'string',
      title: 'Vertical Padding Size',
      description: 'Select the size of the vertical padding.',
      options: {
        list: [
          {title: '80 mobile / 100 desktop', value: '100'},
          {title: '0 mobile / 0 desktop', value: '0'}
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    }
  ]
}