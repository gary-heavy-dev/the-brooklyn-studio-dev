import ColorSelector, {colorHexValidator} from '../../components/ColorSelector'
import {defineField, defineType} from 'sanity'
import React from 'react'

export default defineType({
  name: 'ctaSimple',
  type: 'object',
  title: 'Simple CTA',
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
      name: 'largeText',
      type: 'string',
      title: 'Large Text'
    },
    {
      name: 'copy',
      type: 'excerptPortableText',
      title: 'Copy (Small Text)'
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
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      description: 'Please upload an image 2170px wide. The height is up to you!'
    },
    // defineField({
    //   name: 'backgroundColor',
    //   title: 'Background Color',
    //   type: 'string',
    //   components: {
    //     input: props => (
    //       <ColorSelector
    //         {...props}
    //         list={[
    //           {title: '#FFFFFF', value: 'white'},
    //           {title: '#F8F7F7', value: 'gray-light'},
    //           {title: '#CBD0CC', value: 'gray-tertiary-light'},
    //           {title: '#262C3E', value: 'navy'}
    //         ]}
    //       />
    //     )
    //   },
    //   validation: Rule => Rule.custom(colorHexValidator).required()
    // }),
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'simplerColor',
      validation: Rule => Rule.required()
    },
    {
      name: 'imageStyle',
      type: 'string',
      title: 'Image Style',
      description: 'If the image should extend to the edge of the page, select "full-width".',
      options: {
        list: [
          {title: 'Full-Width', value: 'full'},
          {title: 'Contained', value: 'contained'}
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'imageWidth',
      type: 'string',
      title: 'Image Width',
      description: 'Select which side you\'d like the image to appear on.',
      options: {
        list: [
          {title: 'Small (~42%)', value: '5'},
          {title: 'Medium (~50%)', value: '6'},
          {title: 'Large (~56%)', value: '7'}
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'textLocation',
      type: 'string',
      title: 'Text Location',
      description: 'Select which side you\'d like the text to appear on.',
      options: {
        list: [
          {title: 'Right', value: 'right'},
          {title: 'Left', value: 'left'}
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
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
