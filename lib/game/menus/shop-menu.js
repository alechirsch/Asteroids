ig.module(
	'game.menus.shop-menu'
	)
.requires(
	'game.menus.menu-grid-abstract'
	)
.defines(function()
{

	ShopMenu = AbstractGridMenu.extend({		

		coinImage : new ig.Image('media/coin.png'),
		font : new ig.Font('media/score.font.png'),


	    init: function(x, y, settings) 
	    {
	    	settings.gridX = 3;

	    	this.parent(x,y,settings);

	    	this.createButton(0,0,150,150, "shop", {title:"Weapon", cost:"200", image:"media/weapon_shop.png"}, null);
	    	this.createButton(200,0,150,150, "shop",{title:"Shield", cost:"100", image:"media/shield_shop.png"}, null);

	    	this.createButton(500,0,150,50, "text",{text:"Next Level"}, stateManager.endShop);

	    	this.createButton(0,200,150,150, "shop",{title:"Engine", cost:"300", image:"media/engine_shop.png"}, null);
	    	this.createButton(200,200,150,150, "shop",{title:"Ammo", cost:"400", image:"media/ammo_shop.png"}, null);

	    	//this.createButton(.15,400,.7,70, "text", {text:"Exit"}, ig.game.stateManager.exit);

	        console.log("Main Menu Created");
	    },

	    draw: function()
	    {	
	    	this.parent();


	    	


	    	var xOffset = 500;
	    	var yOffset = 250;

	    	this.coinImage.drawTile(this.x + xOffset, this.y + yOffset,0,32);
			this.font.draw('x ' + 100, this.x + 45 + xOffset, this.y + yOffset);
	    }
	});

});
