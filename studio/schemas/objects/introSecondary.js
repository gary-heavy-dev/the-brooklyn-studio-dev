export default {
  name: 'introSecondary',
  type: 'object',
  title: 'Intro',
  description: 'This section appears immediately after the hero section.',
  fields: [
    {
      name: 'introHeading',
      type: 'string',
      title: 'Intro Section Heading'
    },
    {
      name: 'introCopy',
      type: 'excerptPortableText',
      title: 'Intro Copy'
    },
    {
      name: 'introImagePrimary',
      type: 'mainImage',
      title: 'Intro Image (Primary)',
      description: 'This is the large image that appears to the right of the intro text on desktop. Please upload an image 1630px wide. The height is up to you!'
    },
    {
      name: 'introImageSecondary',
      type: 'mainImage',
      title: 'Intro Image (Secondary)',
      description: 'This is the smaller image that appears below the intro section link. The ideal WxH for this image upload is 1312px by 1010px.'
    }
  ]
}