const app = Vue.createApp({})

app.component('poker-game', {
    data() {
        return {
            suits: ['spades', 'clubs', 'hearts', 'diamonds'],
            numbers: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
            deck: []
        };
    },
    beforeMount() {
        this.generateDeck();
        this.shuffleDeck(this.deck);
    },
    methods: {
        generateDeck() {
            const deck = [];
            for (const suit in this.suits) {
                for (const number in this.numbers) {
                    deck.push({
                        number: this.numbers[number],
                        suit: this.suits[suit],
                        name: this.numbers[number] + this.suits[suit],
                        url: './png/' + this.numbers[number] + '_of_' + this.suits[suit] + '.png',
                    });
                }
            }
            this.deck = deck;
        },
        shuffleDeck(deck) {
            deck.sort(() => Math.random() - 0.5);
        },
    },
    template: `
    <poker-card v-for="card in deck" :card-image="card.url" :card-name="card.name" :key="card.name"></poker-card>
    `
})


app.component('poker-card', {
    props: {
        cardImage: {
            type: String,
            required: true,
        },
        cardName: {
            type: String,
            required: false,
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
            console.log('The card shown is: ', this.cardName);
        }
    },
    template: `
    <div @click="turnCard" class="m-2">
    <transition name="fade" mode="out-in">
    <img v-if="faceDown" src="./png/back.png" alt="card" width="100">
    <img v-else :src="cardImage" alt="back-card" width="100">
    </transition>
    </div>
    `
})

app.mount('#app');