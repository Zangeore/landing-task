<template>
  <div class="base-block"  @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'BaseBlock',
};
</script>

<style scoped lang="scss">
  .base-block {
    @extend .bg-white-base;
    @extend .display-flex;
    @extend .jc-center;
    @extend .p-21;
    width: 100%;
  }
</style>
