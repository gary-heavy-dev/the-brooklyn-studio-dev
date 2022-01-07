export default {
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Award Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      title: 'Award Year',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year'
    }
  }
}