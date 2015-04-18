ig.module(
	'game.states.game-arcade-play-state'
	)
.requires(
	'game.states.abstract-game-play-state'
	)
.defines(function()
{

	GamePlayArcadeState = AbstractGamePlayState.extend({

	    init: function() 
	    {
	    	this.parent();
	    	
	        console.log("GamePlayArcadeState Created");
	    },

	    start : function()
	    {
	    	this.parent();

	    	console.log("GamePlayArcadeState Started");
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("GamePlayArcadeState Killed");
	    },

	    update: function()
	    {
	    	this.parent();
	    },

	    draw: function()
	    {
	    	this.parent();
	    }
	});

});
