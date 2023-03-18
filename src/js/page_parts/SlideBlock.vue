<template>
  <div class="slide-block">
    <i class="control-left" @click="left"/>
    <div class="slide-block__content">
      <div ref="imgList">
        <img :ref="`slide${index}`" v-for="(slide, index) in slides" :src="slide" :key="index"
             :class="{active: slideIndex === index}" alt="slide">
      </div>
    </div>
    <i class="control-right" @click="right"/>
  </div>
</template>

<script>

import anime from 'animejs';

export default {
  name: 'SlideBlock',
  data() {
    return {
      slideIndex: 1,
      slides: [
        this.domain + 'images/slide1.png',
        this.domain + 'images/slide2.png',
        this.domain + 'images/slide3.png',
      ],
      inProgress: false,
      domain: this.$config.useGitDomain ? this.$config.gitDomain : '/',
    };
  },
  methods: {
    left() {
      if (this.inProgress) {
        return;
      }
      this.inProgress = true;
      if (this.slideIndex <= 0) {
        this.slides.unshift(this.slides[this.slides.length - 1]);
        this.$nextTick(() => {
          this.animate(this.lambda, 0, 0);
          this.$nextTick(() => {
            this.slideIndex -= 1;
            this.animate(this.lambda, 500, -this.rest);
            setTimeout(() => {
              this.slides.pop();
              this.slideIndex += 1;
              this.animate(this.lambda, 0, this.rest);
              this.inProgress = false;
            }, 500);
          });
        });
      } else {
        this.slideIndex -= 1;
        this.animate();
        this.inProgress = false;
      }
    },
    right() {
      if (this.inProgress) {
        return;
      }
      this.inProgress = true;
      if (this.slideIndex >= this.slides.length - 1) {
        this.slides.push(this.slides[0]);
        this.$nextTick(() => {
          this.animate(this.lambda, 0, 0);
          this.$nextTick(() => {
            this.slideIndex += 1;
            this.animate(this.lambda, 500, this.rest);
            setTimeout(() => {
              this.slides.shift();
              this.slideIndex -= 1;
              this.animate(this.lambda, 0, this.rest);
              this.inProgress = false;
            }, 500);
          });
        });
      } else {
        this.slideIndex += 1;
        this.animate();
        this.inProgress = false;
      }
    },
    animate(lambda = 750, duration = 500, rest = 0) {
      anime({
        targets: this.$refs.imgList,
        translateX: (-this.slideIndex + 1) * lambda - rest,
        duration: duration,
        easing: 'easeInOutQuad',
      });
    },
  },
  computed: {
    lambda() {
      return this.slides.length % 2 === 0 ? 375 : 750;
    },
    rest() {
      return this.slides.length % 2 === 0 ? 375 : 0;
    },
  },
  mounted() {
    this.animate(this.lambda, 0, this.rest);
  },
};
</script>

<style scoped lang="scss">
.control-left {
  width: 30px;
  height: 50px;
  background: url('../../images/chevron-left.png') no-repeat;
  cursor: pointer;
  @extend .m-right-66;
}

.control-right {
  width: 30px;
  height: 50px;
  background: url('../../images/chevron-right.png') no-repeat;
  cursor: pointer;
  @extend .m-left-66;
}

.slide-block {
  @extend .display-flex;
  @extend .jc-center;
  @extend .align-center;
  @extend .m-y-81;
}

.img {
  width: 750px;
}

.img.active {
  display: block;
}

.img:not(.active) {
  display: none;
}

.slide-block__content {
  @extend .display-flex;
  @extend .jc-center;
  @extend .align-center;
  width: 750px;
  overflow: hidden;

  div {
    @extend .display-flex;
    @extend .jc-center;
    @extend .align-center;
    @extend .dir-row;
  }
}
</style>
