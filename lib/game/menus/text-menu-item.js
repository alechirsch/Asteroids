ig.module(
	'game.menus.text-menu-item'
	)
.requires(
	'impact.entity',
	'game.menus.menu-item-abstract'
	)
.defines(function()
{
	var font = new ig.Font( 'media/font.png' );
	
	TextMenuItem = AbstractMenuItem.extend({


	    init: function(x, y, w, h, text) 
	    {
	    	this.parent(x,y,w,h);

	    	this.text = text;

	    	this.textHeight = font.heightForString(this.text);

	        console.log("TextMenuItem Created");
	    },

	    update: function()
	    {
	    	this.parent();
	    },

	    draw: function()
	    {	
	    	this.parent();

	    	

			font.draw( 'Some text', this.x + this.w/2, this.y + this.h/2 - this.textHeight/2, ig.Font.ALIGN.CENTER);
	    }
	});

});
