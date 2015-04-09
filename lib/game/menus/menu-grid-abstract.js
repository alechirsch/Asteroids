ig.module(
	'game.menus.menu-grid-abstract'
	)
.requires(
	'game.menus.menu-abstract'
	)
.defines(function()
{

	AbstractGridMenu= AbstractMenu.extend({

		init: function(x, y, settings) 
		{
			this.parent(x,y,settings);

			this.gridX = settings.gridX || 1;

			console.log("Abstract Grid Menu Created");
		},

		update: function()
		{
			this.parent();

			if( ig.input.pressed('up') )
			{
				if(this.selected - this.gridX >= 0 && this.menuItems[this.selected - this.gridX] != null)
					this.selected -= this.gridX;

				this.clearSelected();

				this.menuItems[this.selected].selected = 1;
			}

			if( ig.input.pressed('down') )
			{
				if(this.selected + this.gridX < this.menuItems.length && this.menuItems[this.selected + this.gridX] != null)
				{
					this.selected += this.gridX;
				}

				this.clearSelected();

				this.menuItems[this.selected].selected = 1;
			}

			if( ig.input.pressed('right') )
			{
				if(this.selected % this.gridX + 1 < this.gridX  && this.menuItems[this.selected + 1] != null)
					this.selected++;

				this.clearSelected();

				this.menuItems[this.selected].selected = 1;
			}

			if( ig.input.pressed('left') )
			{
				if(this.selected % this.gridX != 0  && this.menuItems[this.selected - 1] != null)
					this.selected--;

				this.clearSelected();

				this.menuItems[this.selected].selected = 1;
			}

		},

	});

});
