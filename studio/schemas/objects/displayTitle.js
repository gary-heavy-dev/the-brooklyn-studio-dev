export default {
  name: 'displayTitle',
  type: 'object',
  title: 'Display Title',
  fields: [
    {
      name: 'displayTitleStatus',
      type: 'boolean',
      title: 'Turn on the alternate display title to show your title as two separate lines on the project page.'
    },
    {
      name: 'lineOne',
      title: 'Line One',
      type: 'string',
      description: 'This is used for the first line of the title when displayed on the individual project page. For example "Park Slope".'
    },
    {
      name: 'lineTwo',
      title: 'Line Two',
      type: 'string',
      description: 'This is used for the second line of the title when displayed on the individual project page. For example, "Romanesque Revival".'
    },
    {
      name: 'inactiveLink',
      type: 'boolean',
      title: 'Inactive Link',
      description: 'Indicates whether the project link is inactive. If set to true, the project will display an overlay and will not link out.',
      initialValue: false
    },
    {
      name: 'overlayText',
      title: 'Overlay Text',
      type: 'string',
      description: 'Text to display in the overlay when the project link is inactive. For example, "Coming Soon".',
      hidden: ({ parent }) => !parent?.inactiveLink
    }
  ]
}