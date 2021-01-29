// These functions can be defined outside the Vue app because they play no role whatsoever on the HTML or the DOM, this can be done for functions which are only needed in our methods, for instance. 
function rollHitDice() {
    return Math.floor(Math.random() * 20);
};
function rollHealingDice() {
    return Math.floor(Math.random() * 40);
};
function rollPlayerAttack() {
    return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
};
function rollMonsterAttack() {
    return Math.floor(Math.random() * 8) + Math.floor(Math.random() * 8);
};

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 500,
            cooldown: 3,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        // This will update the health bar using dynamic styling
        monsterHealthBarStyles() {
            if(this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: (this.monsterHealth / 5) + '%' };
        },
        playerHealthBarStyles() {
            if(this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        // Special attack has a cooldown. When in cooldown, the button should be disabled
        specialAttackReady() {
            return this.cooldown <= 0;
        }
    },
    methods: {
        // To keep track of the battle, any action will be recorded and prompted to the user
        addLogMessage(hit, who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
                success: hit
            })
        },
        surrender() {
            this.winner = 'monster';
        },
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 500;
            this.cooldown = 3;
            this.winner = null;
            this.logMessages = [];
        },
        // Attack follows a D&D-inspired system. Hit dice are rolled and then a 'modifier' is added. This is compared to the attack subject's AC (armor class), and will only deal damage when greater than this AC. Otherwise, it'll be a missed attack.
        attackMonster() {
            this.cooldown--;
            const hitDice = rollHitDice() + 6;
            if(hitDice > 14) {
                // Damage is also random and given by a pseudo-dice-roll
                const damage =  rollPlayerAttack() + 6;
                this.monsterHealth -= damage;
                this.addLogMessage(true, 'player', 'attack', damage);
            } else {
                this.addLogMessage(false, 'player', 'attack', null);
            }
            this.attackPlayer();
        },
        attackPlayer() {
            const hitDice = rollHitDice() + 4;
            if(hitDice > 18) {
                const damage =  rollMonsterAttack() + 5;
                this.playerHealth -= damage;
                this.addLogMessage(true, 'monster', 'attack', damage);
            } else {
                this.addLogMessage(false, 'monster', 'attack', null);
            }
        },
        specialAttackMonster() {
            this.cooldown = 5;
            const hitDice = rollHitDice() + 5;
            if(hitDice > 14) {
                const damage = rollPlayerAttack() + rollPlayerAttack() + 6;
                this.monsterHealth -= damage;
                this.addLogMessage(true, 'player', 'attack', damage)
            } else {
                this.addLogMessage(false, 'player', 'attack', null);
            }
            this.attackPlayer();
        },
        healPlayer() {
            const heal = rollHealingDice();
            if(this.playerHealth + heal > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += heal;
            }
            this.addLogMessage(true, 'player', 'heal', heal)
            this.attackPlayer();
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if(value <= 0) {
                this.winner = 'monster'
            };
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if(value <= 0) {
                this.winner = 'player' 
            };
        }
    }
});
app.mount('#game');