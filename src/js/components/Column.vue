<template>
  <div class="column"  @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Column"
}
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
}
</style>