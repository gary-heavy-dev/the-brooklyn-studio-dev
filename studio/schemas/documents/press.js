export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'This could be the article name, publication name, or a combination of the two. This displays in blue on the News page.',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'pubDate',
      title: 'Publication Date',
      description: 'This is primarily for the publication date, but feel free to include the name of the publication. For example, this could be either "2017 April" or "Interiors & Design, 2008". This is the text that appears in gray on the News page.',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pubDate'
    }
  }
}