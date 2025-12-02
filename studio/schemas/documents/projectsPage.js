export default {
  name: 'projectsPage',
  type: 'document',
  title: 'Projects (Page)',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Add the SEO friendly title of this page here. For example, "About Us".',
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
      name: 'typeFilters',
      title: 'Project Type Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'projectType' }] }],
    },
    {
      name: 'categoryFilters',
      title: 'Project Category Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'projectCategory' }] }],
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    },
  ],
}
