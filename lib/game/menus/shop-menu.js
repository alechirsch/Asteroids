ig.module(
	'game.menus.shop-menu'
	)
.requires(
	'game.menus.menu-grid-abstract'
	)
.defines(function()
{

	ShopMenu = AbstractGridMenu.extend({		

	    init: function(x, y, settings) 
	    {
	    	settings.gridX = 2;

	    	this.parent(x,y,settings);

	    	this.createButton(0,0,150,150, "shop", {title:"Weapon", cost:"200", image:"media/weapon_shop.png"}, null);
	    	this.createButton(200,0,150,150, "shop",{title:"Shield", cost:"100", image:"media/shield_shop.png"}, null);
	    	this.createButton(0,200,150,150, "shop",{title:"Engine", cost:"300", image:"media/engine_shop.png"}, null);
	    	this.createButton(200,200,150,150, "shop",{title:"Ammo", cost:"400", image:"media/ammo_shop.png"}, null);

	    	//this.createButton(.15,400,.7,70, "text", {text:"Exit"}, ig.game.stateManager.exit);

	        console.log("Main Menu Created");
	    },

	    draw: function()
	    {	
	    	this.parent();
	    }
	});

});
