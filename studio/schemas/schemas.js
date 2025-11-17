// document schemas
import about from './documents/about'
import adaptiveReuse from './documents/adaptiveReuse'
import author from './documents/author'
import award from './documents/award'
import careers from './documents/careers'
import careersPost from './documents/careersPost'
import category from './documents/category'
import contact from './documents/contact'
import cookie from './documents/cookie'
import cookiesPage from './documents/cookiesPage'
import home from './documents/home'
import interiorDesign from './documents/interiorDesign'
import news from './documents/news'
import newsPage from './documents/newsPage'
import post from './documents/post'
import press from './documents/press'
import project from './documents/project'
import projectCategory from './documents/projectCategory'
import projectType from './documents/projectType'
import publisher from './documents/publisher'
import residentialArchitecture from './documents/residentialArchitecture'
import recipePage from './documents/recipePage'
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
import flexibleTwoImage from './objects/flexibleTwoImage'
import flexiblePullQuote from './objects/flexiblePullQuote'
import flexibleText from './objects/flexibleText'
import fullWidthImage from './objects/fullWidthImage'
import headingPortablePair from './objects/headingPortablePair'
import headingTextPair from './objects/headingTextPair'
import heroHome from './objects/heroHome'
import heroSecondary from './objects/heroSecondary'
import heroTertiary from './objects/heroTertiary'
import imageObject from './objects/imageObject'
import imageTwoUpObject from './objects/imageTwoUpObject'
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
import simpleImagePair from './objects/simpleImagePair'
import simpleImageWithText from './objects/simpleImageWithText'
import simpleGallery from './objects/simpleGallery'
import simplePortableTextWrapper from './objects/simplePortableTextWrapper'
import wordBreak from './objects/wordBreak'
import featuredProjects from './objects/featuredProjects'
import newsFeedCarousel from './objects/newsFeedCarousel'

// Then we give our schema to the builder and provide the result to Sanity
export default [
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
  cookie,
  cookiesPage,
  ctaComplex,
  ctaGallery,
  ctaSimple,
  displayTitle,
  excerptPortableText,
  featuredTeamMember,
  flexibleImage,
  flexibleImagePair,
  flexibleImageWithText,
  flexiblePullQuote,
  flexibleText,
  fullWidthImage,
  headingPortablePair,
  headingTextPair,
  heroHome,
  heroSecondary,
  heroTertiary,
  home,
  imageObject,
  imageTwoUpObject,
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
  projectType,
  projectReference,
  publisher,
  residentialArchitecture,
  recipePage,
  scrollingGallery,
  scrollingGallerySection,
  simpleImagePair,
  simpleImageWithText,
  simplePage,
  simpleGallery,
  simplePortableTextWrapper,
  siteSettings,
  team,
  teamMember,
  wordBreak,
  featuredProjects,
  newsFeedCarousel,
  flexibleTwoImage,
]
