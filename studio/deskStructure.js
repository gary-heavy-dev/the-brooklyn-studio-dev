import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPerson, MdHome, MdFingerprint } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['about', 'adaptiveReuse', 'category', 'home', 'interiorDesign', 'news', 'post', 'siteSettings'].includes(listItem.getId())

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
      S.divider(),
      S.listItem()
        .title('Interior Design')
        .icon(MdHome)
        .child(
          S.editor()
            .id('ee8279ca-9f8d-47c5-926a-c88d46d45d5b')
            .documentId('ee8279ca-9f8d-47c5-926a-c88d46d45d5b')
        ),
      S.listItem()
        .title('Adaptive Reuse')
        .icon(MdFingerprint)
        .child(
          S.editor()
            .id('35a99ecb-fd40-41ae-a0e0-8ec5527ebf44')
            .documentId('35a99ecb-fd40-41ae-a0e0-8ec5527ebf44')
        ),
      S.divider(),
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
