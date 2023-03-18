<template>
  <column class="container">
    <column>
      <p class="title">{{ $t('Получите бесплатную консультациюпо подбору пульсометра ') }}</p>
      <p class="desc">{{ $t('Просто заполните форму заявки и мы перезвоним вам в течении 10 минут') }}</p>
      <form :action="`mailto:${$config.email}`">
        <base-input class="input" type="text" name="name" :placeholder="$t('Ваше имя')"/>
        <base-input class="input" type="text" name="phone" :placeholder="$t('Ваш телефон')"/>
        <base-input class="input" type="text" name="email" :placeholder="$t('Ваш email')"/>
        <base-button class="btn" type="submit" version="primary">{{ $t('заказать консультацию') }}</base-button>
      </form>
    </column>
  </column>
</template>

<script>
import Column from '../components/Column.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'ConsultingBlock',
  components: {BaseButton, BaseInput, Column},
};
</script>

<style scoped lang="scss">
.container {
  height: 680px;
  width: 100%;
  background-image: url("../../images/consulting.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @extend .jc-center;
  @extend .align-center;
}

form {
  @extend .display-flex;
  @extend .dir-column;
}

.title {
  @extend .text-white-base;
  @extend .msc-700;
  @extend .fs-36;
  @extend .lh-54;
  width: 799px;
  @extend .m-0;
}
.desc {
  @extend .text-white-base;
  @extend .msc-500;
  @extend .fs-20;
  @extend .lh-30;
  width: 426px;
  @extend .m-top-10;
}
.input {
  @extend .m-top-20;
}
.btn {
  @extend .m-top-20;
  width: 303px;
  height: 58px;
}
</style>
