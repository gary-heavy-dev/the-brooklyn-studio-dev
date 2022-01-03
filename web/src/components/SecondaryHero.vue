<template>
  <div :class="['secondary-hero', 'pos-rel', 'o-h', 'overlay', { 'mb-100': title !== 'About Us'}]">
    <div class="secondary-hero__title mt-hh pos-abs z-1 w-100 flex jc-c">
      <h1
        v-if="title"
        class="h1 color--white container"
      >
        <div>{{ title }}</div>
      </h1>
    </div>
    <BaseImage
      v-if="image"
      :lazy="true"
      :src="image"
      :x="1440"
      :y="500"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: Object
  }
}
</script>