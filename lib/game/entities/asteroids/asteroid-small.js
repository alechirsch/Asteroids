ig.module(
	'game.entities.asteroids.asteroid-small'
	)
.requires(
	'impact.entity',
	'game.entities.asteroids.asteroid-abstract'
	)
.defines(function(){
	AsteroidSmallEntity = AsteroidAbstract.extend({
		animSheet: new ig.AnimationSheet('media/small_asteroids.png', 31, 30),

		health: 1,
		size: {x:31,y:30},


		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('gray1', 0.1, [0], false);
			this.addAnim('red1', 0.1, [1], false);
			this.addAnim('brown1', 0.1, [2], false);
			this.addAnim('gray2', 0.1, [3], false);
			this.addAnim('red2', 0.1, [4], false);
			this.addAnim('brown2', 0.1, [5], false);
		},

		update: function(){
			this.parent();
		},


	});
});