<template>
  <div class="base-block"  @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "BaseBlock"
}
</script>

<style scoped lang="scss">
  .base-block {
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 21px;
  }
</style>