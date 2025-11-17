export default {
  name: 'imageObject',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      description:
        'Please upload an image. This component will display the image at full-page width. 3486px X 2164px preferred dimensions.',
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'caption',
    //   type: 'string',
    //   title: 'Caption',
    //   description: 'Optional caption to display beneath the image.',
    // },
  ],
  preview: {
    select: {
      title: 'title',
      // subtitle: 'caption',
      media: 'image',
    },
    prepare({ media }) {
      return {
        title: 'Image (Full Width)',
        // subtitle: subtitle,
        media,
      }
    },
  },
}
