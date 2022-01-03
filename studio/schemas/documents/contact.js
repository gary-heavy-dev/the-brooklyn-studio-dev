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