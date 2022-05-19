export default {
  type: 'object',
  name: 'simplePortableTextWrapper',
  fields: [
    {
      name: 'excerptPortableText',
      type: 'excerptPortableText',
      title: 'Section'
    }
  ],
  preview: {
    select: {
      blocks: 'excerptPortableText'
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