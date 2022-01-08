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
      name: 'navTitle',
      type: 'string',
      title: 'Navigation Title',
      description: 'If the page this section will be on has a sub nav please add a short title here for inclusion in that nav bar. Then, use the slug generator below to create a URL friendly version of this title.'
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