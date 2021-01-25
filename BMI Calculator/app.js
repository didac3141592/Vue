const App = {
    data() {
        return {
            height: '',
            weight: '',
            bmi: '',
            buttonActive: false
        }
    },

    computed: {
        getBmi() {
            bmi = +this.bmi
            return bmi.toFixed(2)
        }
    },
    
    methods: {
        computeBmi() {
            this.bmi = (+this.weight / ((+this.height * +this.height)/10000));
        },

        activateButton() {
            if(this.weight && this.height) {
                this.buttonActive = true;
            } else this.buttonActive = false;
        }
    },

    watch: {
        height() {
            this.activateButton();
        },
        
        weight() {
            this.activateButton();
        }

    }

}

Vue.createApp(App).mount('#app')