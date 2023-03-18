<template>
  <BaseBlock class="container">
    <column class="block">
      <div class="address">{{ $t('Москва, Мясницкий проезд, д.3с1') }}</div>
      <div class="phone">{{ $t('8 (499) 922-89-74') }}</div>
      <row class="society">
        <img class="society-item" src="../../images/fb.svg" alt="fb">
        <img class="society-item" src="../../images/inst.svg" alt="inst">
        <img class="society-item" src="../../images/pint.svg" alt="pint">
      </row>
    </column>
  </BaseBlock>
</template>
<script>
import BaseBlock from '../components/BaseBlock.vue';
import Column from '../components/Column.vue';
import Row from '../components/Row.vue';

export default {
  name: 'FooterBlock',
  components: {Row, Column, BaseBlock},
};
</script>
<style scoped lang="scss">
.container {
  background-image: url('../../images/map.png');
  background-size: cover;
  height: 630px;
  @extend .p-0;
}

.block {
  width: 460px;
  height: 270px;
  @extend .bg-red-base;
  @extend .display-flex;
  @extend .jc-center;
  @extend .align-center;
}

.society-item {
  width: 52px;
  height: 52px;
  @extend .m-x-13
}

.address {
  @extend .text-white-base;
  @extend .msc-500;
  @extend .fs-20;
  @extend .lh-20;
  @extend .m-bottom-36;
}

.phone {
  @extend .address;
  @extend .msc-700;
}
</style>
