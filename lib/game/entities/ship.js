ig.module(
	'game.entities.ship'
	)
.requires(
	'impact.entity'
	//'plugins.joncom.box2d.entity'
	)
.defines(function(){
	ShipEntity = ig.Entity.extend({
		//animSheet: new ig.AnimationSheet('media/ship.png', 60, 103),
		animSheet: new ig.AnimationSheet('media/ship-squished.png', 87, 87),
		maxVel: {x:500, y:500},
		offset: {x:4, y: 4},
		size: {x:80, y:80},
		acceleration: 5,
		rotateAccel: 0.005,
		rotateVel: 0,
		maxRotateVel: 0.1,
		angle: 0,
		health: 1,
		shield: true,
		shieldHit: false,
		shootTimer: new ig.Timer(0.1),
		shieldDeactivatedTimer: new ig.Timer(2),
		shieldActivateTimer: new ig.Timer(5),
		pickedUpCoin: new ig.Sound('media/coin_pickup.*'),
		thruster: new ig.Sound('media/thrusters.*'),
		shootLaser: new ig.Sound('media/laser.*'),
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('idle', 0.4, [0, 4], false);
			this.addAnim('moving', 0.4, [1, 5], false);
			this.addAnim('turn', 0.4, [2, 6], false);
			this.addAnim('turnAndMove', 0.4, [3, 7], false);
			this.thruster.loop = true;
			this.shootLaser.volume = 0.3;
			//this.shootTimer.set(1/stateManager.gameMode.shipProperties.weaponLevel);
		},

		receiveDamage: function(amount){
			if(this.shield && !this.shieldHit){
				this.shieldHit = true;
				this.shieldDeactivatedTimer.reset();
			}
			else if(!this.shield){
				this.health--;
				this.kill();
			}
		},

		check: function(other){
			if(other instanceof CoinEntity){
				stateManager.currentState.coins++;
				this.pickedUpCoin.play();
				other.kill();
			}
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
					this.vel.x -= this.acceleration * stateManager.gameMode.shipProperties.engineLevel * Math.cos(this.angle + Math.PI/2);
					this.vel.y -= this.acceleration * stateManager.gameMode.shipProperties.engineLevel * Math.sin(this.angle + Math.PI/2);

					stateManager.gameMode.shipProperties.fuel -= .02;
				}
				else{
					this.thruster.volume = 0.2;
				}
				if(ig.input.state('left') && !ig.input.state('right')){

					stateManager.gameMode.shipProperties.fuel -= .005;

					if(moving){
						this.currentAnim = this.anims.turnAndMove;
						this.thruster.volume = 0.7;
					}
					else{
						this.currentAnim = this.anims.turn;
					}
					if(this.rotateVel <= this.maxRotateVel){
						this.rotateVel += this.rotateAccel;
					}
					this.angle -= this.rotateVel;
					this.currentAnim.flip.x = true;
				}
				else if(ig.input.state('right') && !ig.input.state('left')){

					stateManager.gameMode.shipProperties.fuel -= .005;

					if(moving){
						this.currentAnim = this.anims.turnAndMove;
						this.thruster.volume = 0.7;
					}
					else{
						this.currentAnim = this.anims.turn;
					}
					if(this.rotateVel <= this.maxRotateVel){
						this.rotateVel += this.rotateAccel;
					}
					this.angle += this.rotateVel;
					this.currentAnim.flip.x = false;
				}
				else{
					this.rotateVel = 0;
				}
			}
			else{
				this.rotateVel = 0;
			}
			this.currentAnim.angle = this.angle;
			if(ig.input.state('space')){
				if(this.shootTimer.delta() >= 0){

					if(stateManager.gameMode.shipProperties.ammo > 0)
					{
						this.shootLaser.play();

						stateManager.gameMode.shipProperties.ammo--;

						var x = this.pos.x;
						var y = this.pos.y;

						var inGameWidth = Math.abs(Math.cos(this.angle)) * this.size.x + Math.abs(Math.sin(this.angle)) * this.size.y;
						var inGameHeight = Math.abs(Math.sin(this.angle)) * this.size.x + Math.abs(Math.cos(this.angle)) * this.size.y;

						inGameWidth -= (inGameWidth - this.size.x);
						inGameHeight -= (inGameHeight - this.size.y);

						extraX = 0;
						extraY = 0;
			
						var laserExtraX = (Math.abs(Math.cos(this.angle)) * 9 + Math.abs(Math.sin(this.angle)) * 75);
						var laserExtraY = (Math.abs(Math.sin(this.angle)) * 9 + Math.abs(Math.cos(this.angle)) * 75);

						laserExtraX -= (laserExtraX - 9);
						laserExtraY -= (laserExtraY - 9);

						ig.game.spawnEntity(LaserEntity, x + inGameWidth/2 + extraX - laserExtraX/2, y + inGameHeight/2 + extraY - laserExtraY/2, {angle:this.angle});

						this.shootTimer.reset();
					}
				}
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
			if(!this.shield && this.shieldActivateTimer.delta() >= 0){

				if(stateManager.gameMode.shipProperties.shield > 0)
				{
					this.shield = true;
					stateManager.gameMode.shipProperties.shield--;
				}

			}
			if(this.shieldHit){
				if(this.shieldDeactivatedTimer.delta() >= 0){
					this.shield = false;
					this.shieldHit = false;
					this.shieldActivateTimer.reset();
				}

			}
			else if(this.shield){
				this.currentAnim.gotoFrame(1);
			}
			else{
				this.currentAnim.gotoFrame(0);
			}

		},

		kill: function(){

			console.log("SHIIIIP");
			console.log(this.parent);

			ig.game.spawnEntity(ExplosionEntity, this.pos.x, this.pos.y);

			this.parent();
		},

		draw: function(){
			/*draw UI here*/
			this.parent();
/*
			 var ctx = ig.system.context;
				    ctx.strokeStyle = "red";  //some color
				    ctx.beginPath();
				    ctx.arc( ig.system.getDrawPos( this.pos.x - ig.game.screen.x ),
				            ig.system.getDrawPos( this.pos.y - ig.game.screen.y ),
				            1 * ig.system.scale,
				            0, Math.PI * 2 );
				    ctx.stroke();
				    */
				}
			});
});