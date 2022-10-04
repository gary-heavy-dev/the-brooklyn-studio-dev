<template>
  <div class="flexible-quote container flex jc-c mb-100">
		<div class="flexible-quote__inner">
			<div
				v-if="content.text"
				class="color--navy-light"
				v-html="content.text"
			></div>
			<BaseBlockContent v-else-if="content._text" :blocks="content._text" />
		</div>
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
		padding: 40px 0;
		position: relative;
		display: flex;
		justify-content: center;

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
			left: 0;
			transform: translateX(-125%) translateY(-50%);
    }

    &::after {
			content: '\201D';
			right: 0;
			bottom: 0;
			transform: translateX(100%) translateY(100%);
    }

  }
}
</style>
