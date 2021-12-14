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