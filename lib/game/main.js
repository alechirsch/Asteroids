ig.module( 
	'game.main'
	)
.requires(
	'impact.game',
	'impact.entity',
	'impact.entity-pool',
	'impact.image',
	'impact.sound',
	'impact.font'
	)
.defines(function(){	


	state = 0;

	MAIN_MENU = 0;
	GAME = 1;
	PAUSE = 2;
	STORE = 3;
	GAME_OVER = 4;

	Asteroids = ig.Game.extend({
		init: function() {

		},

		update: function() {
			switch(this.state) {
				case this.MAIN_MENU:

				break;
				case this.GAME:

				break;
				case this.PAUSE:

				break;
				case this.STORE:

				break;
				case this.GAME_OVER:

				break;
			}

			this.parent();
		},

		draw: function() {

			this.parent();

			switch(this.state) {
				case this.MAIN_MENU:

				break;
				case this.GAME:

				break;
				case this.PAUSE:

				break;
				case this.STORE:

				break;
				case this.GAME_OVER:

				break;
			}

		},
	});

	ig.main('#canvas', Asteroids, 60, 1000, 800, 1);

});
