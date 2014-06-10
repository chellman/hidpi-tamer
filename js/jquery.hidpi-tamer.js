/*
 * HiDPI Tamer
 * Finds all the images in a given container, checks them for hidpi characteristics (classes, filenames)
 * and makes sure they don't get too big for their britches
 *
 * Usage:
 * $(container).hiDPITamer();
 *
 * by Joe Chellman
 * http://www.shooflydesign.org/
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
*/

"use strict";

jQuery.fn.extend({
  hiDPITamer: function() {
  	var imgObj = new Image();
  
    return this.each(function() {
    	// I like to keep track of what "this" is
      var container = this;
      
      // what is this, anyway?
      // console.log(container);
      // console.log($(container));
      
      $(container).find('img').each(function(i, el) {
				var $img = $(el);

				if (/\-|_2x\./.test(el.src) || $img.hasClass('retina')) {
		
					imgObj.src = el.src;

					var width = $img.width(),
							newWidth = imgObj.width / 2;

					// console.log('width: ' + width + ' and newWidth: ' + newWidth);

					if (width > newWidth) {
						$img.css('width', newWidth + 'px');
					}
				}
			});
    });
  }
});