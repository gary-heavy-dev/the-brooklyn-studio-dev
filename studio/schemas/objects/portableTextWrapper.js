export default {
  type: 'object',
  name: 'portableTextWrapper',
  fields: [
    {
      name: 'portableText',
      type: 'bodyPortableText',
      title: 'Section'
    }
  ],
  preview: {
    select: {
      blocks: 'portableText'
    },
    prepare(value) {
      const block = (value.blocks || []).find(block => block._type === 'block')
      return {
        title: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No title'
      }
    }
  }
}