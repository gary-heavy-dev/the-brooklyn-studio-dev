export default {
  name: 'simpleGallery',
  type: 'object',
  title: 'Simple Image Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      description: 'Please add between 1 and 6 images. Uploaded images should be 2667px width. All images should be uploaded at the same height, which is up to you.',
      of: [{ type: 'mainImage' }],
      validation: Rule => [
        Rule.required()
          .min(1)
          .max(6)
          .error('Required field with at least 1 and at most 6 entries.'),
        Rule.unique()
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      caption: 'images.0.caption',
      alt: 'images.0.alt',
      image: 'images.0.asset'
    },
    prepare({ title, caption, alt, image }) {
      return {
        title: caption ? caption : alt,
        subtitle: 'Image Gallery',
        media: image,
      };
    },
  },
}