export default {
  name: 'residentialArchitecture',
  type: 'document',
  title: 'Residential Architecture',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Add the SEO friendly title of this page here. For example, "Residential Architecture". This will also be displayed in the hero section of this page.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Click the "Generate" button to generate a URL friendly slug, which you can then edit if desired.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      description: 'Add an optional SEO friendly description of this page. Aim for a description between 120 and 155 characters that accurately describes what this page is using relevant keywords where possible. If no description is provided the default description in the "Settings" tab will be used.',
      validation: Rule => Rule.max(155)
    },
    {
      name: 'heroImage',
      type: 'mainImage',
      title: 'Hero Image',
      description: 'The ideal WxH for this image upload is 3422px by 1332px.',
      validation: Rule => Rule.required()
    },
    {
      name: 'projectReferences',
      type: 'array',
      title: 'Projects',
      of: [
        { type: 'projectReference' }
      ]
    },
    {
      name: 'projectCategories',
      type: 'array',
      title: 'Project Categories',
      of: [
        {
          type: 'reference',
          to: [{ type: 'projectCategory' }]
        }
      ]
    }
  ]
}