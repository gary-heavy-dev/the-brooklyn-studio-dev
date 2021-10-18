export default {
  name: 'about',
  type: 'document',
  title: 'About',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero'
    },
    {
      name: 'intro',
      title: 'Intro Section',
      description: 'This section will always appears below the About page hero.'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Add the SEO friendly title of this page here. For example, "About Us".'
    },
    {
      name: 'introTitle',
      type: 'string',
      title: 'Intro Title',
      fieldset: 'intro'
    },
    {
      name: 'introEyebrow',
      type: 'string',
      title: 'Intro Eyebrow',
      fieldset: 'intro'
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
      description: 'This is the smaller image that appears below the intro section text.',
      fieldset: 'intro'
    }
  ]
}