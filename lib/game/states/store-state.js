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

	    	this.shopMenu = ig.game.spawnEntity(ShopMenu, ig.system.width/2, ig.system.height/2, {w:650, h:400});

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
