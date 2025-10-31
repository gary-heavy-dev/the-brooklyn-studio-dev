export default {
  name: 'flexibleTwoImage',
  type: 'object',
  title: 'Two Image',
  initialValue: {
    imageLayout: '50-50',
    spacing: 'medium'
  },
  fields: [
    {
      name: 'imageLayout',
      type: 'string',
      title: 'Image Layout',
      description: 'Select the width ratio between the two images at desktop widths.',
      options: {
        list: [
          { title: '40 / 60', value: '40-60' },
          { title: '50 / 50', value: '50-50' },
          { title: '60 / 40', value: '60-40' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'spacing',
      type: 'string',
      title: 'Spacing',
      description: 'Select the gap between the two images.',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'imageLeft',
      type: 'mainImage',
      title: 'Image Left',
      description: 'The ideal WxH for this image upload is 1854px by 2508px',
      validation: Rule => Rule.required()
    },
    {
      name: 'imageRight',
      type: 'mainImage',
      title: 'Image Right',
      description: 'The ideal WxH for this image upload is 1854px by 2508px',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      media: 'imageLeft',
      subtitle: 'imageLeft.alt'
    },
    prepare({ subtitle, media }) {
      return {
        title: "Two Image",
        subtitle: subtitle ? `Alt: ${subtitle}` : '',
        media,
      }
    }
  }
}
