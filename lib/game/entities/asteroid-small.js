ig.module(
	'game.entities.asteroid-small'
	)
.requires(
	'impact.entity'
	)
.defines(function(){
	AsteroidSmallEntity = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/asteroids_small.png', 31, 30),

		health: 1,
		maxVel: {x: 500, y: 500},

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
			if(this.vel.x > 0){
				this.currentAnim.angle += 0.1;
			}
			else{
				this.currentAnim.angle -= 0.1;
			}
			if(this.pos.y > ig.system.height + 40){
				this.kill();
			}
			this.parent();
		},


	});
});