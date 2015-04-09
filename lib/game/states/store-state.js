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

	    	this.shopMenu = ig.game.spawnEntity(ShopMenu, 500, 100, {w:400, h:600});

	    	console.log("Store State Started");
	    },

	    kill : function()
	    {
	    	this.parent();

	    	if(this.shopMenu)
	    		this.shopMenu.kill();

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
