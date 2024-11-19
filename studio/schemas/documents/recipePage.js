export default {
  name: 'recipePage',
  title: 'Recipe Page',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      description: 'Add an optional SEO friendly description of this page. Aim for a description between 120 and 155 characters that accurately describes what this page is using relevant keywords where possible. If no description is provided the default description in the "Settings" tab will be used.',
      validation: Rule => Rule.max(155)
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'An optional subtitle that appears below the title in gray text.'
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      description: 'Use sections to group headings. Each section has a larger bottom margin than the standard paragraph.',
      of: [{type: 'portableTextWrapper'}]
    }
  ]
}
