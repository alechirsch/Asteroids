ig.module(
	'game.entities.asteroid-medium'
	)
.requires(
	'impact.entity'
	)
.defines(function(){
	AsteroidMediumEntity = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/asteroids_medium.png', 156, 148),

		health: 2,
		maxVel: {x: 500, y: 500},

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('gray', 0.1, [0], false);
			this.addAnim('red', 0.1, [1], false);
			this.addAnim('brown', 0.1, [2], false);
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