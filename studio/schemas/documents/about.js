export default {
  name: 'about',
  type: 'document',
  title: 'About',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero'
    },
    {
      name: 'intro',
      title: 'Intro Section',
      description: 'This section will always appears below the About page hero.'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Add the SEO friendly title of this page here. For example, "About Us".'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      description: 'Add an optional SEO friendly description of this page. Aim for a description between 120 and 155 characters that accurately describes what this page is using relevant keywords where possible. If no description is provided the default description in the "Settings" tab will be used.',
      validation: Rule => Rule.max(155)
    },
    {
      name: 'hero',
      type: 'heroSecondary',
      title: 'HERO',
      options: {
        collapsible: true
      }
    },
    {
      name: 'introSection',
      type: 'introSecondary',
      title: 'INTRO',
      options: { collapsible: true }
    },
    {
      name: 'flexibleContent',
      type: 'array',
      title: 'FLEXIBLE CONTENT',
      description: 'Choose from a list of different content types to build your page.',
      of: [
        { type: 'linkGallery' },
        { type: 'ctaGallery' },
        { type: 'ctaSimple' },
        { type: 'featuredTeamMember' },
        { type: 'scrollingGallery' },
        { type: 'ctaComplex' }
      ]
    }
  ]
}