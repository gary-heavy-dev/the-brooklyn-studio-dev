import {MdSettings, MdPersonOutline, MdPeopleAlt, MdOutlineHome, MdFingerprint, MdArchitecture, MdFormatListNumbered, MdWork, MdWorkOutline, MdOutlineEmail, MdConstruction, MdCategory, MdTextSnippet, MdCookie, MdOutlineCookie} from 'react-icons/md'
import {FaNewspaper, FaRegNewspaper, FaTrophy, FaPenFancy} from 'react-icons/fa'

const hiddenDocTypes = listItem =>
  !['about', 'author', 'award', 'careers', 'careersPost', 'contact', 'cookie', 'cookiesPage', 'category', 'home', 'news', 'newsPage', 'post', 'press', 'project', 'projectCategory', 'projectType', 'publisher', 'recipePage', 'siteSettings', 'team', 'teamMember', 'simplePage'].includes(listItem.getId())

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Home')
        .icon(MdOutlineHome)
        .child(
          S.editor()
            .id('542616c1-f362-4f33-b903-4f4add184641')
            .schemaType('home')
            .documentId('542616c1-f362-4f33-b903-4f4add184641')
        ),
      S.listItem()
        .title('About')
        .icon(MdFingerprint)
        .child(
          S.editor()
            .id('09600be0-7d43-4636-8569-fed6ef5d2985')
            .schemaType('about')
            .documentId('09600be0-7d43-4636-8569-fed6ef5d2985')
        ),
      S.listItem()
        .title('People (Team)')
        .icon(MdPersonOutline)
        .child(
          S.editor()
            .id('cef832e0-d677-47bc-9b33-df2c355b9c60')
            .schemaType('team')
            .documentId('cef832e0-d677-47bc-9b33-df2c355b9c60')
        ),
      S.listItem()
        .title('Contact')
        .icon(MdOutlineEmail)
        .child(
          S.editor()
            .id('cc52b76e-c3b4-4ac3-ba41-4871af585480')
            .schemaType('contact')
            .documentId('cc52b76e-c3b4-4ac3-ba41-4871af585480')
        ),
      S.listItem()
        .title('News (Page)')
        .icon(FaRegNewspaper)
        .child(
          S.editor()
            .id('b921b006-dafd-49a5-a3d7-eef55a00358f')
            .schemaType('newsPage')
            .documentId('b921b006-dafd-49a5-a3d7-eef55a00358f')
        ),
      S.listItem()
        .title('Careers (Page)')
        .icon(MdWorkOutline)
        .child(
          S.editor()
            .id('b5f270ac-9a77-4236-bf33-70041dd025c6')
            .schemaType('careers')
            .documentId('b5f270ac-9a77-4236-bf33-70041dd025c6')
        ),
      S.listItem()
        .title('Cookies (Page)')
        .icon(MdOutlineCookie)
        .child(
          S.editor()
            .id('541a27a5-23d5-4b3a-9c1b-a7428198cbeb')
            .schemaType('cookiesPage')
            .documentId('541a27a5-23d5-4b3a-9c1b-a7428198cbeb')
        ),
      S.divider(),
      S.listItem()
        .title('Projects')
        .icon(MdConstruction)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Project Categories')
        .icon(MdCategory)
        .schemaType('projectCategory')
        .child(S.documentTypeList('projectCategory').title('Project Categories')),
      S.listItem()
        .title('Project Type')
        .icon(MdArchitecture)
        .schemaType('projectType')
        .child(S.documentTypeList('projectType').title('Project Types')),
      S.listItem()
        .title('Team Members')
        .icon(MdPeopleAlt)
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team Members')),
      S.listItem()
        .title('Careers Posts')
        .icon(MdWork)
        .schemaType('careersPost')
        .child(S.documentTypeList('careersPost').title('Careers Posts')),
      S.listItem()
        .title('News posts')
        .icon(FaNewspaper)
        .schemaType('news')
        .child(S.documentTypeList('news').title('News posts')),
      S.listItem()
        .title('Simple Pages')
        .icon(MdTextSnippet)
        .schemaType('simplePage')
        .child(S.documentTypeList('simplePage').title('Simple Pages')),
      S.listItem()
        .title('Press')
        .icon(FaPenFancy)
        .schemaType('press')
        .child(S.documentTypeList('press').title('press')),
      S.listItem()
        .title('Awards')
        .icon(FaTrophy)
        .schemaType('award')
        .child(S.documentTypeList('award').title('awards')),
      S.listItem()
        .title('Cookies')
        .icon(MdCookie)
        .schemaType('cookie')
        .child(S.documentTypeList('cookie').title('Cookies')),
      S.listItem()
        .title('Recipe Pages')
        .icon(MdFormatListNumbered)
        .schemaType('cookie')
        .child(S.documentTypeList('recipePage').title('Recipe Pages')),
      // S.listItem()
      //   .title('Blog posts')
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
