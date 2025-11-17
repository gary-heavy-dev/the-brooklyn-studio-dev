export default {
  name: 'imageTwoUpObject',
  type: 'object',
  title: 'Image Two Up',
  fields: [
    {
      name: 'imageLeft',
      type: 'mainImage',
      title: 'Left Image',
      description: 'The image to be displayed on the left side.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageRight',
      type: 'mainImage',
      title: 'Right Image',
      description: 'The image to be displayed on the right side.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ratio',
      type: 'string',
      title: 'Display Ratio',
      description: 'Select the ratio at which the two images will display (Left/Right).',
      options: {
        list: [
          { title: '50% / 50%', value: '50-50' },
          { title: '33% / 67% (1/3, 2/3)', value: '33-67' },
          { title: '67% / 33% (2/3, 1/3)', value: '67-33' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'caption',
    //   type: 'string',
    //   title: 'Optional Caption',
    //   description: 'A single optional caption to display beneath the two images.',
    // },
  ],
  preview: {
    select: {
      ratio: 'ratio',
      mediaLeft: 'imageLeft',
    },
    prepare({ ratio, mediaLeft }) {
      const ratioTitle = ratio ? `Ratio: ${ratio}` : 'Ratio not set'
      return {
        title: 'Image Two Up',
        subtitle: ratioTitle,
        media: mediaLeft,
      }
    },
  },
}
