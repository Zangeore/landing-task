<template>
  <div class="app">
    <HeadBlock/>
    <BaseBlock>
    </BaseBlock>
    <BaseBlock>
    </BaseBlock>
    <BaseBlock>
    </BaseBlock>
    <BaseBlock>
    </BaseBlock>
  </div>
</template>

<script>
import BaseBlock from "./components/BaseBlock.vue";
import HeadBlock from "./page_parts/HeadBlock.vue";

export default {
  name: "App",
  components: {HeadBlock, BaseBlock}
}
</script>

