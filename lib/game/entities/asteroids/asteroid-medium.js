ig.module(
	'game.entities.asteroids.asteroid-medium'
	)
.requires(
	'impact.entity',
	//'plugins.joncom.box2d.entity',
	'game.entities.asteroids.asteroid-abstract'
	)
.defines(function(){
	AsteroidMediumEntity = AsteroidAbstract.extend({
		animSheet: new ig.AnimationSheet('media/medium_asteroids.png', 65, 59),
		maxHealth: 2,
		health: 2,
		size: {x:65,y:59},


		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('gray', 0.1, [0, 9], false);
			this.addAnim('red', 0.1, [1, 10], false);
			this.addAnim('brown', 0.1, [2, 11], false);

			/*this.addAnim('gray', 0.1, [3, 12], false);
			this.addAnim('red', 0.1, [4, 13], false);
			this.addAnim('brown', 0.1, [5, 14], false);

			this.addAnim('gray', 0.1, [6, 15], false);
			this.addAnim('red', 0.1, [7, 16], false);
			this.addAnim('brown', 0.1, [8, 17], false);*/

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