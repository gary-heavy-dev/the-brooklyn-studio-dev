export default {
  name: 'wordBreak',
  type: 'object',
  title: 'Word Break',
  fields: [
    {
      name: 'break',
      type: 'string',
      title: 'Break',
      options: {
        list: [
          {title: 'Zero-width space', value: '&#8203;'}
        ]
      }
    }
  ]
}