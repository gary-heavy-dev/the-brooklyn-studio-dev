export default {
  name: 'heroTertiary',
  type: 'object',
  title: 'Hero Tertiary',
  fields: [
    {
      name: 'image',
      type: 'mainImage',
      title: 'Hero Image',
      description: 'This image appears to the right of the copy (at desktop widths). The image you upload should be resized to 1630px wide. The height is up to you, but a portrait orientation is recommended.'
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro Text'
    }
  ]
}