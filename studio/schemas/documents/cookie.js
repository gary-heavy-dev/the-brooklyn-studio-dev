export default {
  name: 'cookie',
  type: 'document',
  title: 'Cookie',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the cookie.',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'bioPortableText',
      title: 'Description',
      description: 'A brief description of the cookie.',
      validation: Rule => Rule.required()
    },
    {
      name: 'recipe',
      type: 'reference',
      title: 'Recipe',
      description: 'Reference to the recipe page for this cookie.',
      to: [{type: 'recipePage'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      description: 'An image of the cookie. The ideal WxH for this image upload is 1042px by 1302px.',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
