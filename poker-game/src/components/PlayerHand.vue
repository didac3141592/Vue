<template>
  <section>
    <transition name="fade" mode="out-in">
      <div
        v-if="!handReady"
        class="d-flex flex-wrap justify-content-center align-items-center m-5 pt-5"
      >
        <poker-card
          @card-turned="cardTurned"
          v-for="card in cards"
          :cardName="card.name"
          :cardImage="card.url"
          :key="card.name"
        ></poker-card>
      </div>
    </transition>
    <div
      v-if="handReady"
      class="d-flex flex-wrap justify-content-center align-items-center m-5 pt-5"
    >
      <flipped-card
        v-for="choosenCard in choosenCards"
        :cardImage="choosenCard.url"
        :key="choosenCard.name"
      ></flipped-card>
    </div>
  </section>
</template>

<script>
import PokerCard from "./PokerCard.vue";
import FlippedCard from "./FlippedCard.vue";

export default {
  components: {
    PokerCard,
    FlippedCard,
  },
  props: ["cards"],
  emits: ["player-cards"],
  data() {
    return {
      choosenCards: [],
      playerHand: [],
      handReady: false,
    };
  },
  methods: {
    cardTurned(cardName) {
      const flippedCard = this.cards.find((card) => card.name === cardName);
      this.choosenCards.push(flippedCard);
      this.playerHand.push(cardName);

      if (this.choosenCards.length === 5) {
        this.handReady = true;
        this.$emit('player-cards', this.playerHand)
      }
    },
  },
};
</script>

<style scoped>
div {
  background-color: rgba(25, 177, 126, 0.5);
  padding: 1.5rem;
}
</style>