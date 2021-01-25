import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

class Flashcard {
    constructor(q, a) {
        this.question = q;
        this.answer = a;
        this.id = nanoid();
        this.displayAnswer = false;
        this.editMode = false;
    }
}

const app = Vue.createApp({
    data() {
        return {
            addNewCard: false,
            fieldsAreEmpty: false,
            question: '',
            answer: '',
            flashCards: [],
        }
    },

    mounted() {
        if(localStorage.getItem("flashcards")) {
            this.flashCards = JSON.parse(localStorage.getItem("flashcards"));
        }
    },

    methods: {
        onAddCard() {
            this.fieldsAreEmpty = false;
            this.addNewCard = true;  
        },

        onCloseEditMode() {
            this.addNewCard = false;
        },

        onSubmitCard() {
            if(!this.question || !this.answer) {
                this.fieldsAreEmpty = true;
            } else {
                let card = new Flashcard(this.question, this.answer);
                this.flashCards.unshift(card);
                this.onCardSubmitted();
            }
        },

        onCardSubmitted() {
            this.addNewCard = false;
            this.question = '';
            this.answer = '';
        },

        onEditCard(q, a, id) {
            this.deleteCard(id)
            this.question = q;
            this.answer = a;
            this.addNewCard = true;
        },

        onDeleteCard(id) {
            this.deleteCard(id);
        },

        deleteCard(cardId) {
            this.flashCards = this.flashCards.filter(element => element.id != cardId);
        }
    },

    watch: {
        flashCards: {
            handler() {
                localStorage.setItem("flashcards", JSON.stringify(this.flashCards));
            },
            deep: true
        },
    }
})

app.mount('#app')