export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fieldsets: [
    {
      name: 'projectDetails',
      title: 'Project Details',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'PROJECT TITLE',
      description: 'The full project title. For example, "Park Slope Romanesque Revival".',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'SLUG',
      description:
        'Click the "Generate" button to generate a URL friendly slug, which you can then edit if desired.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      description:
        'Add an optional SEO friendly description of this page. Aim for a description between 120 and 155 characters that accurately describes what this page is using relevant keywords where possible. If no description is provided the default description in the "Settings" tab will be used.',
      validation: (Rule) => Rule.max(155),
    },
    {
      name: 'projectCategories',
      type: 'array',
      title: 'Project Categories',
      description: "Select the categories you'd like this project to appear for when filtering.",
      of: [
        {
          type: 'reference',
          to: [{ type: 'projectCategory' }],
        },
      ],
    },
    {
      name: 'projectTypes',
      type: 'array',
      title: 'Project Types',
      description: "Select the types you'd like this project to appear for when filtering.",
      of: [
        {
          type: 'reference',
          to: [{ type: 'projectType' }],
        },
      ],
    },
    {
      name: 'displayTitle',
      title: 'DISPLAY TITLE',
      type: 'displayTitle',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'image',
      title: 'PROJECT HERO IMAGE',
      type: 'mainImage',
      description:
        'Please upload an image 3840px wide and at least 1800px tall.  This image is also used as the project thumbnail in the project grid.',
    },
    {
      name: 'hideHeroImage',
      title: 'Hide Hero Image on Page?',
      type: 'boolean',
      default: 'false',
      description:
        "If enabled, the main Hero Image will be hidden from display on the page itself (for new layouts using the Flexible Content's 'Image' module). Regardless of this setting, this image will always be used as the project's thumbnail in the main project grid.",
    },
    {
      name: 'mobileHeroImage',
      type: 'mainImage',
      title: 'Mobile Hero Image (Optional)',
      description:
        'If a specific crop is required for the mobile hero image, please upload one here. The ideal WxH for this image upload is 1024px by 1383px.',
    },
    {
      name: 'flexibleContent',
      type: 'array',
      title: 'FLEXIBLE CONTENT',
      description: 'Choose from a list of different content types to build your page.',
      of: [
        { type: 'imageObject' },
        { type: 'imageTwoUpObject' },
        { type: 'flexibleImage' },
        { type: 'flexibleImagePair' },
        { type: 'flexibleImageWithText' },
        { type: 'flexibleTwoImage' },
        { type: 'flexibleText' },
      ],
    },
    {
      name: 'detailsIntro',
      type: 'text',
      title: 'Project Details Intro Text',
      description:
        'This is the optional, shorter, unformatted text that introduces the details section below each project.',
      fieldset: 'projectDetails',
    },
    {
      name: 'details',
      type: 'bodyPortableText',
      title: 'Project Details',
      description:
        'This is the optional, longer running text that elaborates on the details of the project.',
      fieldset: 'projectDetails',
    },
    {
      name: 'detailsBuildingInfo',
      type: 'array',
      title: 'Building Information',
      of: [{ type: 'headingTextPair' }],
      fieldset: 'projectDetails',
    },
    {
      name: 'detailsCredits',
      type: 'array',
      title: 'Credits',
      of: [{ type: 'headingTextPair' }],
      fieldset: 'projectDetails',
    },
    {
      name: 'detailsGallery',
      type: 'array',
      title: 'Project Details Image Gallery',
      description: 'Please upload images at 1584px wide by 2014px tall!',
      of: [{ type: 'mainImage' }],
      fieldset: 'projectDetails',
    },
  ],
}
