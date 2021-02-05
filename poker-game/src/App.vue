<template>
  <header class="d-flex flex-column align-items-center mb-2">
    <h1 class="text-center m-2 p-2 fw-bold">How the turntables</h1>
    <img
      src="https://i.pinimg.com/736x/e5/d4/5e/e5d45eab567d9a84e7e61477fabb6f07--turntable-michael-scott-quotes.jpg"
      alt=""
    />
  </header>
  <section>
    <h2 class="text-center">Pick 5 cards for each player!</h2>
    <player-hand :cards="playerOneCards" @player-cards="playOne"></player-hand>
    <p v-if="winner" class="text-center h3 fw-bold">Player one has: {{ playerOneHand.descr }}</p>
    <player-hand :cards="playerTwoCards" @player-cards="playTwo"></player-hand>
    <p v-if="winner" class="text-center h3 fw-bold">Player two has: {{ playerTwoHand.descr}}</p>
  </section>
  <!-- <section v-if="winner">
    <h2>We have a winner! {{ winner.name }}</h2>
  </section> -->
</template>


<script>
import PlayerHand from "./components/PlayerHand.vue";
import { Hand } from "pokersolver";

export default {
  components: {
    PlayerHand,
  },
  data() {
    return {
      suits: ["spades", "clubs", "hearts", "diamonds"],
      numbers: [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "jack",
        "queen",
        "king",
        "ace",
      ],
      playerOneCards: [],
      playerOneHand: [],
      playerTwoCards: [],
      playerTwoHand: [],
      winner: null,
    };
  },
  created() {
    this.playerOneCards = this.generateDeck();
    this.playerTwoCards = this.generateDeck();

    this.shuffleDeck(this.playerOneCards);
    this.shuffleDeck(this.playerTwoCards);

    this.selectCards(this.playerOneCards);
    this.selectCards(this.playerTwoCards);
  },
  methods: {
    generateDeck() {
      const deck = [];
      for (const suit in this.suits) {
        for (const number in this.numbers) {
          if (number == "10") {
            deck.push({
              number: "t",
              suit: this.suits[suit],
              name: this.numbers[number].toUpperCase()[0] + this.suits[suit][0],
              url:
                "/images/" +
                this.numbers[number] +
                "_of_" +
                this.suits[suit] +
                ".png",
            });
          } else {
            deck.push({
              number: this.numbers[number],
              suit: this.suits[suit],
              name: this.numbers[number].toUpperCase()[0] + this.suits[suit][0],
              url:
                "../images/" +
                this.numbers[number] +
                "_of_" +
                this.suits[suit] +
                ".png",
            });
          }
        }
      }
      return deck;
    },
    shuffleDeck(deck) {
      deck.sort(() => Math.random() - 0.5);
    },
    selectCards(deck) {
      deck.splice(10);
    },
    playOne(cards) {
      this.playerOneHand = cards;
      if (this.playerTwoHand.length != 0) {
        this.checkWinner();
      }
    },
    playTwo(cards) {
      this.playerTwoHand = cards;
      if (this.playerOneHand.length != 0) {
        this.checkWinner();
      }
    },
    checkWinner() {
      this.playerOneHand = Hand.solve(this.playerOneHand);
      this.playerTwoHand = Hand.solve(this.playerTwoHand);
      this.winner = Hand.winners([this.playerOneHand, this.playerTwoHand]);
      console.log(this.winner)
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>