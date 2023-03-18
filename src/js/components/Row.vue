<template>
  <div class="row" @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Row',
};
</script>

<style scoped lang="scss">
.row {
  @extend .display-flex;
  @extend .dir-row;
}
</style>
