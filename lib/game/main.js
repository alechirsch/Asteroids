ig.module( 
	'game.main'
	)
.requires(
	'impact.game',
	'impact.entity',
	'impact.entity-pool',
	'impact.image',
	'impact.sound',
	'impact.font',
	'game.entities.asteroids.asteroid-large',
	'game.entities.asteroids.asteroid-medium',
	'game.entities.asteroids.asteroid-small',
	'game.entities.asteroids.asteroid-manager',
	'game.entities.ship',
	'game.entities.laser',
	'game.entities.explosion',
	'game.entities.coin',
	'game.states.main-menu-state',
	'game.states.game-over-state',
	'game.states.game-pause-state',
	'game.states.game-play-state',
	'game.states.store-state',
	//'plugins.joncom.box2d.game',
	'impact.debug.debug'
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
		ship: 0,
		coins: 0,
		coinImage: new ig.Image('media/coin.png'),
		font: new ig.Font('media/score.font.png'),

		init: function() {

			var mainMenuState = new MainMenuState();
			var gamePlayState = new GamePlayState();
			var gameOverState = new GameOverState();
			var gamePauseState = new GamePauseState();
			var storeState = new StoreState();


			ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
			ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
			ig.input.bind(ig.KEY.UP_ARROW, 'up');
			ig.input.bind(ig.KEY.SPACE, 'space');
			ig.input.bind(ig.KEY.ENTER, 'enter');

			ig.EntityPool.enableFor(LaserEntity);
			ig.EntityPool.enableFor(ExplosionEntity);
			
			ig.EntityPool.enableFor(AsteroidLargeEntity);
			ig.EntityPool.enableFor(AsteroidMediumEntity);
			ig.EntityPool.enableFor(AsteroidSmallEntity);

			this.asteroidManager = new AsteroidManager();
			this.asteroidManager.startSpawn();

			this.ship = this.spawnEntity(ShipEntity, ig.system.width/2, ig.system.height/2);
		},

		update: function() {
			if(this.ship.health === 0 && ig.input.state('enter')){
				this.ship = this.spawnEntity(ShipEntity, ig.system.width/2, ig.system.height/2);
			}
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
			
			this.asteroidManager.update();

			this.parent();
		},

		draw: function() {

			this.parent();

			this.coinImage.drawTile(5, 5, 0, 32);
			this.font.draw('x ' + this.coins, 45, 5);
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

ig.main('#canvas', Asteroids, 60, 1200, 600, 1);

});
