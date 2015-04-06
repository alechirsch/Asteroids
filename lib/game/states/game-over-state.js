ig.module(
	'game.states.game-over-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	GameOverState = AbstractState.extend({

	    init: function() 
	    {
	        console.log("GameOverState Created");
	    },

	    start : function()
	    {
	    	this.parent();

	    	console.log("Game Over Started");
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("Game Over Killed");
	    },


	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
