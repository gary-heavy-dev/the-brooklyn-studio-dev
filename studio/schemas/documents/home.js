export default {
  name: 'home',
  type: 'document',
  title: 'Homepage',
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
      name: 'featuredProjects',
      type: 'featuredProjects',
      title: 'FEATURED PROJECTS',
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ]
}
