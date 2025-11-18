export default {
  name: 'imageTwoUpObject',
  type: 'object',
  title: 'Image Two Up',
  fields: [
    {
      name: 'ratio',
      type: 'string',
      title: 'Display Ratio',

      options: {
        list: [
          { title: '50% / 50%', value: '50-50' },
          { title: '33% / 67% (1/3, 2/3)', value: '33-67' },
          { title: '67% / 33% (2/3, 1/3)', value: '67-33' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageLeft',
      type: 'mainImage',
      title: 'Left Image',
      description: (
        <>
          Left image recommended sizes:
          <br />
          • 50/50 — 1670×2410px
          <br />
          • 33/67 — 1220×1630px
          <br />• 67/33 — 2124×1630px
        </>
      ),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageRight',
      type: 'mainImage',
      title: 'Right Image',
      description: (
        <>
          Right image recommended sizes:
          <br />
          • 50/50 — 1670×2410px
          <br />
          • 33/67 — 2124×1630px
          <br />• 67/33 — 1220×1630px
        </>
      ),
    },
  ],
  preview: {
    select: {
      ratio: 'ratio',
      mediaLeft: 'imageLeft',
    },
    prepare({ ratio, mediaLeft }) {
      const ratioTitle = ratio ? `Ratio: ${ratio}` : 'Ratio not set'
      return {
        title: 'Image Two Up',
        subtitle: ratioTitle,
        media: mediaLeft,
      }
    },
  },
}
