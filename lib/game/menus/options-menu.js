ig.module(
	'game.menus.options-menu'
	)
.requires(
	'game.menus.menu-abstract'

	)
.defines(function()
{

	OptionMenu = AbstractMenu.extend({		

	    init: function(x, y, settings) 
	    {
	    	this.parent(x,y,settings);

	    	this.createButton(.15,0,.7,70, "text", {text:"Music"}, null);
	    	this.createButton(.15,100,.7,70, "text",{text:"Sound"}, null);
	    	this.createButton(.15,200,.7,70, "text", {text:"Back to Menu"}, ig.game.stateManager.mainMenu);

	        console.log("Option Menu Created");
	    },

	    draw: function()
	    {	
	    	this.parent();
	    }
	});

});
