<template>
  <button class="base-button" @click="$emit('click', $event)">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "BaseButton"
}
</script>

<style scoped>
.base-button {
  font-family: 'Museo Sans Cyrl 500', serif;
  font-weight: 500;
  background: #C70101;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #FFFFFF;
  text-transform: uppercase;
}
</style>