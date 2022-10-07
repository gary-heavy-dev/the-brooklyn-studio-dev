// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

const path = require('path')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/_breakpoints.scss'),
        path.resolve(__dirname, './src/assets/style/_mixins.scss')
      ],
    })
}

module.exports = {
  siteName: 'The Brooklyn Studio',
  siteUrl: 'https://brooklyn.studio',
  siteDescription: 'The Brooklyn Studio is an architecture and interior design firm based in Brooklyn and known for its adept and artful blend of historic renovation and modern design.',
  templates: {
    SanitySimplePage: '/:slug__current',
    SanityNews: '/news/:slug__current',
    SanityProject: '/pj/:slug__current',
    SanityTeamMember: '/about-us/team/:slug__current'
  },

  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    config
      .plugin('BundleAnalyzerPlugin')
      .use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
          openAnalyzer: false
        }
      ])
  },

  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        // ...clientConfig.sanity,
        projectId: 'wups1rn4',
        dataset: 'production',
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    },
    {
      use: 'gridsome-plugin-base-components'
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-27552254-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/pj/**']
      }
    },
  ]
}
