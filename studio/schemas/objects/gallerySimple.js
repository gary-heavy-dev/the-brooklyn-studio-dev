export default {
  name: 'gallerySimple',
  type: 'object',
  title: 'Simple Image Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      description: 'Please add between 1 and 6 images. Uploaded images should be 2667px width. All images should be uploaded at the same height, which is up to you.',
      of: [
        {
          type: 'reference',
          to: {
            type: 'mainImage'
          }
        }
      ],
      validation: Rule => [
        Rule.required()
          .min(1)
          .max(6)
          .error('Required field with at least 1 and at most 6 entries.'),
        Rule.unique()
      ]
    }
  ]
}