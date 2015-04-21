ig.module(
	'game.entities.asteroids.asteroid-abstract'
	)
.requires(
	'impact.entity'
	//'plugins.joncom.box2d.entity'
	)
.defines(function(){
	AsteroidAbstract = ig.Entity.extend({

		maxVel: {x: 500, y: 500},
		checkAgainst: ig.Entity.TYPE.A,
		type: ig.Entity.TYPE.A,
		health: 1,


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

		checkBounds: function(){
			var offSet = this.size.x > this.size.y ? this.size.x : this.size.y;
			if(this.pos.x > ig.system.width + offSet){
				this.pos.x = -offSet;
			}
			else if(this.pos.x < -offSet){
				this.pos.x = ig.system.width + offSet;
			}
			if(this.pos.y > ig.system.height + offSet){
				this.pos.y = -offSet;
			}
			else if(this.pos.y < -offSet){
				this.pos.y = ig.system.height + offSet;
			}
		},

		check: function(other){
			if(other instanceof ShipEntity){
				var distance = this.distanceTo(other);
				if(this.size.x/2 + other.size.x/2 > distance){
					if(other.shield && !other.shieldHit) this.receiveDamage(1);
					other.receiveDamage(1);
				}
			}
			else if(other instanceof LaserEntity){
				this.receiveDamage(1);
				other.kill();
			}
			else if(other instanceof AsteroidAbstract){
				this.bounce(other);
			}
		},

		bounce: function(other){
			/*
			this.vel.x = -this.vel.x;
			this.vel.y = -this.vel.y;
			*/
		},

		update: function(){
			if(this.vel.x > 0){
				this.currentAnim.angle += this.rotateSpeed;
			}
			else{
				this.currentAnim.angle -= this.rotateSpeed;
			}

			this.checkBounds();

			this.parent();
		},

		kill: function() {
			this.parent();
			console.log("Killed asteroid");
			this.manager.killedAsteroid(this);
		},

		//SETTERS
		setColor : function(color)
		{
			this.color = color;
		}
	});
});