<template>
  <button class="base-button" @click="$emit('click', $event)">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style scoped lang="scss">
.base-button {
  @extend .bg-red-base;
  @extend .msc-500;
  @extend .text-white-base;;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
