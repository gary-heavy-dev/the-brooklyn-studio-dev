// sanity.config.js
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import schemas from './schemas/schemas'
import deskStructure from './deskStructure'

export default defineConfig([
  {
    title: process.env.SANITY_PROJECT_NAME,
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_API_DATASET,
    plugins: [
      structureTool({
        structure: deskStructure
      }),
      visionTool(),
      media()
    ],
    schema: {
      types: schemas
    },
    document: {
      newDocumentOptions: (prev, {creationContext}) => {
        if (creationContext.type === 'global') {
          return prev.filter((template) => !['siteSettings'].includes(template.templateId))
        }
        return prev
      },
      actions: (prev, {schemaType}) => {
        if (schemaType === 'siteSettings') {
          return prev.filter(({action}) => !['unpublish', 'delete', 'duplicate'].includes(action))
        }
        return prev
      }
    }
  }
])
