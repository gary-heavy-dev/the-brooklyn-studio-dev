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
      name: 'heroImage',
      type: 'mainImage',
      title: 'Hero Image',
      description: 'The ideal WxH for this image upload is 3422px by 1332px.',
      validation: Rule => Rule.required()
    },
    {
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }]
        }
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