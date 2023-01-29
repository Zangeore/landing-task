<template>
  <div class="row" @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Row"
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>