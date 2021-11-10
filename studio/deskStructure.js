import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPerson, MdHome, MdFingerprint, MdArchitecture, MdWork } from 'react-icons/md'
import { FaRecycle } from 'react-icons/fa'
import { AiFillFormatPainter } from 'react-icons/ai'

const hiddenDocTypes = listItem =>
  !['about', 'adaptiveReuse', 'category', 'home', 'interiorDesign', 'news', 'post', 'residentialArchitecture', 'siteSettings', 'team', 'teamMember'].includes(listItem.getId())

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
        .icon(MdHome)
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
        .icon(MdPerson)
        .child(
          S.editor()
            .id('cef832e0-d677-47bc-9b33-df2c355b9c60')
            .documentId('cef832e0-d677-47bc-9b33-df2c355b9c60')
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
        .title('Team Members')
        .icon(MdPerson)
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team Members')),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('News posts')
        .schemaType('news')
        .child(S.documentTypeList('news').title('News posts')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
