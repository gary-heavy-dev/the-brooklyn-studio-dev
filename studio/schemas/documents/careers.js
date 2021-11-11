export default {
  name: 'careers',
  type: 'document',
  title: 'Careers',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Add the SEO friendly title of this page here. For example, "About Us".'
    },
    {
      name: 'hero',
      type: 'heroTertiary',
      title: 'HERO',
      options: {
        collapsible: true
      }
    },
    {
      name: 'postNotes',
      type: 'excerptPortableText',
      title: 'Career Posting Notes',
      description: 'This is the default text that appears after each job posting.'
    },
    {
      name: 'posts',
      type: 'array',
      title: 'Career Postings',
      of: [
        {
          type: 'reference',
          to: [{ type: 'careersPost' }]
        }
      ]
    }
  ]
}