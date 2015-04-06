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
	'game.states.state-manager',
	'game.menus.main-menu',
	//'plugins.joncom.box2d.game',
	'impact.debug.debug'
	)
.defines(function(){	

	Asteroids = ig.Game.extend({

		init: function() {

			this.stateManager = new StateManager();
			this.stateManager.start();

			ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
			ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
			ig.input.bind(ig.KEY.UP_ARROW, 'up');
			ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
			ig.input.bind(ig.KEY.SPACE, 'space');
			ig.input.bind(ig.KEY.ENTER, 'enter');

			ig.EntityPool.enableFor(LaserEntity);
			ig.EntityPool.enableFor(ExplosionEntity);
			
			ig.EntityPool.enableFor(AsteroidLargeEntity);
			ig.EntityPool.enableFor(AsteroidMediumEntity);
			ig.EntityPool.enableFor(AsteroidSmallEntity);


			
			//this.spawnEntity(MainMenu, 400, 100, {w:400, h:600});
		},

		update: function() {
			this.parent();

			this.stateManager.update();
		},

		draw: function() {
			this.parent();

			this.stateManager.draw();
		},
	});

ig.main('#canvas', Asteroids, 60, 1200, 600, 1);

});
