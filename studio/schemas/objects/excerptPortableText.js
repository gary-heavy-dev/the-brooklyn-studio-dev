import React from 'react'

// const wordBreakIcon = () => (
//   <span style={{ fontWeight: 'bold'}}>WB</span>
// )

// const wordBreakRender = props => (
//   <span style={{ backgroundColor: 'yellow' }}>|{props.children}|</span>
// )

export default {
  name: 'excerptPortableText',
  type: 'array',
  title: 'Excerpt',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          // {
          //   title: 'Word Break',
          //   value: 'wordBreak',
          //   blockEditor: {
          //     icon: wordBreakIcon,
          //     render: wordBreakRender
          //   }
          // }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              }
            ]
          }
        ],
      },
      of: [{ type: 'wordBreak' }]
    }
  ]
}
