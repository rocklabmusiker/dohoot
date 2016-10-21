jQuery(document).ready(function($) {
	
	$(".top-bar__search svg").click(function() {

		if($(this).attr('data-click-state') == 0) {
			$(this).attr('data-click-state', 1);
			$('.top-bar__search input').animate({"width": "0", "padding": "0"}, 600);
		}

		else {
			$(this).attr('data-click-state', 0);
			$('.top-bar__search input').animate({"width": "200", "padding": "0 0 0 10"}, 600);	
		}
			
	});
	
});

