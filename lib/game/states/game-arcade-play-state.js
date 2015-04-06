ig.module(
	'game.states.game-arcade-play-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	GamePlayArcadeState = AbstractState.extend({

	    init: function() 
	    {
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

	    },

	    draw: function()
	    {

	    }
	});

});
