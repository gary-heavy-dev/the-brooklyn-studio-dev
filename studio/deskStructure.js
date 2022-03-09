import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPersonOutline, MdPeopleAlt, MdOutlineHome, MdFingerprint, MdArchitecture, MdWork, MdWorkOutline, MdOutlineEmail, MdConstruction, MdCategory, MdTextSnippet } from 'react-icons/md'
import { FaRecycle, FaNewspaper, FaRegNewspaper, FaTrophy, FaPenFancy } from 'react-icons/fa'
import { AiFillFormatPainter } from 'react-icons/ai'

const hiddenDocTypes = listItem =>
  !['about', 'adaptiveReuse', 'award', 'careers', 'careersPost', 'contact', 'category', 'home', 'interiorDesign', 'news', 'newsPage', 'post', 'press', 'project', 'projectCategory', 'residentialArchitecture', 'siteSettings', 'team', 'teamMember', 'simplePage'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Home')
        .icon(MdOutlineHome)
        .child(
          S.editor()
            .id('542616c1-f362-4f33-b903-4f4add184641')
            .documentId('542616c1-f362-4f33-b903-4f4add184641')
        ),
      S.listItem()
        .title('About')
        .icon(MdFingerprint)
        .child(
          S.editor()
            .id('09600be0-7d43-4636-8569-fed6ef5d2985')
            .documentId('09600be0-7d43-4636-8569-fed6ef5d2985')
        ),
      S.listItem()
        .title('People (Team)')
        .icon(MdPersonOutline)
        .child(
          S.editor()
            .id('cef832e0-d677-47bc-9b33-df2c355b9c60')
            .documentId('cef832e0-d677-47bc-9b33-df2c355b9c60')
        ),
      S.listItem()
        .title('Contact')
        .icon(MdOutlineEmail)
        .child(
          S.editor()
            .id('cc52b76e-c3b4-4ac3-ba41-4871af585480')
            .documentId('cc52b76e-c3b4-4ac3-ba41-4871af585480')
        ),
      S.listItem()
        .title('News (Page)')
        .icon(FaRegNewspaper)
        .child(
          S.editor()
            .id('b921b006-dafd-49a5-a3d7-eef55a00358f')
            .documentId('b921b006-dafd-49a5-a3d7-eef55a00358f')
        ),
      S.listItem()
        .title('Careers (Page)')
        .icon(MdWorkOutline)
        .child(
          S.editor()
            .id('b5f270ac-9a77-4236-bf33-70041dd025c6')
            .documentId('b5f270ac-9a77-4236-bf33-70041dd025c6')
        ),
      S.divider(),
      S.listItem()
        .title('Residential Architecture')
        .icon(MdArchitecture)
        .child(
          S.editor()
            .id('a81592fc-d8ae-4c15-8315-9005a57b2d75')
            .documentId('a81592fc-d8ae-4c15-8315-9005a57b2d75')
        ),
      S.listItem()
        .title('Interior Design')
        .icon(AiFillFormatPainter)
        .child(
          S.editor()
            .id('ee8279ca-9f8d-47c5-926a-c88d46d45d5b')
            .documentId('ee8279ca-9f8d-47c5-926a-c88d46d45d5b')
        ),
      S.listItem()
        .title('Adaptive Reuse')
        .icon(FaRecycle)
        .child(
          S.editor()
            .id('35a99ecb-fd40-41ae-a0e0-8ec5527ebf44')
            .documentId('35a99ecb-fd40-41ae-a0e0-8ec5527ebf44')
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
