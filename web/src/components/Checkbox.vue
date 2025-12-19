<template>
  <!-- hide rehabilitation until fully removed from Sanity -->
  <li v-if="label !== 'rehabilitation'" class="checkbox" :data-value="label" @click="checkboxClick">
    <button
      role="checkbox"
      :class="['checkbox__button flex', { checked: status }]"
      :aria-checked="status ? 'true' : 'false'"
    >
      <span class="checkbox__check background--gray"></span>
      <span class="checkbox__label upper sub">{{ label }}</span>
    </button>
  </li>
</template>

<script>
import eventHub from '~/utils/eventHub'

export default {
  name: 'Checkbox',
  props: {
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      status: false,
      selectedTypes: []
    }
  },
  methods: {
    checkboxClick() {
      this.status = !this.status
      this.$emit('checkbox-clicked', {
        value: this.label,
        status: this.status
      })
    }
  },
  mounted() {
    const params = new URLSearchParams(window.location.search)
    const typeParam = params.get('type')

    if (typeParam) {
      this.selectedTypes = typeParam.split(',').map(decodeURIComponent)
      if (this.selectedTypes.includes(this.label)) {
        this.status = true
      }
    }

    if (!typeParam && this.checked) {
      this.status = true
    }

    eventHub.$on('filter-cleared', () => {
      this.status = false
    })
  },
  watch: {
    checked(val) {
      this.status = val
    }
  },
  beforeDestroy() {
    eventHub.$off('filter-cleared')
  }
}
</script>

<style lang="scss">
.checkbox {
  position: relative;
  padding-left: 10px;
  margin: auto 10px auto 0;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;

  &:last-child {
    margin: auto 0 auto 0;
  }

  * {
    pointer-events: none;
  }

  &__label {
    margin-left: 9px;
  }

  &:hover .checkbox__check {
    border-color: var(--color--text-black);
  }

  &[disabled],
  &.disabled {
    pointer-events: none;
    opacity: 0.8;
  }

  &__check {
    width: 15px;
    height: 15px;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 1px;
    border: 1px solid var(--color--gray);
    transition: all ease-in-out 0.25s;

    &::before {
      width: 6px;
      height: 3px;
      border: 1px solid var(--color--text-black);
      border-top: none;
      border-right: none;
      background: 0 0;
      transform: rotate(-50deg);
      position: absolute;
      top: 3.5px;
      left: 3px;
    }
  }

  &__button.checked {
    .checkbox__check {
      border-color: var(--color--text-black);

      &::before {
        content: '';
      }
    }
  }
}
</style>
