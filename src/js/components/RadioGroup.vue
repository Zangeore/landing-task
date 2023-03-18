<template>
  <row class="container-radio">
    <div
        v-for="(option, index) in options"
        :key="index"
        class="radio-group__item"
        :class="{'active': currentValue === option.value}"
        @click="changeValue(option.value)"
    >
      <span>{{ option.label }}</span>
    </div>
  </row>
</template>

<script>
import Row from './Row.vue';

export default {
  name: 'RadioGroup',
  components: {Row},
  props: {
    value: {
      default: 1,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    currentValue(value) {
      this.$emit('input', value);
    },
    value(value) {
      this.currentValue = value;
    },
  },
  methods: {
    changeValue(value) {
      this.currentValue = value;
    },
  },
};
</script>

<style scoped lang="scss">
.container-radio {
  @extend .display-flex;
  @extend .jc-center;
  @extend .align-center;
}
.radio-group__item {
  @extend .m-6;
  cursor: pointer;
  width: 222px;
  height: 52px;
  border: 2px solid #D0D0D0;
  box-sizing: border-box;
  transform: skew(-22deg);
  @extend .display-flex;
  @extend .align-center;
  @extend .jc-center;
  span {
    @extend .msc-500;
    @extend .fs-18;
    @extend .lh-18;
    text-transform: uppercase;
    color: #6B6B6B;
    transform: skew(22deg);
  }
  &:hover {
    filter: brightness(0.9);
  }
  &.active {
    @extend .bg-red-base;
    span {
      @extend .text-white-base;
    }
  }
  @extend .bg-white-base;

}
</style>
