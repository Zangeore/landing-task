<template>
  <div class="column"  @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Column',
};
</script>

<style scoped lang="scss">
.column {
  @extend .display-flex;
  @extend .dir-column;
}
</style>
