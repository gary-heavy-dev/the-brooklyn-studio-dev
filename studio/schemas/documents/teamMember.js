export default {
  name: 'teamMember',
  type: 'document',
  title: 'Team Member',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      description: 'Currently used for sorting purposes only.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Click the "Generate" button to generate a URL friendly slug, which you can then edit if desired.',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Bio'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Headshot',
      description: 'The ideal WxH for this image upload is 1042px by 1302px.'
    },
    {
      name: 'secondaryImage',
      type: 'mainImage',
      title: 'Optional Second Image',
      description: 'Upload an optional second image to be displayed on the "Team Members" page. The ideal WxH for this image upload is 1042px by 1302px.'
    },
    {
      name: 'questionnaire',
      type: 'proustQuestionnaire',
      title: 'The Proust Questionnaire',
      options: {collapsible: true}
    },
    {
      name: 'excludeAsFeaturedTeamMember',
      type: 'boolean',
      title: 'Exclude as a Featured Team Member',
      description: 'Check to omit this team member from the randomized featured section on the homepage and to list them last on the Team page.',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
