import ColorSelector, {colorHexValidator} from '../../components/ColorSelector'
import React from 'react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ctaGallery',
  title: 'CTA Gallery',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'navTitle',
      type: 'string',
      title: 'Navigation Title',
      description: 'If the page this section will be on has a sub nav please add a short title here for inclusion in that nav bar. Then, use the slug generator below to create a URL friendly version of this title.'
    },
    {
      name: 'copy',
      type: 'excerptPortableText',
      title: 'Copy'
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text'
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link'
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Image Gallery',
      description: 'The ideal WxH for these image uploads is 1584px by 2091px',
      of: [
        { type: 'mainImage' }
      ]
    },
    // {
    //   name: "bgColor",
    //   type: "colorlist", // required
    //   title: "Background Color",
    //   options: {
    //     borderradius: {
    //       outer: "100%",
    //       inner: "100%"
    //     },
    //     list: [
    //       { title: "white", value: "white" },
    //       { title: "gray-light", value: "#F8F7F7" },
    //       { title: "gray-tertiary-light", value: "#CBD0CC" },
    //       { title: "navy", value: "#262C3E" }
    //     ]
    //   },
    //   validation: Rule => Rule.required()
    // },
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      components: {
        input: props => (
          <ColorSelector
            {...props}
            withHexInput
            withColorNames
            list={[
              {title: 'white', value: 'white'},
              {title: 'gray-light', value: '#F8F7F7'},
              {title: 'gray-tertiary-light', value: '#CBD0CC'},
              {title: 'navy', value: '#262C3E'}
            ]}
          />
        )
      },
      validation: Rule => Rule.custom(colorHexValidator).required()
    }),
    {
      name: 'imageGalleryLocation',
      type: 'string',
      title: 'Image Gallery Location',
      description: 'Select which side you\'d like the image gallery to appear on.',
      options: {
        list: [
          { title: 'Right', value: 'right' },
          { title: 'Left', value: 'left' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'reverseMobile',
      type: 'boolean',
      title: 'Reverse Order On Mobile?',
      description: 'Content on the left of this layout will display below at mobile breakpoints. Check this box to reverse the order on mobile.'
    },
    {
      name: 'paddingSize',
      type: 'string',
      title: 'Vertical Padding Size',
      description: 'Select the size of the vertical padding.',
      options: {
        list: [
          {title: '80 mobile / 100 desktop', value: '100'},
          {title: '0 mobile / 0 desktop', value: '0'}
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    }
  ]
})
