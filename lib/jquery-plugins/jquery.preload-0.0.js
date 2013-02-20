/*global jQuery, console */

/* Image preload script, see
 * http://stackoverflow.com/questions/476679/preloading-images-with-jquery
 *
 * EG:
 *     $(['foo.png', 'bar.png']).preload();
 */

(function ($) {
    'use strict';
    $.fn.preload = function () {
        this.each(function () {
            $('<img/>')[0].src = this;
        });
    };
}(jQuery));

