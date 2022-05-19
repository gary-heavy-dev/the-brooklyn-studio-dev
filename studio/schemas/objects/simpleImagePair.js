export default {
  name: 'simpleImagePair',
  type: 'object',
  title: 'Image Pair',
  fields: [
    {
      name: 'imageLeft',
      type: 'mainImage',
      title: 'Left Image',
      description: 'The ideal WxH for this image upload is 1557px by 1343px',
      validation: Rule => Rule.required()
    },
    {
      name: 'imageRight',
      type: 'mainImage',
      title: 'Right Image',
      description: 'The ideal WxH for this image upload is 1557px by 1343px',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'imageLeft.alt',
      media: 'imageLeft',
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