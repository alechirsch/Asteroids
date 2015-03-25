ig.module( 
	'game.main'
	)
.requires(
	'impact.game',
	'impact.entity',
	'impact.entity-pool',
	'impact.image',
	'impact.sound',
	'impact.font',/*
	'game.entities.asteroid-large',
	'game.entities.asteroid-medium',
	'game.entities.asteroid-small',*/
	'game.entities.ship'
	)
.defines(function(){	


	state = 0;

	MAIN_MENU = 0;
	GAME = 1;
	PAUSE = 2;
	STORE = 3;
	GAME_OVER = 4;

	Asteroids = ig.Game.extend({

		gravity: 0,

		init: function() {
			ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
			ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
			ig.input.bind(ig.KEY.UP_ARROW, 'up');
			ig.input.bind(ig.KEY.SPACE, 'space');

			ig.EntityPool.enableFor(ShipEntity);/*
			ig.EntityPool.enableFor(AsteroidLargeEntity);
			ig.EntityPool.enableFor(AsteroidMediumEntity);
			ig.EntityPool.enableFor(AsteroidSmallEntity);*/
			this.spawnEntity(ShipEntity, ig.system.width/2, ig.system.height/2);
		},

		update: function() {
			/*
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
			*/

			this.parent();
		},

		draw: function() {

			this.parent();
/*
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
			*/

		},
	});

	ig.main('#canvas', Asteroids, 60, 1000, 800, 1);

});
