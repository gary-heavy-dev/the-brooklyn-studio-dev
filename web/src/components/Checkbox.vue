<template>
  <li class="checkbox" :data-value="label" @click="checkboxClick">
    <button
      role="checkbox"
      :class="['checkbox__button flex', { checked: status }]"
      :aria-checked="status === false ? 'false' : 'true'"
    >
      <span class="checkbox__check background--gray-secondary"></span>
      <span class="checkbox__label upper sub">{{ label }}</span>
    </button>
  </li>
</template>

<script>
import eventHub from '~/utils/eventHub'

export default {
  props: {
    label: String
  },
  data() {
    return {
      status: false,
      selectedTypes: []
    }
  },
  methods: {
    checkboxClick(e) {
      this.status = !this.status
      this.$emit('checkbox-clicked', {
        value: e.target.getAttribute('data-value'),
        status: this.status
      })
    }
  },
  mounted() {
    const params = new URLSearchParams(window.location.search)
    const typeParam = params.get('type')
    if (typeParam) {
      this.selectedTypes = typeParam.split(',').map(decodeURIComponent)
    }
    if (this.selectedTypes.includes(this.label)) {
      this.status = true
    }

    eventHub.$on('filter-cleared', () => {
      this.status = false
    })
  },
  beforeDestroy() {
    eventHub.$off('filter-cleared')
  }
}
</script>

<style lang="scss">
.checkbox {
  position: relative;
  padding-left: 15px;
  margin: auto 30px auto 0;
  cursor: pointer;

  &:last-child {
    margin: auto 0 auto 0;
  }

  * {
    pointer-events: none;
  }

  &__label {
    margin-left: 9px;
  }

  &__check {
    width: 15px;
    height: 15px;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 1px;

    &::before {
      width: 7px;
      height: 3px;
      border: 1px solid var(--color--text-black);
      border-top: none;
      border-right: none;
      background: 0 0;
      transform: rotate(-50deg);
      position: absolute;
      top: 4px;
      left: 4px;
    }
  }

  &__button.checked {
    .checkbox__check {
      &::before {
        content: '';
      }
    }
  }
}
</style>
