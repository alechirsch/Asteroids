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
		maxHealth: 3,
		health: 3,
		size: {x:156,y:148},
		color: 0,


		init: function(x, y, settings, colorType){
			this.parent(x, y, settings);
			this.color = colorType;
			
			this.addAnim('gray', 0.1, [0, 3, 6], true);
			this.addAnim('red', 0.1, [1, 4, 7], true);
			this.addAnim('brown', 0.1, [2, 5, 8], true);

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
			this.currentAnim.gotoFrame(this.maxHealth - this.health);
		},


	});
});