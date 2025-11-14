export default {
  name: 'heroHome',
  type: 'object',
  title: 'Hero Home',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      description: 'The ideal WxH for these image uploads is 3840px by 1956px.',
      of: [
        {
          type: 'mainImage'
        }
      ]
    },
    {
      name: 'enableIntro',
      type: 'boolean',
      title: 'Enable Intro',
      description: 'Will display Intro for the homepage.',
      initialValue: false
    }
  ]
}
