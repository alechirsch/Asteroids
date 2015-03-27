ig.module(
	'game.entities.laser'
	)
.requires(
	'impact.entity'
	)
.defines(function(){
	LaserEntity = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/laser.png', 9, 75),
		size:{x:9, y: 75},
		maxVel: {x: 2000, y: 2000},
		velocity: 2000,
		angle: 0,
		type: ig.Entity.TYPE.A,

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
			this.currentAnim.angle = this.angle;
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
		},

		draw: function(){
			this.parent();

			var ctx = ig.system.context;
				    ctx.strokeStyle = "blue";  //some color
				    ctx.beginPath();
				    ctx.arc( ig.system.getDrawPos( this.pos.x - ig.game.screen.x ),
				            ig.system.getDrawPos( this.pos.y - ig.game.screen.y ),
				            1 * ig.system.scale,
				            0, Math.PI * 2 );
				    ctx.stroke();
		}

	});
});