ig.module(
	'game.entities.asteroids.asteroid-small'
	)
.requires(
	'impact.entity',
	'game.entities.asteroids.asteroid-abstract'
	)
.defines(function(){
	AsteroidSmallEntity = AsteroidAbstract.extend({
		animSheet: new ig.AnimationSheet('media/small_asteroids.png', 31, 30),

		health: 1,
		size: {x:31,y:30},


		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('gray1', 0.1, [0], false);
			this.addAnim('red1', 0.1, [1], false);
			this.addAnim('brown1', 0.1, [2], false);
			this.addAnim('gray2', 0.1, [3], false);
			this.addAnim('red2', 0.1, [4], false);
			this.addAnim('brown2', 0.1, [5], false);

			var random = Math.random() * 6 ;
	    	
	    	if(random < 1)
	    		this.currentAnim = this.anims.gray1;
	    	else if(random < 2)
	    		this.currentAnim = this.anims.red1;
	    	else if(random < 3)
	    		this.currentAnim = this.anims.brown1;
	    	else if(random < 4)
	    		this.currentAnim = this.anims.gray2;
	    	else if(random < 5)
	    		this.currentAnim = this.anims.red2;
	    	else
	    		this.currentAnim = this.anims.brown2;
		},

		update: function(){
			this.parent();
		},


	});
});