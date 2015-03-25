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

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
