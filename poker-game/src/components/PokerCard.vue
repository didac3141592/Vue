<template>
  <div @click.once="turnCard" class="m-2">
    <transition name="fade" mode="out-in">
      <img v-if="faceDown" src="/images/back.png" alt="back-card" width="75" />
      <img v-else :src="cardImage" alt="card" width="75" />
    </transition>
  </div>
</template>

<script>
export default {
  emits: ['card-turned'],
  props: {
    cardImage: {
      type: String,
      required: true,
    },
    cardName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      faceDown: true,
    };
  },
  methods: {
    turnCard() {
      this.faceDown = !this.faceDown;
      this.$emit('card-turned', this.cardName);
    },
  },
};
</script>