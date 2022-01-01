export default {
  name: 'flexibleImagePair',
  type: 'object',
  title: 'Image Pair',
  fields: [
    {
      name: 'imageLarge',
      type: 'mainImage',
      title: 'Large Image',
      description: 'The ideal WxH for this image upload is 1854px by 2508px',
      validation: Rule => Rule.required()
    },
    {
      name: 'imageSmall',
      type: 'mainImage',
      title: 'Small Image',
      description: 'The ideal WxH for this image upload is 1042px by 1420px',
      validation: Rule => Rule.required()
    },
    {
      name: 'imageLargeLocation',
      type: 'string',
      title: 'Large Image Location',
      description: 'Select which side you\'d like the LARGE image to appear on at desktop widths.',
      options: {
        list: [
          { title: 'Right', value: 'right' },
          { title: 'Left', value: 'left' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'reverseMobile',
      type: 'boolean',
      title: 'Reverse Order On Mobile?',
      description: 'Content on the left of this layout will display below at mobile breakpoints. Check this box to reverse the order on mobile.'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'imageLarge.alt',
      media: 'imageLarge',
    },
    prepare({ subtitle, media }) {
      return {
        title: "Image Pair",
        subtitle: `${subtitle}`,
        media,
      }
    }
  }
}