ig.module(
	'game.entities.asteroids.asteroid-large'
	)
.requires(
	'impact.entity',
	'game.entities.asteroids.asteroid-abstract'
	)
.defines(function(){
	AsteroidLargeEntity = AsteroidAbstract.extend({
		animSheet: new ig.AnimationSheet('media/large_asteroids.png', 156, 148),

		health: 3,
		size: {x:156,y:148},


		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('gray', 0.1, [0], false);
			this.addAnim('red', 0.1, [1], false);
			this.addAnim('brown', 0.1, [2], false);

			var random = Math.random() * 3 ;
	    	
	    	if(random < 1)
	    		this.currentAnim = this.anims.gray;
	    	else if(random < 2)
	    		this.currentAnim = this.anims.red;
	    	else
	    		this.currentAnim = this.anims.brown;
		},

		update: function(){
			this.parent();
		},


	});
});