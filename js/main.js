new Vue({
	el: '#app',
	data: {
		isRunning: false,
		playerHealth: 100,
		monsterHealth: 100,
		counter: 0
	},
	methods: {
		start: function() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.counter = 0;
			this.isRunning = !this.isRunning;
		},
		attack: function(min, max) {
			this.monsterHealth -= this.calcDamage(min, max);
			this.playerHealth -= this.monsterAttack();
			if(min > 3) {
				this.counter = 4
			}
			this.counter -= 1;
			this.checkWin();
		},
		heal: function(min, max) {
			this.playerHealth += this.calcDamage(min, max) - this.monsterAttack();
			this.counter -= 1;
			this.checkWin();
		},
		calcDamage: function(min, max) {
			return Math.round(Math.max((Math.random() * max), min));
		},
		monsterAttack: function() {
			return Math.round(Math.max((Math.random() * 18), 6));
			this.checkWin();
		},
		checkWin: function() {
			if(this.monsterHealth <= 0) {
				var outcome = 'won';
				this.newGame(outcome);
				return;
			}
			if(this.playerHealth <= 0) {
				var outcome = 'lost';
				this.newGame(outcome);
			}
		},
		newGame: function(outcome) {
			if(confirm("You " + outcome + "! New game?")) {
				this.playerHealth = 100;
				this.monsterHealth = 100;
				this.counter = 0;
			} else {
				this.start();
			}
		}
	}
})