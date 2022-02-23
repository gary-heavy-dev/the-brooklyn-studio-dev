// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require('./client-config')

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata('sanityOptions', clientConfig.sanity)
  })

    // Add previous and next context to projects
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allSanityProject {
        edges {
          node {
            id
            title
            path
            slug {
              current
            }
          }
        }
      }
    }`)

    data.allSanityProject.edges.forEach(({node}, i, edges) => {
      const length = edges.length
      const first = edges[0]
      const last = edges[edges.length - 1]

      // Loop back around if you've reached the first or last casestudy
      const prev = (i == 0) ? last : edges[i - 1]
      const next = (i == length - 1) ? first : edges[i + 1]
    
      createPage({
        path: `/projects/${node.slug.current}`,
        component: './src/templates/SanityProject.vue',
        context: {
          id: node.id,
          prevId: prev ? prev.node.id : null,
          nextId: next ? next.node.id : null
        }
      })
    })
  })
}
