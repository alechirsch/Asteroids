ig.module(
	'game.entities.asteroids.asteroid-small'
	)
.requires(
	'impact.entity',
	//'plugins.joncom.box2d.entity',
	'game.entities.asteroids.asteroid-abstract'
	)
.defines(function(){
	AsteroidSmallEntity = AsteroidAbstract.extend({
		animSheet: new ig.AnimationSheet('media/small_asteroids.png', 31, 30),
		maxHealth: 1,
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
		},

		update: function(){
			this.parent();
		},

		setColor : function(color){
			this.parent(color);

			if(color == 0)
	    		this.currentAnim = this.anims.gray1;
	    	else if(color == 1)
	    		this.currentAnim = this.anims.red1;
	    	else if(color == 2)
	    		this.currentAnim = this.anims.brown1;
	    	else if(color == 3)
	    		this.currentAnim = this.anims.gray2;
	    	else if(color == 4)
	    		this.currentAnim = this.anims.red2;
	    	else if(color == 5)
	    		this.currentAnim = this.anims.brown2;
	    	else
	    		alert("COLOR WAS INVALID :" + color);
		}

	});
});