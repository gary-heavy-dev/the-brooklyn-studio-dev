// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import about from './documents/about'
import adaptiveReuse from './documents/adaptiveReuse'
import careers from './documents/careers'
import careersPost from './documents/careersPost'
import category from './documents/category'
import home from './documents/home'
import interiorDesign from './documents/interiorDesign'
import news from './documents/news'
import post from './documents/post'
import residentialArchitecture from './documents/residentialArchitecture'
import siteSettings from './documents/siteSettings'
import team from './documents/team'
import teamMember from './documents/teamMember'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import ctaComplex from './objects/ctaComplex'
import ctaGallery from './objects/ctaGallery'
import ctaSimple from './objects/ctaSimple'
import excerptPortableText from './objects/excerptPortableText'
import featuredTeamMember from './objects/featuredTeamMember'
import heroHome from './objects/heroHome'
import heroSecondary from './objects/heroSecondary'
import heroTertiary from './objects/heroTertiary'
import introSection from './objects/introSection'
import linkGallery from './objects/linkGallery'
import linkGalleryItem from './objects/linkGalleryItem'
import linkInternal from './objects/linkInternal'
import list from './objects/list'
import mainImage from './objects/mainImage'
import proustQuestionnaire from './objects/proustQuestionnaire'
import scrollingGallery from './objects/scrollingGallery'
import scrollingGallerySection from './objects/scrollingGallerySection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    about,
    adaptiveReuse,
    bodyPortableText,
    bioPortableText,
    careers,
    careersPost,
    category,
    ctaComplex,
    ctaGallery,
    ctaSimple,
    excerptPortableText,
    featuredTeamMember,
    heroHome,
    heroSecondary,
    heroTertiary,
    home,
    interiorDesign,
    introSection,
    linkGallery,
    linkGalleryItem,
    linkInternal,
    list,
    mainImage,
    news,
    post,
    proustQuestionnaire,
    residentialArchitecture,
    scrollingGallery,
    scrollingGallerySection,
    siteSettings,
    team,
    teamMember

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
