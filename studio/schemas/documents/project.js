export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fieldsets: [
    {
      name: 'displayTitle',
      title: 'DISPLAY TITLE',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'PROJECT TITLE',
      description: 'The full project title. For example, "Park Slope Romanesque Revival".',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'SLUG',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'This location is used for the first half of the title when displayed on the individual project page. For example "Park Slope".',
      validation: Rule => Rule.required(),
      fieldset: 'displayTitle'
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      description: 'The "Project Type" is used for the second half of the title when displayed on the individual project page. For example, "Romanesque Revival".',
      validation: Rule => Rule.required(),
      fieldset: 'displayTitle'
    },
    {
      name: 'image',
      title: 'PROJECT HERO IMAGE',
      type: 'mainImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'flexibleContent',
      type: 'array',
      title: 'FLEXIBLE CONTENT',
      description: 'Choose from a list of different content types to build your page.',
      of: [
        { type: 'flexibleImage' },
        { type: 'flexibleImagePair' },
        { type: 'flexibleImageWithText' },
        { type: 'flexibleText' },
      ]
    }
  ]
}