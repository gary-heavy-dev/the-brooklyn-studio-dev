export default {
  name: 'featuredProjects',
  type: 'object',
  title: 'Featured Projects',
  fields: [
    {
      name: 'heading',
      type: 'text',
      title: 'Heading',
      description: 'A heading for this featured project'
    },
    {
      name: 'projects',
      title: 'Projects References',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }]
        }
      ]
    }
  ]
}
