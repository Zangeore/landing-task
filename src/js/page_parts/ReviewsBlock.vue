<template>
  <BaseBlock>
    <column>
      <div class="title">
        {{ $t('отзывы клиентов') }}
      </div>
        <row class="review" v-for="review in reviews" :key="review.name">
          <div class="review__logo">
            <img :src="review.logo" alt="logo">
          </div>
          <column class="review__text">
            <div class="review__name">
              {{ review.name }}
            </div>
            <div class="review__count">
              {{ review.count }}
            </div>
            <div class="review__text">
              {{ review.text }}
            </div>
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
  name: 'ReviewsBlock',
  components: {Row, Column, BaseBlock},
  data() {
    return {
      reviews: [
        {
          name: 'Ирина Иванченко',
          count: '2 полумарафона',
          // eslint-disable-next-line max-len
          text: 'Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности. Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же. Новые цели - новый гаджет! Спасибо, RunSmart!',
          logo: '../../images/person.png',
        },
        {
          name: 'Иван Сёмочкин',
          count: '1 полумарафон',
          // eslint-disable-next-line max-len
          text: 'Крутая штука-пульсометр. Обычно без них бегал. Оказывается только хуже себе делал. Купил пульсометр, ещё в подарок получил тренировку. Со мной вместе провели первую тренировку, научили пользоваться новым гаджетом. Также объяснили основы анатомии, составили план тренировок на месяц вперёд. С ними подготовился к своему первому полумарафону! Спасибо!!!',
          logo: '../../images/person2.png',
        },
        {
          name: 'Юлия Дашкина',
          count: '2 полумарафона',
          // eslint-disable-next-line max-len
          text: 'Долго не могла начать бегать, т.к. до этого несколько раз начинала, но становилось тяжело и я бросала. От друзей услышала о RunSmart и о беге с контролем пульса и решила попробовать. Позвонила, ребята поинтересовались моими целями и подобрали очень интересный вариант со скидкой! Теперь бегаю и наслаждаюсь бегом! Пробежала уже 2 полумарафона и несколько более коротких забегов и не намерена останавливаться! Спасибо!!!',
          logo: '../../images/person3.png',
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.title {
  @extend .msc-700;
  @extend .text-center;
  @extend .text-black-base;
  @extend .fs-30;
  @extend .lh-30;
  @extend .m-y-60;
}
.review__logo {
  width: 169px;
  height: 169px;
  @extend .m-right-60;
  img {
    border-radius: 100%;
  }
}
.review__name {
  @extend .msc-700;
  @extend .text-black-base;
  @extend .fs-18;
  @extend .lh-18;
}
.review__count {
  @extend .msc-500;
  @extend .text-grey-font;
  @extend .fs-14;
  @extend .lh-22;
  @extend .m-bottom-10;
}
.review__text {
  @extend .msc-300;
  @extend .text-black-base;
  @extend .fs-16;
  @extend .lh-25;
}
.review {
  @extend .m-bottom-60;
  width: 1111px;
}
</style>
