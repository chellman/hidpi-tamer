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
  hiDPITamer: function(options) {
  
  	// default value for opts
  	// not strictly necessarily here - jQuery.extend is smart enough to deal with undefined
  	options = options || {};
  	
  	var defaultOptions = {
  		'namePattern' : /(\-|_)2x\./,
  		'class' : 'retina',
  	};
  	
  	// merge the default options for those not provided
  	options = $.extend(defaultOptions, options);
		// console.log(options);
  
  	var imgObj = new Image();
  
    return this.each(function() {
    	// I like to keep track of what "this" is
      var container = this;
      
      // what is this, anyway?
      // console.log(container);
      // console.log($(container));
      
      $(container).find('img').each(function(i, el) {
				var $img = $(el);

				if (options.namePattern.test(el.src) || $img.hasClass(options.class)) {
		
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