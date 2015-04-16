ig.module(
	'game.properties.shipProperties'
	)
.defines(function()
{
	ShipProperties = ig.Class.extend({

		engineLevel : 1,
		weaponLevel : 1,
		shieldLevel : 1,
		ammoLevel : 1,

		init : function()
		{
			console.log("ShipProperties Created");
		},

		upgradeEngine: function()
		{
			this.engineLevel++;
		},

		upgradeWeapon : function()
		{
			this.weaponLevel++;
		},

		upgradeShield : function()
		{
			this.shieldLevel++;
		},

		upgradeAmmo : function()
		{
			this.ammoLevel++;
		}

	});

});
