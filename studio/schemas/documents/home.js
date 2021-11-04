export default {
  name: 'home',
  type: 'document',
  title: 'Homepage',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'TITLE',
      description: 'Add the SEO friendly title of this page here. For example, "Home". This will not be displayed for this particular page.'
    },
    {
      name: 'heroImages',
      type: 'heroHome',
      title: 'HERO IMAGES',
      description: 'One image will be randomly selected from this pool of images on load.',
      options: { 
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'introSection',
      type: 'introSection',
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
        { type: 'featuredTeamMember' }
      ]
    }
  ]
}