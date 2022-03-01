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
      description: 'Currently used for sorting purposes only.',
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
      name: 'questionnaire',
      type: 'proustQuestionnaire',
      title: 'The Proust Questionnaire',
      options: { collapsible: true }
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}