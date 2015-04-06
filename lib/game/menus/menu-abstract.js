ig.module(
	'game.menus.menu-abstract'
	)
.requires(
	'impact.entity',
	'game.menus.text-menu-item'
	)
.defines(function()
{

	AbstractMenu= ig.Entity.extend({

		x:0,
		y:0,
		w:0,
		h:0,
		selected:0,
		menuItems:[],
		canSelect: 0,

	    init: function(x, y, settings) 
	    {
	    	this.parent(x,y,settings);

	    	this.x = x;
	    	this.y = y;
	    	this.w = settings.w;
	    	this.h = settings.h;

	        console.log("Abstract Menu Created");
	    },

	    createButton : function(x,y,w,h,type,settings, callback)
	    {
	    	if(x <= 1)
	    	{
	    		x = x*this.x;
	    	}
	    	if(y <= 1)
	    	{
	    		y = y*this.y;
	    	}
	    	if(w <= 1)
	    	{
	    		w = w*this.w;
	    	}
	    	if(h <= 1)
	    	{
	    		h = h*this.h;
	    	}

	    	x += this.x;
	    	y += this.y; 


	    	this.menuItems.push(new TextMenuItem(x, y, w, h, settings.text, callback));

	    	if(this.menuItems.length == 1)
	    	{
	    		this.menuItems[0].selected = 1; 
	    	}
	    },

	    update: function()
	    {
	    	if(!ig.input.state('enter') && this.canSelect == 0)
	    	{
	    		this.canSelect = 1;
	    	}

	    	if( ig.input.pressed('up') )
	    	{
	    		console.log(this);

	    		this.selected -= 1;
	    		
	    		if(this.selected < 0)
	    			this.selected = this.menuItems.length - 1;

	    		this.clearSelected();

	    		this.menuItems[this.selected].selected = 1;
	    	}

	    	if( ig.input.pressed('down') )
	    	{
	    		this.selected += 1;
	    		
	    		if(this.selected >= this.menuItems.length)
	    			this.selected = 0;

	    		this.clearSelected();

	    		this.menuItems[this.selected].selected = 1;
	    	}

	    	if( ig.input.pressed('enter') && this.canSelect )
	    	{
	    		console.log(this);

	 			this.menuItems[this.selected].click();
	    	}
	    },

	    clearSelected: function()
	    {
	    	for (i = 0; i < this.menuItems.length; i++) {
			    this.menuItems[i].selected = false;
			}
	    },

	    draw: function()
	    {	
	    	var ctx = ig.system.context;

	    	//ctx.fillStyle="#aaaaaa";
			//ctx.fillRect(this.x, this.y, this.w, this.h);

			for (i = 0; i < this.menuItems.length; i++) {
			    this.menuItems[i].draw();
			}
	    }
	});

});
