ig.module(
	'game.menus.menu-item-abstract'
	)
.requires(
	'impact.entity'
	)
.defines(function()
{

	AbstractMenuItem = ig.Class.extend({

		x:0,
		y:0,
		w:0,
		h:0,
		selected:0,

	    init: function(x, y, w, h) 
	    {
	    	//this.parent(x,y,settings);

	    	//console.log(settings);

	    	this.x = x;
	    	this.y = y
	    	this.w = w;
	    	this.h = h;

	        console.log("Abstract MenuItem Created");

	    },

	    update: function()
	    {
	    	if( ig.input.pressed('enter') )
	    	{
	    		console.log("PRESSED!");
	    		this.selected = !this.selected;
	    	}
	    },

	    draw: function()
	    {	
	    	var ctx = ig.system.context;

	    	ctx.fillStyle="#5A6169";
			ctx.fillRect(this.x, this.y, this.w, this.h);

			if(this.selected)
			{
				ctx.strokeStyle="#FF0000";
				ctx.strokeRect(this.x, this.y, this.w, this.h);
			}
	    },

	    click:function()
	    {
	    	console.log("Clicked " + this.x + " : " + this.y);
	    }
	});

});
