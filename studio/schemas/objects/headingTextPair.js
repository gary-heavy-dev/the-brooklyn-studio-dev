export default {
  name: 'headingTextPair',
  type: 'object',
  title: 'Heading & Text Pair',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'string',
      title: 'Text'
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link URL',
      description: 'For internal links please use the relative URL, for example "/about-us/team".'
    },
    {
      name: 'newTab',
      type: 'boolean',
      title: 'New Tab',
      description: 'Switch this on to open link in new tab'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'text'
    }
  }
}
