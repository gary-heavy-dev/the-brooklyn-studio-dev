export default {
  name: 'introSection',
  type: 'object',
  title: 'Intro',
  description: 'This section appears immediately after the hero section.',
  fields: [
    {
      name: 'introLarge',
      type: 'text',
      title: 'Intro Text (Large)',
      description: 'This is the larger text that appears first in the Intro section.'
    },
    {
      name: 'introLinkOne',
      type: 'string',
      title: 'Intro Link One'
    },
    {
      name: 'introLinkTextOne',
      type: 'string',
      title: 'Intro Link One Text',
      description: 'This is the copy for the link in the Intro section. For example: "Read more about the studio".'
    },
    {
      name: 'introSmall',
      type: 'excerptPortableText',
      title: 'Intro Text (Small)',
      description: 'This is the smaller text that appears second in the Intro section.'
    },
    {
      name: 'introLink',
      type: 'string',
      title: 'Intro Link Two'
    },
    {
      name: 'introLinkText',
      type: 'string',
      title: 'Intro Link Two Text',
      description: 'This is the copy for the link in the Intro section. For example: "Read more about the studio".'
    },
    {
      name: 'introImagePrimary',
      type: 'mainImage',
      title: 'Intro Image (Primary)',
      description: 'This is the large image that appears to the right of the intro text on desktop. Please upload an image 1900px wide. The height is up to you, but 1682px is recommended.'
    },
    {
      name: 'introImageSecondary',
      type: 'mainImage',
      title: 'Intro Image (Secondary)',
      description: 'This is the smaller image that appears below the intro section link. The ideal WxH for this image upload is 1312px by 1010px.'
    }
  ]
}
