const WordCount = {
    data() {
        return {
            word: '',
            wordLength: ''
        }
    },
    methods: {
        calculateLength() {
            this.wordLength = this.word.length;
        }
    }
}

Vue.createApp(WordCount).mount('#app')