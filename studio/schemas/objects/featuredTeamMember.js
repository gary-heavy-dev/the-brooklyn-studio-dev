export default {
  name: 'featuredTeamMember',
  type: 'object',
  title: 'Featured Team Member',
  description: 'If no member is selected a random team member will be displayed.',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'copy',
      type: 'bioPortableText',
      title: 'Copy'
    },
    {
      name: 'teamMember',
      type: 'reference',
      title: 'Team Member',
      description: 'Leave this empty to display a random team member.',
      to: [{ type: 'teamMember' }]
    }
  ]
}