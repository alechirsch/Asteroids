ig.module(
	'game.entities.asteroids.asteroid-large'
	)
.requires(
	'impact.entity',
	//'plugins.joncom.box2d.entity',
	'game.entities.asteroids.asteroid-abstract'
	)
.defines(function(){
	AsteroidLargeEntity = AsteroidAbstract.extend({
		animSheet: new ig.AnimationSheet('media/large_asteroids.png', 156, 148),
		maxHealth: 3,
		health: 3,
		size: {x:156,y:148},


		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('gray', 0.1, [0, 3, 6], true);
			this.addAnim('red', 0.1, [1, 4, 7], true);
			this.addAnim('brown', 0.1, [2, 5, 8], true);
		},

		update: function(){
			this.parent();
			this.currentAnim.gotoFrame(this.maxHealth - this.health);
		},

		setColor : function(color){
			this.parent(color);

			if(color == 0)
	    		this.currentAnim = this.anims.gray;
	    	else if(color == 1)
	    		this.currentAnim = this.anims.red;
	    	else if(color == 2)
	    		this.currentAnim = this.anims.brown;
	    	else
	    		alert("COLOR WAS INVALID : " + color);
		}

	});
});