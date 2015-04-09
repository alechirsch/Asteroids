ig.module(
	'game.entities.coin'
	)
.requires(
	'impact.entity'
	)
.defines(function(){
	CoinEntity = ig.Entity.extend({
		//http://melonjs.github.io/tutorial-platformer/media/spinning_coin_gold.png
		animSheet: new ig.AnimationSheet('media/coin.png', 32, 32),
		maxVel: {x: 500, y: 500},
		size: {x: 32, y: 32},
		killTimer: new ig.Timer(4),
		type: ig.Entity.TYPE.B,
		angle: 0,

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('idle', 0.1, [0, 1, 2, 3, 4, 5, 6, 7], false);
			this.initAndReset();
		},

		initAndReset: function(){
			this.angle = Math.random() * 2 * Math.PI;
			this.vel.x = (Math.random() * 50) * (Math.random() > 0.5 ? 1 : -1);
			this.vel.y = (Math.random() * 50) * (Math.random() > 0.5 ? 1 : -1);
			this.killTimer = new ig.Timer(4);
			this.killTimer.reset();
		},

		reset: function(x, y, settings){
			this.parent(x, y, settings);
			this.initAndReset();
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

		update: function(){
			this.parent();
			this.checkBounds();
			if(this.killTimer.delta() >= 0){
				this.kill();
			}
		}
	});
});