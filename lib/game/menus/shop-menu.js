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

	    	properties = stateManager.gameMode.shipProperties;

	    	var costPerLevel = 4;

	    	this.createButton(0,0,150,150, "shop", {title:"Weapon", cost:costPerLevel * stateManager.gameMode.shipProperties.weaponLevel, image:"media/weapon_shop.png", level:stateManager.gameMode.shipProperties.weaponLevel}, function(button){
	    		
	    		if(stateManager.gameMode.coins >= costPerLevel * stateManager.gameMode.shipProperties.weaponLevel)
	    		{
	    			stateManager.gameMode.coins -= costPerLevel * stateManager.gameMode.shipProperties.weaponLevel;
	    			properties.upgradeWeapon();
	    			button.cost = costPerLevel * stateManager.gameMode.shipProperties.weaponLevel;

	    			console.log(JSON.stringify(stateManager.gameMode.shipProperties));
	    		}
	    	});

	    	this.createButton(200,0,150,150, "shop",{title:"Shield", cost:costPerLevel * stateManager.gameMode.shipProperties.shieldLevel, image:"media/shield_shop.png", level:properties.shieldLevel}, function(button){
	    		
	    		if(stateManager.gameMode.coins >= costPerLevel * stateManager.gameMode.shipProperties.shieldLevel)
	    		{
	    			stateManager.gameMode.coins -= costPerLevel * stateManager.gameMode.shipProperties.shieldLevel;
	    			properties.upgradeShield();
	    			button.cost = costPerLevel * stateManager.gameMode.shipProperties.shieldLevel;

	    			console.log(JSON.stringify(stateManager.gameMode.shipProperties));
	    		}
	    	});

	    	this.createButton(400,0,150,50, "text",{text:"Continue"}, stateManager.endShop);

	    	this.createButton(0,200,150,150, "shop",{title:"Engine", cost:costPerLevel * stateManager.gameMode.shipProperties.engineLevel, image:"media/engine_shop.png", level:properties.engineLevel}, function(button){
	    		
	    		if(stateManager.gameMode.coins >= costPerLevel * stateManager.gameMode.shipProperties.engineLevel)
	    		{
	    			stateManager.gameMode.coins -= costPerLevel * stateManager.gameMode.shipProperties.engineLevel;
	    			properties.upgradeEngine();
	    			button.cost = costPerLevel * stateManager.gameMode.shipProperties.engineLevel;

	    			console.log(JSON.stringify(stateManager.gameMode.shipProperties));
	    		}
	    	});
	    	
	    	this.createButton(200,200,150,150, "shop",{title:"Ammo", cost:costPerLevel * stateManager.gameMode.shipProperties.ammoLevel, image:"media/ammo_shop.png", level:properties.ammoLevel,}, function(button){
	    		
	    		if(stateManager.gameMode.coins >= costPerLevel * stateManager.gameMode.shipProperties.ammoLevel)
	    		{
	    			stateManager.gameMode.coins -= costPerLevel * stateManager.gameMode.shipProperties.ammoLevel;
	    			properties.upgradeAmmo();
	    			button.cost = costPerLevel * stateManager.gameMode.shipProperties.ammoLevel;

	    			console.log(JSON.stringify(stateManager.gameMode.shipProperties));
	    		}
	    	});

	    	this.createButton(400,200,150,150, "shop", {title:"Fuel", cost:costPerLevel * stateManager.gameMode.shipProperties.fuelLevel, image:"media/fuel_shop.png", level:properties.fuelLevel,}, function(button){
	    		
	    		if(stateManager.gameMode.coins >= costPerLevel * stateManager.gameMode.shipProperties.fuelLevel)
	    		{
	    			stateManager.gameMode.coins -= costPerLevel * stateManager.gameMode.shipProperties.fuelLevel;
	    			properties.upgradeFuel();
	    			button.cost = costPerLevel * stateManager.gameMode.shipProperties.fuelLevel;

	    			console.log(JSON.stringify(stateManager.gameMode.shipProperties));
	    		}
	    	});
	    	

	    	//this.createButton(.15,400,.7,70, "text", {text:"Exit"}, ig.game.stateManager.exit);

	    	//stateManager.gameMode.shipProperties.engineLevel

	        console.log("Main Menu Created");
	    },

	    draw: function()
	    {	
	    	this.parent();

	    	var xOffset = 425;
	    	var yOffset = 100;

	    	this.coinImage.drawTile(this.x + xOffset, this.y + yOffset,0,32);
			this.font.draw('x ' + stateManager.gameMode.coins, this.x + 45 + xOffset, this.y + yOffset);
	    }
	});

});
