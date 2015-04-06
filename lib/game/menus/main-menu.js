ig.module(
	'game.menus.main-menu'
	)
.requires(
	'game.menus.menu-abstract'
	)
.defines(function()
{

	MainMenu = AbstractMenu.extend({

		

	    init: function(x, y, settings) 
	    {
	    	this.parent(x,y,settings);

	    	this.createButton(.15,0,.7,70, "text", {text:"Play"}, null);
	    	this.createButton(.15,100,.7,70, "text",{text:"Load"}, null);
	    	this.createButton(.15,200,.7,70, "text", {text:"Options"}, null);
	    	this.createButton(.15,300,.7,70, "text", {text:"Exit"}, null);

	        console.log("Main Menu Created");
	    },

	    draw: function()
	    {	
	    	this.parent();
	    }
	});

});
