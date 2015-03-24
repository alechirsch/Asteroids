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

Asteroids = ig.Game.extend({

});

ig.main('#canvas', Asteroids, 60, 1000, 800, 1);

});
