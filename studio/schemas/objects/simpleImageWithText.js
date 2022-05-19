export default {
  name: 'simpleImageWithText',
  type: 'object',
  title: 'Image With Text',
  fields: [
    { 
      name: 'text',
      type: 'excerptPortableText',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      description: 'Please upload an image 2666px wide for landscape images and 2396px for portrait images. The height of these images is up to you!',
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