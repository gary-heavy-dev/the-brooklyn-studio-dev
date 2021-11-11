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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
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
      title: 'Headshot'
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