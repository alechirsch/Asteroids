ig.module(
	'game.entities.laser'
	)
.requires(
	'impact.entity'
	)
.defines(function(){
	LaserEntity = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/laser.png', 100, 26),

		maxVel: {x: 2000, y: 2000},
		velocity: 2000,
		angle: 0,

		init: function(x, y, settings){
			this.parent(x, y, settings);
			this.addAnim('idle', 0.1, [0], false);
			this.initAndReset();
		},

		reset: function(x, y, settings){
			this.parent(x, y, settings);
			this.initAndReset();
		},

		initAndReset: function(){
			var shipWidth = ig.game.ship.size.x;
			this.angle = ig.game.ship.angle;
			this.currentAnim.angle = this.angle - Math.PI/2;
			this.vel.x = -this.velocity * Math.cos(this.angle + Math.PI/2);
			this.vel.y = -this.velocity * Math.sin(this.angle + Math.PI/2);
		},

		update: function(){
			if(this.pos.y > ig.system.height + 100 ||
					this.pos.y < -100 ||
					this.pos.x > ig.system.width + 100 ||
					this.pos.x < -100){
				this.kill();
			}
			this.parent();
		}

	});
});