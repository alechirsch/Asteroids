ig.module(
	'game.entities.explosion'
	)
.requires(
	'impact.entity'
	)
.defines(function(){
	ExplosionEntity = ig.Entity.extend({
		//http://avanderw.co.za/wp-content/uploads/2011/07/explosion.png
		animSheet: new ig.AnimationSheet('media/explosion.png', 256, 128),
		angle: 0,

		init: function(x, y, settings){
			this.parent(x, y, settings);
			this.addAnim('idle', 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], true);
		},

		update: function(){
			if(this.currentAnim.loopCount > 0){
				this.kill();
			}
			this.parent();
		},

		reset: function(x, y, settings){
			this.anims.idle.rewind();
			this.parent(x, y, settings);
		}

	});
});