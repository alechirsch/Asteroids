ig.module(
	'game.entities.ship'
	)
.requires(
	'impact.entity'
	)
.defines(function(){
	ShipEntity = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/ship.png', 87, 150),
		maxVel: {x:500, y:500},
		acceleration: 10,
		angle: 0,
		health: 1,
		shootTimer: new ig.Timer(0.5),
		thruster: new ig.Sound('media/thrusters.*'),

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('idle', 1, [0], true);
			this.addAnim('moving', 0.1, [1], false);
			this.addAnim('turn', 0.1, [2], false);
			this.addAnim('turnAndMove', 0.1, [3], false);
			this.thruster.loop = true;
		},

		checkInputs: function(){
			var moving = false;
			this.currentAnim = this.anims.idle;
			if(ig.input.state('up') || (ig.input.state('left') && !ig.input.state('right')) || (ig.input.state('right') && !ig.input.state('left'))){
				this.thruster.play();
				if(ig.input.state('up')){
					moving = true;
					this.thruster.volume = 0.5;
					this.currentAnim  = this.anims.moving;
					this.vel.x -= this.acceleration * Math.cos(this.angle + Math.PI/2);
					this.vel.y -= this.acceleration * Math.sin(this.angle + Math.PI/2);
				}
				else{
					this.thruster.volume = 0.2;
				}
				if(ig.input.state('left') && !ig.input.state('right')){
					if(moving){
						this.currentAnim = this.anims.turnAndMove;
						this.thruster.volume = 0.7;
					}
					else{
						this.currentAnim = this.anims.turn;
					}
					this.angle -= 0.1;
					this.currentAnim.flip.x = true;
				}
				else if(ig.input.state('right') && !ig.input.state('left')){
					if(moving){
						this.currentAnim = this.anims.turnAndMove;
						this.thruster.volume = 0.7;
					}
					else{
						this.currentAnim = this.anims.turn;
					}
					this.angle += 0.1;
					this.currentAnim.flip.x = false;
				}
			}
			else{
				this.thruster.stop();
			}
			this.currentAnim.angle = this.angle;
			if(ig.input.state('space')){
				if(this.shootTimer.delta() >= 0){
					ig.game.spawnEntity(LaserEntity, this.pos.x, this.pos.y);
					this.shootTimer.reset();
				}
			}
		},

		checkBounds: function(){
			if(this.pos.x > ig.system.width + 50){
				this.pos.x = -100;
			}
			else if(this.pos.x < -100){
				this.pos.x = ig.system.width + 50;
			}
			if(this.pos.y > ig.system.height + 50){
				this.pos.y = -120;
			}
			else if(this.pos.y < - 120){
				this.pos.y = ig.system.height + 50;
			}
		},

		update: function() {

			this.parent();

			this.checkInputs();

			this.checkBounds();


		},

		kill: function(){
			ig.game.state = ig.game.GAME_OVER;
			this.parent();
		},

		draw: function(){
			/*draw UI here*/
			this.parent();
		}
	});
});