export default {
  name: 'ctaComplex',
  type: 'object',
  title: 'Complex CTA',
  fields: [
    {
      name: 'leftImage',
      type: 'mainImage',
      title: 'Left Image',
      description: 'This image is displayed in the left content column at desktop widths. Please upload an image 1630px wide. The height is up to you, but a portrait aspect ratio is recommended.',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'navTitle',
      type: 'string',
      title: 'Navigation Title',
      description: 'If the page this section will be on has a sub nav please add a short title here for inclusion in that nav bar. Then, use the slug generator below to create a URL friendly version of this title.'
    },
    {
      name: 'copy',
      type: 'excerptPortableText',
      title: 'Copy'
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{ type: 'linkSimple' }]
    },
    {
      name: 'rightImage',
      type: 'mainImage',
      title: 'Right Image',
      description: 'This image is displayed in the right content column at desktop widths. Please upload an image 1900px wide. The height is up to you, but a landscape aspect ratio is recommended.',
    },
  ]
}