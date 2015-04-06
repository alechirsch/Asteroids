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

	    start: function()
	    {
	    	
	    },

	    kill: function()
	    {

	    },


	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
