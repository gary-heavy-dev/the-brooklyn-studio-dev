export default {
  name: 'home',
  type: 'document',
  title: 'Homepage',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero'
    },
    {
      name: 'intro',
      title: 'Intro Section',
      description: 'This section will always appears below the homepage hero.'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Add the SEO friendly title of this page here. For example, "Home". This will not be displayed for this particular page.'
    },
    {
      name: 'introLarge',
      type: 'text',
      title: 'Intro Text (Large)',
      description: 'This is the larger text that appears first in the Intro section.',
      fieldset: 'intro'
    },
    {
      name: 'introSmall',
      type: 'excerptPortableText',
      title: 'Intro Text (Small)',
      description: 'This is the smaller text that appears second in the Intro section.',
      fieldset: 'intro'
    },
    {
      name: 'introLinkText',
      type: 'string',
      title: 'Intro Link Text',
      description: 'This is the copy for the link in the Intro section. For example: "Read more about the studio".',
      fieldset: 'intro'
    },
    {
      name: 'introImagePrimary',
      type: 'mainImage',
      title: 'Intro Image (Primary)',
      description: 'This is the large image that appears to the right of the intro text on desktop.',
      fieldset: 'intro'
    },
    {
      name: 'introImageSecondary',
      type: 'mainImage',
      title: 'Intro Image (Secondary)',
      description: 'This is the smaller image that appears below the intro section link.',
      fieldset: 'intro'
    }
  ]
}