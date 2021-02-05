<template>
  <div class="m-2">
    <img :src="cardImage" alt="card" width="75" />
  </div>
</template>

<script>
export default {
  props: {
    cardImage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
div {
  background-color: transparent;
}
</style>