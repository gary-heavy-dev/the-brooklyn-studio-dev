export default {
  name: 'newsFeedCarousel',
  type: 'object',
  title: 'News Feed Carousel',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'cta',
      type: 'object',
      title: 'Call To Action',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label'
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL'
        }
      ]
    },
    {
      name: 'news',
      title: 'News References',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'news' }
          ]
        }
      ]
    }
  ]
}
