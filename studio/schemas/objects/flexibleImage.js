export default {
  name: 'flexibleImage',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      validation: Rule => Rule.required()
    },
    {
      name: 'aspectRatio',
      type: 'string',
      title: 'Image Aspect Ratio',
      options: {
        list: [
          { title: 'Portrait', value: 'portrait' },
          { title: 'Landscape', value: 'landscape' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'imageLocation',
      type: 'string',
      title: 'Image Location',
      description: 'Select which side you\'d like the image to appear on.',
      options: {
        list: [
          { title: 'Right', value: 'right' },
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'margins',
      type: 'string',
      description: 'Select whether the image will be full-width or have margins on mobile.',
      options: {
        list: [
          { title: 'Full-width', value: 'full' },
          { title: 'Margins', value: 'margins' }
        ],
        layout: 'radio',
        validation: Rule => Rule.required()
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'image.alt',
      media: 'image',
    },
    prepare({ subtitle, media }) {
      return {
        title: "Image",
        subtitle: `${subtitle}`,
        media,
      }
    }
  }
}