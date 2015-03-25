ig.module(
	'game.states.game-pause-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	GamePauseState = AbstractState.extend({

	    init: function() 
	    {
	        console.log("GamePauseState Created");
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
