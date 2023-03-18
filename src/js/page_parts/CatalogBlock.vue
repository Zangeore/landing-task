<template>
  <BaseBlock class="container" ref="catalog">
    <column class="wrap">
      <column class="head">
        <div class="title">
          {{ $t('Каталог пульсометров') }}
        </div>
        <radio-group :options="options"/>
      </column>
      <div class="catalog-container">
        <product-block v-for="i in countProducts" :key="i"/>
      </div>
    </column>
  </BaseBlock>
</template>
<script>
import BaseBlock from '../components/BaseBlock.vue';
import Column from '../components/Column.vue';
import RadioGroup from '../components/RadioGroup.vue';
import ProductBlock from '../components/ProductBlock.vue';

export default {
  name: 'CatalogBlock',
  components: {ProductBlock, RadioGroup, Column, BaseBlock},
  data() {
    return {
      options: [
        {label: this.$t('Для фитнеса'), value: 1},
        {label: this.$t('для бега'), value: 2},
        {label: this.$t('для триатлона'), value: 3},
      ],
      countProducts: 6,
    };
  },
  mounted() {
    this.$eventBus.$on('toCatalog', () => {
      window.scrollTo({
        top: this.$refs.catalog.$el.offsetTop,
        behavior: 'smooth',
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  @extend .m-top-80;

  .wrap {
    width: 1111px;
    @extend .display-flex;
    @extend .jc-center;

    .head {
      @extend .display-flex;
      @extend .jc-center;
      width: 100%;

      .title {
        @extend .text-black-base;
        @extend .msc-500;
        @extend .fs-30;
        @extend .lh-45;
        @extend .text-center;
        @extend .m-bottom-46;
      }
    }
    .catalog-container {
      flex-wrap: wrap;
      @extend .display-flex;
      @extend .jc-center;
      @extend .align-center;
      width: 100%;
      @extend .m-top-60;
    }
  }
}
</style>
