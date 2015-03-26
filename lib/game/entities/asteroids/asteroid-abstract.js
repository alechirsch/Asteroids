ig.module(
	'game.entities.asteroids.asteroid-abstract'
	)
.requires(
	'impact.entity'
	)
.defines(function(){
	AsteroidAbstract = ig.Entity.extend({

		maxVel: {x: 500, y: 500},


		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.initAndReset();
		},

		reset: function(x, y, settings)
		{
			this.parent(x, y, settings);

			this.initAndReset();
		},

		initAndReset: function()
		{	
			this.velocity = Math.random() * 100 + 100;
			this.angle = Math.random() * 2 * Math.PI; 

			this.rotateSpeed = Math.random() * .05 + .01;

			this.vel.x = Math.cos(this.angle) * this.velocity;
			this.vel.y = Math.sin(this.angle) * this.velocity;
		},

		update: function(){
			if(this.vel.x > 0){
				this.currentAnim.angle += this.rotateSpeed;
			}
			else{
				this.currentAnim.angle -= this.rotateSpeed;
			}

			if(this.pos.y > ig.system.height
				|| this.pos.y + this.size.y < 0
				|| this.pos.x + this.size.x < 0
				|| this.pos.x > ig.system.width){

				this.kill();
			}
			this.parent();
		},

		kill: function() {
			this.parent();
			console.log("Killed asteroid");

			this.manager.killedAsteroid(this);
		}


	});
});