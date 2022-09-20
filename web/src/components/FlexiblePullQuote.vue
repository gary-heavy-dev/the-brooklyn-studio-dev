<template>
  <div class="flexible-quote container flex jc-c mb-100">
    <div
      v-if="content.text"
      class="flexible-quote__inner p-40 color--navy-light"
      v-html="content.text"
    ></div>
    <BaseBlockContent v-else-if="content._text" :blocks="content._text" />
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.flexible-quote {
	position: relative;
	max-width: 800px;
  &__inner {
    font-size: var(--h3-font-size);
    line-height: var(--h3-line-height);
    text-align: left;

		&::before,
		&::after {
			color: var(--color--gray);
			font-size: 80px;
			position: absolute;
		}

    &::before {
			content: '\201C';
			margin-top: -20px;
    }

    &::after {
			content: '\201D';
			margin-top: 50px;
			margin-left: -30px;
    }
  }
}
</style>
