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

	    start : function()
	    {
	    	this.parent();

	    	console.log("Store State Started");
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("Store State Killed");
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
