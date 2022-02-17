export default {
  name: 'projectReference',
  type: 'object',
  title: 'Project Reference',
  fields: [
    {
      name: 'project',
      title: 'Project Reference',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'altThumbnail',
      title: 'Alternate Thumbnail',
      type: 'mainImage',
      description: 'If you\'d like an alternate thumbnail to display for this category, please upload it here. The recommended size is 1226px by 818px',
    }
  ],
  preview: {
    select: {
      title: 'project.title',
    }
  }
}