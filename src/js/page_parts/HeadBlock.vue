<template>
  <BaseBlock class="head">
    <column>
      <row class="head-info">
        <img src="../../images/logo.png" class="logo" alt="logo">
        <column>
          <div class="text sub">{{ $text.get('head_info.sub_text') }}</div>
          <div class="text base">{{ $text.get('head_info.base_text') }}</div>
        </column>
        <column>
          <div class="text phone">{{ $text.get('phone_num') }}</div>
          <base-button class="base-button">{{ $text.get('request_call') }}</base-button>
        </column>
      </row>
      <row class="head-main">
        <column>
          <column class="j-right">
            <div class="text base">{{ $text.get('Подбор пульсометра') }}</div>
            <div class="text sub">{{ $text.get('с учётом Вашего уровня подготовки') }}</div>
          </column>
          <row class="text icons">
            <column class="icon">
              <img src="../../images/timer.png" alt="icon">
              <p v-html="$text.get('Время подбора: 10 минут')"></p>
            </column>
            <column class="icon">
              <img src="../../images/cart.png" alt="icon">
              <p v-html="$text.get('Бесплатная доставка')"></p>
            </column>
            <column class="icon">
              <img src="../../images/messages.png" alt="icon">
              <p v-html="$text.get('Ответим на все вопросы')"></p>
            </column>
          </row>
          <column class="j-right btn-block">
            <base-button class="base-button">{{ $text.get('request_call') }}</base-button>
            <p class="text">
              {{ $text.get('или') }} <span class="underline">{{ $text.get('ПЕРЕЙТИ В КАТАЛОГ') }}</span>
            </p>
          </column>
        </column>
      </row>
    </column>
  </BaseBlock>
</template>
<script>
import BaseBlock from "../components/BaseBlock.vue"
import BaseButton from "../components/BaseButton.vue"
import Column from "../components/Column.vue"
import Row from "../components/Row.vue"

export default {
  name: 'HeadBlock',
  components: {BaseBlock, BaseButton, Column, Row}
}
</script>
<style scoped lang="scss">
@import "../../css/global_atomic.scss";

.head {
  background-size: cover;
  height: 600px;
  background-image: url("../../images/head.png");
  width: 100%;

  .text {
    color: white;
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
    justify-content: right;
    width: 942px;
    margin-top: 100px;

    .icons {
      width: 424px;
      justify-content: space-between;
      align-self: end;
      margin-top: 60px;

      .icon {
        text-align: center;
        justify-content: center;
        align-items: center;

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
      text-align: right;
    }

    .sub {
      @extend .text;
      @extend .msc-500;
      font-size: 24px;
      line-height: 24px;
      text-transform: uppercase;
      text-align: right;
      margin-top: 20px;
    }

    .btn-block {
      margin-top: 60px;
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

</style>