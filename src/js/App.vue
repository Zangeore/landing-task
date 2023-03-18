<template>
  <div class="app">
    <HeadBlock/>
    <AdvantagesBlock/>
    <ConsultingBlock/>
    <SlideBlock/>
    <CatalogBlock/>
    <ReviewsBlock/>
    <FooterBlock/>
    <Fade v-if="modal || thanks"/>
    <Modal v-if="modal" :title="modal.title" :text="modal.text" :button="modal.button" :callback="modal.callback"/>
    <Thanks v-if="thanks"/>
  </div>
</template>

<script>
import HeadBlock from './page_parts/HeadBlock.vue';
import AdvantagesBlock from './page_parts/AdvantagesBlock.vue';
import ConsultingBlock from './page_parts/ConsultingBlock.vue';
import SlideBlock from './page_parts/SlideBlock.vue';
import CatalogBlock from './page_parts/CatalogBlock.vue';
import ReviewsBlock from './page_parts/ReviewsBlock.vue';
import FooterBlock from './page_parts/FooterBlock.vue';
import Modal from './page_parts/Modal.vue';
import Thanks from './page_parts/Thanks.vue';
import Fade from './page_parts/Fade.vue';

export default {
  name: 'App',
  components: {
    Fade,
    Thanks,
    Modal, FooterBlock, ReviewsBlock, CatalogBlock, SlideBlock, ConsultingBlock, AdvantagesBlock, HeadBlock},
  data() {
    return {
      modal: null,
      thanks: false,
    };
  },
  mounted() {
    this.$eventBus.$on('openModal', (modal) => {
      this.modal = modal;
      this.blockScroll();
    });
    this.$eventBus.$on('closeModal', () => {
      this.modal = null;
      this.thanks = false;
      this.unblockScroll();
    });
    this.$eventBus.$on('thanks', () => {
      this.modal = null;
      this.thanks = true;
      this.blockScroll();
    });
  },
  methods: {
    blockScroll() {
      document.body.style.overflowY = 'hidden';
    },
    unblockScroll() {
      document.body.style.overflowY = 'auto';
    },
  },
};
</script>

