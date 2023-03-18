<template>
  <column class="product-container">
    <column class="base-side" v-if="!onDetailSide">
      <img class="logo" src="../../images/product.png" alt="product"/>
      <span class="title">{{ title }}</span>
      <span class="desc">{{ desc }}</span>
      <button @click="changeSide" class="details">{{ $t('Подробнее') }}</button>
      <div class="line"></div>
      <row class="buy-row">
        <column class="price">
          <span class="price-old">{{ priceOld }}</span>
          <span class="price">{{ price }}</span>
        </column>
        <base-button @click="buy" class="buy-btn">{{ $t('Купить') }}</base-button>
      </row>
    </column>
    <column class="detail-side" v-else>
      <ul class="details-ul">
        <li class="details-li" v-for="detail in details" :key="detail">{{ detail }}</li>
      </ul>
      <button @click="changeSide" class="details">{{ $t('Назад') }}</button>
    </column>
  </column>
</template>

<script>
import Column from './Column.vue';
import Row from './Row.vue';
import BaseButton from './BaseButton.vue';

export default {
  name: 'ProductBlock',
  components: {BaseButton, Row, Column},
  data() {
    return {
      title: 'Пульсометр Polar FT1',
      desc: 'Для первых шагов в тренировках, основанных на сердечном ритме',
      details: [
        'Вы услышите звуковое оповещение о нужном пульсе во время тренировки;',
        'Вы увидите информативный графический индикатор целевых тренировочных зон пульса;',
        'Также Вы увидите информацию о расходе калорий за тренировку;',
        'Вы сможете посмотреть данные по 10 тренировкам.',
      ],
      onDetailSide: false,
      priceOld: '4 750 руб.',
      price: '4 500 руб.',

    };
  },
  methods: {
    changeSide() {
      this.onDetailSide = !this.onDetailSide;
    },
    buy() {
      this.$eventBus.$emit('openModal', {
        title: this.$t('Ваш заказ:'),
        text: this.$t('Пульсометр Polar FT1'),
        button: this.$t('Купить'),
        callback: () => this.$eventBus.$emit('thanks'),
      });
    },
  },
};
</script>

<style scoped lang="scss">
.product-container {
  width: 303px;
  height: 442px;
  @extend .bg-white-base;
  border: 2px solid #E8E8E8;
  @extend .display-flex;
  @extend .jc-center;
  @extend .align-center;
  @extend .p-20;
  @extend .m-10;
  .base-side {
    @extend .jc-center;
    @extend .align-center;
  }
  .detail-side {
    height: 100%;
    .details-ul {
      flex: 1 0 auto;
    }
  }
  .logo {
    width: 140px;
    height: 200px;
  }

  .title {
    @extend .m-y-15;
    @extend .msc-700;
    @extend .fs-16;
    @extend .lh-25;
    @extend .text-black-base;
    @extend .text-center;
  }

  .desc {
    @extend .msc-300;
    @extend .fs-14;
    @extend .lh-22;
    @extend .text-black-base;
    @extend .m-bottom-10;
    @extend .text-center;
  }

  .details {
    border: none;
    outline: none;
    background: none;
    @extend .msc-500;
    @extend .fs-14;
    @extend .lh-14;
    @extend .text-red-base;
    @extend .text-center;
    text-decoration: underline;
    text-transform: uppercase;
    cursor: pointer;
  }

  .line {
    width: 263px;
    height: 1px;
    @extend .bg-grey-border;
    @extend .m-y-20;
  }

  .buy-btn {
    width: 135px;
    height: 44px;
  }
  .buy-row {
    width: 100%;
    @extend .jc-space-between;
    @extend .align-center;
  }
  .price-old {
    @extend .msc-300;
    @extend .fs-14;
    @extend .lh-22;
    @extend .text-black-base;
    @extend .text-center;
    color: #555555;
    text-decoration: line-through;
  }
  .price {
    @extend .msc-700;
    @extend .fs-20;
    @extend .lh-20;
    @extend .text-black-base;
    @extend .text-center;
  }
  .details-li {
    color: #555555;
    @extend .msc-300;
    @extend .fs-14;
    @extend .lh-21;
    @extend .m-bottom-10;
    list-style: square;
    &::marker {
      @extend .text-red-base;
    }
  }
}

</style>
