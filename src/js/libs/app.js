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

/*placeholder*/
	 $('input,textarea').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
	   $(this).attr('placeholder','');
	 });
	 $('input,textarea').blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	 });

/*add class top menu*/
	  $(".nav__list li").click(function() {
    
      $(".nav__list li").removeClass('nav__item--active');
      $(this).addClass('nav__item--active');
    });


/*add class filter words*/
	  $(".filter__words a").click(function() {
    
      $(".filter__words a").removeClass('filter__words--active');
      $(this).addClass('filter__words--active');
    });


	/*mixitup*/
	$("#container").mixItUp();

	/*tabs*/
	$( function() {
    	$("#tabs").tabs();
  	});

  	/*add class icons offer*/
	  $(".offer__icon .offer-i").click(function() {
    
      $(".offer__icon .offer-i").removeClass('icon-active');
      $(this).addClass('icon-active');
    });
	
}); //ready end

