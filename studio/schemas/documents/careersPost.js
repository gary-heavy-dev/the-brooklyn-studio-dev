export default {
  name: 'careersPost',
  type: 'document',
  title: 'Career Posting',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Click the "Generate" button to generate a URL friendly slug, which you can then edit if desired.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'textBlocks',
      type: 'array',
      title: 'Heading/Copy Blocks',
      of: [{ type: 'headingPortablePair' }],
      description: 'Use these blocks to add intro sections such as "Description" and "Your Impact".'
    },
    // {
    //   name: 'responsibilities',
    //   type: 'array',
    //   title: 'Responsibility List',
    //   description: 'Add individual lists with headings below.',
    //   of: [{ type: 'list' }]
    // },
    // {
    //   name: 'requirements',
    //   type: 'array',
    //   title: 'Qualifications List',
    //   description: 'Add qualification requirements below.',
    //   of: [{ type: 'string' }]
    // }
  ]
}