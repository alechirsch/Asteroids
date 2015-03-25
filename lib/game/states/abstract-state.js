ig.module(
	'game.states.abstract-state'
	)
.defines(function()
{

	AbstractState = ig.Class.extend({

	    init: function() 
	    {
	        console.log("AbstractState Created");
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
