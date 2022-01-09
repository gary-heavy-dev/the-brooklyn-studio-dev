export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fieldsets: [
    {
      name: 'projectDetails',
      title: 'Project Details',
      options: { collapsible: true, collapsed: false },
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'PROJECT TITLE',
      description: 'The full project title. For example, "Park Slope Romanesque Revival".',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'SLUG',
      description: 'Click the "Generate" button to generate a URL friendly slug, which you can then edit if desired.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'projectCategories',
      type: 'array',
      title: 'Project Categories',
      description: 'Select the categories you\'d like this project to appear for when filtering.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'projectCategory' }]
        }
      ]
    },
    {
      name: 'displayTitle',
      title: 'DISPLAY TITLE',
      type: 'displayTitle',
      options: { collapsible: true, collapsed: false }
    },
    {
      name: 'image',
      title: 'PROJECT HERO IMAGE',
      type: 'mainImage',
      description: 'Please upload an image 3840px wide and at least 1800px tall.',
      validation: Rule => Rule.required()
    },
    {
      name: 'flexibleContent',
      type: 'array',
      title: 'FLEXIBLE CONTENT',
      description: 'Choose from a list of different content types to build your page.',
      of: [
        { type: 'flexibleImage' },
        { type: 'flexibleImagePair' },
        { type: 'flexibleImageWithText' },
        { type: 'flexibleText' },
      ]
    },
    {
      name: 'detailsIntro',
      type: 'text',
      title: 'Project Details Intro Text',
      description: 'This is the optional, longer running text that introduces the details section below each project.',
      fieldset: 'projectDetails'
    },
    {
      name: 'detailsBuildingInfo',
      type: 'array',
      title: 'Building Information',
      of: [{ type: 'headingTextPair' }],
      fieldset: 'projectDetails'
    },
    {
      name: 'detailsCredits',
      type: 'array',
      title: 'Credits',
      of: [{ type: 'headingTextPair' }],
      fieldset: 'projectDetails'
    },
    {
      name: 'detailsGallery',
      type: 'array',
      title: 'Project Details Image Gallery',
      description: 'Please upload images at 1584px wide by 2014px tall!',
      of: [{ type: 'mainImage' }],
      fieldset: 'projectDetails'
    }
  ]
}