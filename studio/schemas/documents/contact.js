export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'TITLE',
      description: 'Add the SEO friendly title of this page here. For example, "About Us".'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      description: 'Add an optional SEO friendly description of this page. Aim for a description between 120 and 155 characters that accurately describes what this page is using relevant keywords where possible. If no description is provided the default description in the "Settings" tab will be used.',
      validation: Rule => Rule.max(155)
    },
    {
      name: 'hero',
      type: 'heroSecondary',
      title: 'HERO',
      options: {
        collapsible: true
      }
    },
    {
      name: 'textBlocks',
      type: 'array',
      title: 'Heading/Copy Blocks',
      of: [{ type: 'headingPortablePair' }]
    },
    {
      name: 'secondaryImage',
      type: 'mainImage',
      title: 'SECONDARY IMAGE',
      description: 'This image appears to the right of the copy (at desktop widths). The image you upload should be resized to 1630px wide. The height is up to you, but a portrait orientation is recommended.'
    }
  ]
}