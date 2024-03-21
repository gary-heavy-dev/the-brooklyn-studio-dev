// sanity.cli.js
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_API_DATASET
  }
  // graphql: [
  //   {
  //     id: "production-workspace",
  //     workspace: "production-workspace",
  //   },
  //   {
  //     id: "staging-workspace",
  //     workspace: "staging-workspace",
  //   },
  // ]
})
