export default {
  name: 'projectReference',
  type: 'object',
  title: 'Project Reference',
  fields: [
    {
      name: 'project',
      title: 'Project Reference',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'altThumbnail',
      title: 'Thumbnail',
      type: 'mainImage',
      description: 'Please upload the thumbnail image for the project here. The recommended size is 1226px by 818px',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'project.title',
    }
  }
}