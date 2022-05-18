// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import about from './documents/about'
import adaptiveReuse from './documents/adaptiveReuse'
import author from './documents/author'
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
import publisher from './documents/publisher'
import residentialArchitecture from './documents/residentialArchitecture'
import simplePage from './documents/simplePage'
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
import gallerySimple from './objects/gallerySimple'
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
import portableTextWrapper from './objects/portableTextWrapper'
import projectReference from './objects/projectReference'
import proustQuestionnaire from './objects/proustQuestionnaire'
import scrollingGallery from './objects/scrollingGallery'
import scrollingGallerySection from './objects/scrollingGallerySection'
import wordBreak from './objects/wordBreak'

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
    author,
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
    gallerySimple,
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
    portableTextWrapper,
    post,
    press,
    proustQuestionnaire,
    project,
    projectCategory,
    projectReference,
    publisher,
    residentialArchitecture,
    scrollingGallery,
    scrollingGallerySection,
    simplePage,
    siteSettings,
    team,
    teamMember,
    wordBreak

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
