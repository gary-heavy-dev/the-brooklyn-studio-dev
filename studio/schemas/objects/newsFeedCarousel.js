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
      name: 'cta_label',
      type: 'string',
      title: 'CTA Label'
    },
    {
      name: 'cta_url',
      type: 'url',
      title: 'CTA URL'
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
