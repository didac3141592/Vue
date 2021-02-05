const App = {
    data() {
        return {
            displayMessage: false,
            name: '',
            message: ''
        }
    },

    methods: {
        onClick() {
            this.message = 'Hello and welcome, ' + this.name;
            this.displayMessage = true;
        }
    }
}

Vue.createApp(App).mount('#app')