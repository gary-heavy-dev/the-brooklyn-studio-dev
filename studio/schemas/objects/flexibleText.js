export default {
  name: 'flexibleText',
  type: 'object',
  title: 'LEGACY:Text',
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      fieldText: 'text',
    },
    prepare({ fieldText }) {
      const truncatedText = fieldText
        ? fieldText.substring(0, 50) + (fieldText.length > 50 ? '...' : '')
        : '(Empty)'

      const fullTitle = `LEGACY:Text -- ${truncatedText}`

      return {
        title: fullTitle,
        subTitle: '',
      }
    },
  },
}
