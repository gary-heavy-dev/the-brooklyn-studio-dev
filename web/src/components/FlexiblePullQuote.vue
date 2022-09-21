<template>
  <div class="flexible-quote container flex jc-c mb-100">
    <div
      v-if="content.text"
      class="flexible-quote__inner color--navy-light"
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
  &__inner {
		font-size: var(--h3-font-size);
    line-height: var(--h3-line-height);
    text-align: left;
		padding: 40px 0;

		@include desktop {
			max-width: 60%;
			padding: 0;
		}

		&::before,
		&::after {
			color: var(--color--white);
			position: absolute;
			font-size: 70px;
			-webkit-text-stroke: 1px var(--color--navy);

			@include desktop {
				font-size: 100px;
			}
		}

    &::before {
			content: '\201C';
			margin-top: -35px;

			@include desktop {
				margin: -40px;
			}
    }

    &::after {
			content: '\201D';
			margin-top: 65px;
			margin-left: -20px;

			@include desktop {
				margin-left: 20px;
				margin-top: 70px;
			}
    }

  }
}
</style>
