// JavaScript Document
//main nav hover
(function ($) {
	$.fn.outerHTML = function () {
		return $(this).wrap('<div class=\"hover\"></div>').parent().html();
	}
})(jQuery);

$(document).ready(function () {

	function getLargestHeight(h1, h2, h3, h4) {
		var arr = new Array(4);

		arr[0] = h1;
		arr[1] = h2;
		arr[2] = h3;
		arr[3] = h4;

		var largest = arr.sort(function (a, b) { return a - b }).slice(-1);

		if (largest <= 0) {
			largest = "auto";
		}

		return largest;
	}

	function megaHoverOver() {

		var menuId = $(this).attr("id");
		var divId = "div#" + menuId + "Hover";

		if ($(this).find(".hover").length == 0) {
			if ($(document).find(divId).length != 0) {
				$(this).append($(document).find(divId).outerHTML());
			}
		}

		if (menuId.indexOf('products') >= 0) {
			if (typeof topProductsMenuPostHover == 'function') {
				topProductsMenuPostHover(menuId, divId, '#RichHtmlMenu-Layout');
			}
		}

		//$("div .sub").topurl.stop().fadeTo('fast', 1).show();
		$(this).find(".hover").stop().fadeTo('fast', 1).show();

		//Set Width
		$(this).find(".hover").css({ 'width': 978 });

		//Set Background Heights and parent container top padding
		var heightValue = getLargestHeight($(this).find("#nav-frame-one-r2").height(), $(this).find("#nav-frame-two-r2").height(), $(this).find("#nav-frame-three-r2").height(), $(this).find("#nav-frame-four-r2").height());
		$(this).find("#nav-frame-one-r2").css("height", heightValue);
		$(this).find("#nav-frame-two-r2").css("height", heightValue);
		$(this).find("#nav-frame-three-r2").css("height", heightValue);
		$(this).find("#nav-frame-four-r2").css("height", heightValue);

		heightValue = getLargestHeight($(this).find("#nav-frame-small-left-r3").height(), $(this).find("#nav-frame-small-center-r3").height(), $(this).find("#nav-frame-large-right-r3").height(), 0);
		$(this).find("#nav-frame-small-left-r3").css("height", heightValue);
		$(this).find("#nav-frame-small-center-r3").css("height", heightValue);
		$(this).find("#nav-frame-large-right-r3").css("height", heightValue);

		if (heightValue > 0)
			$(this).find("#nav-center-frame-r3").css("padding-top", "10px");

		heightValue = getLargestHeight($(this).find("#nav-frame-small-left-r4").height(), $(this).find("#nav-frame-large-center-r4").height(), $(this).find("#nav-frame-small-right-r4").height(), 0);
		$(this).find("#nav-frame-small-left-r4").css("height", heightValue);
		$(this).find("#nav-frame-large-center-r4").css("height", heightValue);
		$(this).find("#nav-frame-small-right-r4").css("height", heightValue);

		if (heightValue > 0)
			$(this).find("#nav-center-frame-r4").css("padding-top", "10px");

		heightValue = getLargestHeight($(this).find("#nav-frame-small-left-r5").height(), $(this).find("#nav-frame-large-right-r5").height(), 0, 0);
		$(this).find("#nav-frame-small-left-r5").css("height", heightValue);
		$(this).find("#nav-frame-large-right-r5").css("height", heightValue);

		if (heightValue > 0)
			$(this).find("#nav-center-frame-r5").css("padding-top", "10px");

		heightValue = getLargestHeight($(this).find("#nav-frame-large-left-r6").height(), $(this).find("#nav-frame-small-right-r6").height(), 0, 0);
		$(this).find("#nav-frame-large-left-r6").css("height", heightValue);
		$(this).find("#nav-frame-small-right-r6").css("height", heightValue);

		if (heightValue > 0)
			$(this).find("#nav-center-frame-r6").css("padding-top", "10px");

		heightValue = getLargestHeight($(this).find("#nav-frame-one-r7").height(), $(this).find("#nav-frame-two-r7").height(), $(this).find("#nav-frame-three-r7").height(), 0);
		$(this).find("#nav-frame-one-r7").css("height", heightValue);
		$(this).find("#nav-frame-two-r7").css("height", heightValue);
		$(this).find("#nav-frame-three-r7").css("height", heightValue);

		if (heightValue > 0)
			$(this).find("#nav-center-frame-r7").css("padding-top", "10px");
	}

	function megaHoverOut() {
		$(this).find(".hover").stop().fadeTo('fast', 0, function () {
			$(this).hide();
		});
	}

	var config = {
		sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
		interval: 100, // number = milliseconds for onMouseOver polling interval    
		over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
		timeout: 500, // number = milliseconds delay before onMouseOut    
		out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
	};

	$("ul#t-nav li .hover").css({ 'opacity': '0' });
	$("ul#t-nav li").hoverIntent(config);
});
