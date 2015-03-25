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
		acceleration: 100,
		health: 1,

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('idle', 1, [0], true);
			this.addAnim('moving', 0.1, [1], false);
			this.addAnim('turn', 0.1, [2], false);
			this.addAnim('turnAndMove', 0.1, [3], false);
		},

		checkInputs: function(){
			var moving = false;
			this.currentAnim = this.anims.idle;
			if(ig.input.state('up')){
				moving = true;
				this.currentAnim  = this.anims.moving;
				this.accel = this.acceleration;
			}
			if(ig.input.state('left') && !ig.input.state('right')){
				if(moving){
					this.currentAnim = this.anims.turnAndMove;
				}
				else{
					this.currentAnim = this.anims.turn;
				}
				this.currentAnim.flip.x = true;
			}
			else if(ig.input.state('right') && !ig.input.state('left')){
				if(moving){
					this.currentAnim = this.anims.turnAndMove;
				}
				else{
					this.currentAnim = this.anims.turn;
				}
				this.currentAnim.flip.x = false;
			}
		},

		checkBounds: function(){

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