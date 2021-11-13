<template>
  <Homepage :content="$page.page" />
</template>

<script>
import Homepage from '~/components/Homepage'

export default {
  components: {
    Homepage
  }
}
</script>

<page-query>
{
  page: sanityHome(id: "542616c1-f362-4f33-b903-4f4add184641") {
    introSection {
      introLarge
      introLinkText
      introImagePrimary {
        alt
        asset {
          url
          metadata {
            lqip
          }
        }
      }
      introImageSecondary {
        alt
        asset {
          url
          metadata {
            lqip
          }
        }
      }
      _rawIntroSmall
    }
  }
}
</page-query>
