export default {
  name: 'flexibleTwoImage',
  type: 'object',
  title: 'LEGACY:Two Image',
  initialValue: {
    imageLayout: '50-50',
    spacing: 'medium',
  },
  fields: [
    {
      name: 'imageLayout',
      type: 'string',
      title: 'Image Layout',
      description: 'Select the width ratio between the two images at desktop widths.',
      options: {
        list: [
          { title: '1/3 – 2/3', value: '33-67' },
          { title: '1/2 – 1/2', value: '50-50' },
          { title: '2/3 – 1/3', value: '67-33' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
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
          { title: 'Large', value: 'large' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageLeft',
      type: 'mainImage',
      title: 'Image Left',
      description: 'The ideal WxH for this image upload is 1854px by 2508px',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageRight',
      type: 'mainImage',
      title: 'Image Right',
      description: 'The ideal WxH for this image upload is 1854px by 2508px',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'imageLeft',
      subtitle: 'imageLeft.alt',
    },
    prepare({ subtitle, media }) {
      return {
        title: 'LEGACY:Two Image',
        subtitle: subtitle ? `Alt: ${subtitle}` : '',
        media,
      }
    },
  },
}
