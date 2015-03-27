ig.module(
	'game.entities.ship'
	)
.requires(
	'impact.entity'
	)
.defines(function(){
	ShipEntity = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/ship.png', 60, 103),
		maxVel: {x:500, y:500},
		offset: {x:0, y: 0},
		acceleration: 10,
		angle: 0,
		health: 1,
		shield: 1,
		shootTimer: new ig.Timer(0.05),
		thruster: new ig.Sound('media/thrusters.*'),
		type: ig.Entity.TYPE.A,

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('idle', 1, [0, 4], false);
			this.addAnim('moving', 0.1, [1, 5], false);
			this.addAnim('turn', 0.1, [2, 6], false);
			this.addAnim('turnAndMove', 0.1, [3, 7], false);
			this.thruster.loop = true;
		},

		checkInputs: function(){
			var moving = false;
			this.currentAnim = this.anims.idle;
			if(ig.input.state('up') || (ig.input.state('left') && !ig.input.state('right')) || (ig.input.state('right') && !ig.input.state('left'))){
				//this.thruster.play();
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
				//this.thruster.stop();
			}
			this.currentAnim.angle = this.angle;
			if(ig.input.state('space')){
				//if(this.shootTimer.delta() >= 0){

					ig.game.spawnEntity(LaserEntity, this.pos.x + (this.size.y/2)*Math.cos(this.angle), this.pos.y + (this.size.y/2)*Math.sin(this.angle));
					//ig.game.spawnEntity(LaserEntity, this.pos.x, this.pos.y);

				//	this.shootTimer.reset();
				//}
			}
		},

		checkBounds: function(){
			var offSet = this.size.y;
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

		update: function() {

			this.parent();

			this.checkInputs();

			this.checkBounds();
			if(this.shield){
				this.currentAnim.gotoFrame(1);
			}
			else{
				this.currentAnim.gotoFrame(0);
			}

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