// sanity.config.js
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import schemas from './schemas/schemas'
import deskStructure from './deskStructure'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import { dashboardTool } from '@sanity/dashboard'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
import { CustomNavbar } from './components/customNavBar/customNavBar'
import { StagingLayout } from './components/StagingLayout'

export const LOCKED_DOCUMENT_TYPES = [
  'siteSettings',
  'home',
  'about',
  'adaptiveReuse',
  'careers',
  'contact',
  'interiorDesign',
  'newsPage',
  'residentialArchitecture',
  'team',
]

export default defineConfig([
  {
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: 'production',
    name: 'production',
    basePath: '/production',
    title: 'Production Workspace',
    plugins: [
      simplerColorInput({
        // Note: These are all optional
        defaultColorFormat: 'rgba',
        defaultColorList: [
          { label: 'white', value: '#ffffff' },
          { label: 'gray-light', value: '#F8F7F7' },
          { label: 'gray-tertiary-light', value: '#CBD0CC' },
          { label: 'navy', value: '#262C3E' },
        ],
        enableSearch: true,
      }),
      structureTool({
        structure: deskStructure,
      }),
      visionTool(),
      media(),
      dashboardTool({
        widgets: [
          netlifyWidget({
            title: 'Netlify Deploys',
            sites: [
              {
                title: 'Production',
                apiId: 'a5314cb6-038a-4b7a-99cd-fbbae8ca7ae2',
                buildHookId: '616dc815546d21097fbe0bb2',
                name: 'brooklyn.studio',
                url: 'https://brooklyn.studio/',
              },
            ],
          }),
        ],
      }),
    ],
    schema: {
      types: schemas,
    },
    studio: {
      components: {
        navbar: CustomNavbar,
      },
    },
    document: {
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((template) => !LOCKED_DOCUMENT_TYPES.includes(template.templateId))
        }
        return prev
      },
      actions: (prev, { schemaType }) => {
        if (LOCKED_DOCUMENT_TYPES.includes(schemaType)) {
          return prev.filter(({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action))
        }
        return prev
      },
    },
  },
  {
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: 'staging',
    name: 'staging',
    basePath: '/staging',
    title: 'Staging Workspace',
    plugins: [
      simplerColorInput({
        // Note: These are all optional
        defaultColorFormat: 'rgba',
        defaultColorList: [
          { label: 'white', value: '#ffffff' },
          { label: 'gray-light', value: '#F8F7F7' },
          { label: 'gray-tertiary-light', value: '#CBD0CC' },
          { label: 'navy', value: '#262C3E' },
        ],
        enableSearch: true,
      }),
      structureTool({
        structure: deskStructure,
      }),
      visionTool(),
      media(),
      dashboardTool({
        widgets: [
          netlifyWidget({
            title: 'Netlify Deploys',
            sites: [
              {
                title: 'Staging',
                apiId: 'a5314cb6-038a-4b7a-99cd-fbbae8ca7ae2',
                buildHookId: '6215337129122822c3b9ab1a',
                name: 'brooklyn.studio (STAGING)',
                url: 'https://staging--the-brooklyn-studio.netlify.app/',
              },
            ],
          }),
        ],
      }),
    ],
    schema: {
      types: schemas,
    },
    studio: {
      components: {
        navbar: CustomNavbar,
        layout: StagingLayout,
      },
    },
    document: {
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((template) => !LOCKED_DOCUMENT_TYPES.includes(template.templateId))
        }
        return prev
      },
      actions: (prev, { schemaType }) => {
        if (LOCKED_DOCUMENT_TYPES.includes(schemaType)) {
          return prev.filter(({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action))
        }
        return prev
      },
    },
  },
  {
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: 'development',
    name: 'development',
    basePath: '/development',
    title: 'Development Workspace',
    plugins: [
      simplerColorInput({
        // Note: These are all optional
        defaultColorFormat: 'rgba',
        defaultColorList: [
          { label: 'white', value: '#ffffff' },
          { label: 'gray-light', value: '#F8F7F7' },
          { label: 'gray-tertiary-light', value: '#CBD0CC' },
          { label: 'navy', value: '#262C3E' },
        ],
        enableSearch: true,
      }),
      structureTool({
        structure: deskStructure,
      }),
      visionTool(),
      media(),
      dashboardTool({
        widgets: [
          netlifyWidget({
            title: 'Netlify Deploys',
            sites: [
              {
                title: 'Development',
                apiId: 'b095747b-cc6e-4f8d-aaba-3a3796a20e03',
                buildHookId: '691adced9bc05960e2ae8f09',
                name: 'the-brooklyn-studio-dev (Development)',
                url: 'https://the-brooklyn-studio-dev.netlify.app'
              }
            ]
          })
        ]
      })
    ],
    schema: {
      types: schemas,
    },
    studio: {
      components: {
        navbar: CustomNavbar,
        layout: StagingLayout,
      },
    },
    document: {
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((template) => !LOCKED_DOCUMENT_TYPES.includes(template.templateId))
        }
        return prev
      },
      actions: (prev, { schemaType }) => {
        if (LOCKED_DOCUMENT_TYPES.includes(schemaType)) {
          return prev.filter(({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action))
        }
        return prev
      },
    },
  }
])
