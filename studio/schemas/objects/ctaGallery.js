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
          { title: "White", value: "white" },
          { title: "Secondary Gray - Light", value: "#F8F7F7" },
          { title: "Tertiary Gray - Light", value: "#CBD0CC" },
          { title: "Navy", value: "#262C3E" }
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
    }
  ]
}