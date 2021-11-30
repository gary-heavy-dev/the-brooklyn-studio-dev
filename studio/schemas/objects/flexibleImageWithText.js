export default {
  name: 'flexibleImageWithText',
  type: 'object',
  title: 'Image With Text',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: Rule => Rule.required()
    },
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
    },
    {
      name: 'justification',
      type: 'string',
      description: 'Select whether the image will be justified to the right or left side on mobile.',
      options: {
        list: [
          { title: 'Right', value: 'right' },
          { title: 'Left', value: 'left' }
        ],
        layout: 'radio',
        validation: Rule => Rule.required()
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
      media: 'image',
    },
    prepare({ subtitle, media }) {
      return {
        title: "Image with Text",
        subtitle: `${subtitle}`,
        media,
      }
    }
  }
}