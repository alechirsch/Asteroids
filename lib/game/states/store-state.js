ig.module(
	'game.states.store-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	StoreState = AbstractState.extend({

	    init: function() 
	    {
	        console.log("StoreState Created");
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
