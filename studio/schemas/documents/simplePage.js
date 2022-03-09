export default {
  name: 'simplePage',
  title: 'Simple Page',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
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
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Subtitle',
      description: 'An optional subtitle that appears below the title in gray text.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body Content'
    }
  ],
  // preview: {
  //   select: {
  //     title: 'title'
  //   }
  // }
}