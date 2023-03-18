<template>
  <column class="container">
    <i @click="closeModal" class="close">&times;</i>
    <div class="title">
      {{ title }}
    </div>
    <div class="text">
      {{ text }}
    </div>
    <base-input
        class="item"
        :placeholder="$t('Ваше имя')"
        type="text"
        :required="true"/>
    <base-input
        class="item"
        :placeholder="$t('Ваш телефон')"
        type="tel"
        :required="true"/>
    <base-input
        class="item"
        :placeholder="$t('Ваш e-mail')"
        type="email"
        :required="true"
    />
    <base-button class="btn" @click="callback(this)">
      {{ button }}
    </base-button>
  </column>
</template>

<script>
import Column from '../components/Column.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';

export default {
  name: 'Modal',
  components: {BaseInput, BaseButton, Column},
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    button: {
      type: String,
      required: true,
    },
    callback: {
      type: Function,
      required: false,
    },
  },
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
  height: 402px;
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

.title {
  @extend .text-black-base;
  @extend .msc-700;
  @extend .fs-19;
  @extend .lh-19;
  @extend .text-center;
}

.text {
  @extend .text-black-base;
  @extend .msc-700;
  @extend .fs-14;
  @extend .lh-22;
  @extend .text-center;
  @extend .m-bottom-30;
}
.item {
  @extend .m-bottom-15;
}
.btn {
  @extend .m-bottom-15;
  width: 302px;
  height: 58px;
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
