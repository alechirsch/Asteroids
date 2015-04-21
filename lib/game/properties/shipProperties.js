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
		fuelLevel: 1,

		fuel : 20,
		fuelMax : 20,
		ammo : 20,
		ammoMax : 20,
		shield : 0,


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
			this.ammoMax = this.ammoLevel * 10;
		},

		upgradeFuel : function()
		{
			this.fuelLevel++;
			this.fuelMax = this.fuelLevel * 10;
		},

		reset : function()
		{
			this.fuel = this.fuelMax;
			this.ammo = this.ammoMax;
			this.shield = this.shieldLevel-1;
		}

	});

});
