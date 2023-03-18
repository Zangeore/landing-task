<template>
  <BaseBlock class="content">
    <column>
      <row class="head">{{ $t('НАШИ ПРЕИМУЩЕСТВА') }}</row>
      <row class="content-row">
        <column class="base-col">
          <img src="../../images/cup.png">
          <p class="title">{{ $t('Делимся опытом') }}</p>
          <p class="desc">{{
              $t('Наши сотрудники всегда готовы поделиться своим опытом, так как сами бегают полумарафоны, переплыли Босфор, готовятся к соревнованиям по триатлону!')
            }}</p>
        </column>
        <column class="base-col">
          <img src="../../images/heart.png">
          <p class="title">{{ $t('Заботимся о здоровье') }}</p>
          <p class="desc">{{ $t('Мы работаем для того, чтобы Ваши занятия спортом шли на пользу Вашему здоровью и были в радость Вам и Вашим близким!') }}</p>
        </column>
        <column class="base-col">
          <img src="../../images/shoe.png">
          <p class="title">{{ $t('Учим бегать') }}</p>
          <p class="desc">{{ $t('Помогаем с обучением правильной технике бега! Дружим с крупнейшей школой бега в России')}} - <span class="red">{{$t('I LOVE RUNNING.') }}</span></p>
        </column>
      </row>
    </column>

  </BaseBlock>
</template>
<script>
import BaseBlock from '../components/BaseBlock.vue';
import Column from '../components/Column.vue';
import Row from '../components/Row.vue';

export default {
  name: 'AdvantagesBlock',
  components: {Row, Column, BaseBlock},
};
</script>
<style scoped lang="scss">
.head {
  @extend .display-flex;
  @extend .jc-center;
  @extend .text-center;
  @extend .text-black-base;
  @extend .msc-700;
  @extend .fs-30;
  @extend .lh-30;
  @extend .m-top-50;
}

.content {
  @extend .bg-grey-base;
  height: 443px;
}
.content-row {
  justify-content: space-evenly;
  width: 1000px;
  @extend .m-top-50;
}

.title {
  @extend .text-black-base;
  @extend .msc-700;
  @extend .fs-18;
  @extend .lh-29;
  @extend .text-center;
  @extend .m-top-20;
  max-width: 226px;
}
.desc {
  @extend .text-black-base;
  @extend .msc-300;
  @extend .fs-14;
  @extend .lh-18;
  @extend .text-center;
  @extend .m-top-10;
  max-width: 273px;
}
img {
  max-width: 70px;
}
.base-col {
  @extend .align-center;
}
.red {
  @extend .text-red-secondary;
}
</style>
