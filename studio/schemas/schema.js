// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import about from './documents/about'
import adaptiveReuse from './documents/adaptiveReuse'
import award from './documents/award'
import careers from './documents/careers'
import careersPost from './documents/careersPost'
import category from './documents/category'
import contact from './documents/contact'
import home from './documents/home'
import interiorDesign from './documents/interiorDesign'
import news from './documents/news'
import newsPage from './documents/newsPage'
import post from './documents/post'
import press from './documents/press'
import project from './documents/project'
import projectCategory from './documents/projectCategory'
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
import displayTitle from './objects/displayTitle'
import excerptPortableText from './objects/excerptPortableText'
import featuredTeamMember from './objects/featuredTeamMember'
import flexibleImage from './objects/flexibleImage'
import flexibleImagePair from './objects/flexibleImagePair'
import flexibleImageWithText from './objects/flexibleImageWithText'
import flexibleText from './objects/flexibleText'
import headingPortablePair from './objects/headingPortablePair'
import headingTextPair from './objects/headingTextPair'
import heroHome from './objects/heroHome'
import heroSecondary from './objects/heroSecondary'
import heroTertiary from './objects/heroTertiary'
import introSection from './objects/introSection'
import introSecondary from './objects/introSecondary'
import linkGallery from './objects/linkGallery'
import linkGalleryItem from './objects/linkGalleryItem'
import linkInternal from './objects/linkInternal'
import linkSimple from './objects/linkSimple'
import list from './objects/list'
import mainImage from './objects/mainImage'
import projectReference from './objects/projectReference'
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
    award,
    bodyPortableText,
    bioPortableText,
    careers,
    careersPost,
    category,
    contact,
    ctaComplex,
    ctaGallery,
    ctaSimple,
    displayTitle,
    excerptPortableText,
    featuredTeamMember,
    flexibleImage,
    flexibleImagePair,
    flexibleImageWithText,
    flexibleText,
    headingPortablePair,
    headingTextPair,
    heroHome,
    heroSecondary,
    heroTertiary,
    home,
    interiorDesign,
    introSection,
    introSecondary,
    linkGallery,
    linkGalleryItem,
    linkInternal,
    linkSimple,
    list,
    mainImage,
    news,
    newsPage,
    post,
    press,
    proustQuestionnaire,
    project,
    projectCategory,
    projectReference,
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
