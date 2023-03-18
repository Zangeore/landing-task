<template>
  <column class="container">
    <i @click="closeModal" class="close">&times;</i>
    <div class="text">
      {{ $t('Спасибо за вашу заявку!') }}
    </div>
    <div class="subtext">
      {{ $t('Наш менеджер свяжется с вами в ближайшее время!') }}
    </div>
  </column>
</template>

<script>
import Column from '../components/Column.vue';

export default {
  name: 'Thanks',
  components: {Column},
  methods: {
    closeModal() {
      this.$eventBus.$emit('closeModal');
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 382px;
  height: 143px;
  @extend .display-flex;
  @extend .jc-center;
  @extend .align-center;
  @extend .bg-grey-dark;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
}

.text {
  @extend .text-black-base;
  @extend .msc-700;
  @extend .fs-19;
  @extend .lh-19;
  @extend .text-center;
  width: 243px;
}

.subtext {
  @extend .text-black-base;
  @extend .msc-700;
  @extend .fs-14;
  @extend .lh-22;
  @extend .text-center;
  width: 243px;
  @extend .m-top-10;
}

.close {
  position: absolute;
  bottom: 0;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: auto;
  top: 3px;
  right: 9px;
  font-size: 21px;
  cursor: pointer;
  @extend .text-red-base;
}
</style>
