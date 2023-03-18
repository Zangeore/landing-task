<template>
  <BaseBlock class="head">
    <column>
      <row class="head-info">
        <img src="../../images/logo.png" class="logo" alt="logo">
        <column>
          <div class="text sub">{{ $t('head_info.sub_text') }}</div>
          <div class="text base">{{ $t('head_info.base_text') }}</div>
        </column>
        <column>
          <div class="text phone">{{ $t('phone_num') }}</div>
          <base-button @click="consult" class="base-button">{{ $t('request_call') }}</base-button>
        </column>
      </row>
      <row class="head-main">
        <column>
          <column class="j-right">
            <div class="text base">{{ $t('Подбор пульсометра') }}</div>
            <div class="text sub">{{ $t('с учётом Вашего уровня подготовки') }}</div>
          </column>
          <row class="text icons">
            <column class="icon">
              <img src="../../images/timer.png" alt="icon">
              <p class="msc-500" v-html="$t('Время подбора: 10 минут')"></p>
            </column>
            <column class="icon">
              <img src="../../images/cart.png" alt="icon">
              <p class="msc-500" v-html="$t('Бесплатная доставка')"></p>
            </column>
            <column class="icon">
              <img src="../../images/messages.png" alt="icon">
              <p class="msc-500" v-html="$t('Ответим на все вопросы')"></p>
            </column>
          </row>
          <column class="j-right btn-block">
            <base-button @click="consult" class="base-button">{{ $t('request_call') }}</base-button>
            <p class="text">
              {{ $t('или') }} <span @click="toCatalog" class="to-catalog underline">{{ $t('ПЕРЕЙТИ В КАТАЛОГ') }}</span>
            </p>
          </column>
        </column>
      </row>
    </column>
  </BaseBlock>
</template>
<script>
import BaseBlock from '../components/BaseBlock.vue';
import BaseButton from '../components/BaseButton.vue';
import Column from '../components/Column.vue';
import Row from '../components/Row.vue';

export default {
  name: 'HeadBlock',
  components: {BaseBlock, BaseButton, Column, Row},
  methods: {
    toCatalog() {
      this.$eventBus.$emit('toCatalog');
    },
    consult() {
      const modal = {
        title: this.$t('Просто заполните форму заявки'),
        text: this.$t('и мы перезвоним вам в течении 10 минут'),
        button: this.$t('request_call'),
        callback: () => this.$eventBus.$emit('thanks'),
      };
      this.$eventBus.$emit('openModal', modal);
    },
  },
};
</script>
<style scoped lang="scss">
.head {
  background-size: cover;
  height: 600px;
  background-image: url("../../images/head.png");
  width: 100%;

  .text {
    @extend .text-white-base;
  }

  .head-info {
    justify-content: space-evenly;
    height: 75px;
    width: 100%;

    .logo {
      width: 251px;
      height: 45px;
    }

    .base {
      @extend .text;
      @extend .msc-500;
      @extend .text-center;
      font-size: 18px;
      line-height: 29px;
    }

    .sub {
      @extend .text;
      @extend .msc-500;
      @extend .text-center;
      font-size: 12px;
      line-height: 12px;
    }

    .phone {
      @extend .text;
      @extend .msc-700;
      @extend .text-center;
      font-size: 18px;
      line-height: 29px;
    }

    .base-button {
      font-size: 12px;
      line-height: 19px;
      width: 153px;
      height: 32px;
    }
  }

  .head-main {
    @extend .jc-right;
    width: 942px;
    margin-top: 100px;

    .icons {
      width: 424px;
      justify-content: space-between;
      align-self: end;
      margin-top: 60px;

      .icon {
        @extend .jc-center;
        @extend .align-center;

        img {
          max-width: 45px;
          height: 45px;
        }
      }
    }


    .base {
      @extend .text;
      @extend .msc-900;
      font-size: 48px;
      line-height: 48px;
      text-transform: uppercase;
      @extend .text-right;
    }

    .sub {
      @extend .text;
      @extend .msc-500;
      @extend .text-right;
      @extend .m-top-20;
      font-size: 24px;
      line-height: 24px;
      text-transform: uppercase;
    }

    .btn-block {
      @extend .m-top-60;
      align-items: flex-end;

      p {
        @extend .msc-500;
      }

      .base-button {
        font-size: 16px;
        line-height: 25px;
        width: 303px;
        height: 50px;
      }
    }

  }

}

.underline {
  text-decoration: underline;
}

.to-catalog {
  cursor: pointer;
}

</style>
