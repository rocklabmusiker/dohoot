
	
	$(".top-bar__search svg").click(function() {

		if($(this).attr('data-click-state') == 0) {
			$(this).attr('data-click-state', 1);
			$('.top-bar__search input').animate({"width": "0", "padding": "0"}, 600);
		}

		else {
			$(this).attr('data-click-state', 0);
			$('.top-bar__search input').animate({"width": "190", "padding": "0 0 0 10"}, 600);	
		}
			
	});

    // hide-loader
    setTimeout(function () {
        document.getElementsByTagName('body')[0].className += ' pre-loaded';
        console.log('main-js.injected');
    }, 1000);
    


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

    //lazy  
    $(function() {
        $("img.lazy").lazyload();
    });
    
  	/*add class icons offer*/
 

 	$(".offer__icon svg").css('border', '2px solid #9dacad');
 	$(".offer__icon .fixed").css('border', '2px solid #1baf5d');

	$(".offer__icon svg").click(function() {
	  $(".offer__icon .fixed").css('border', '2px solid #9dacad'); 	
	  $(".offer__icon svg").css('border', '2px solid #9dacad');
      $(this).css('border', '2px solid #1baf5d');
      
    });

    $(window).resize(function() {
    	if($(window).width() < 600) {
  			$(".offer__icon svg").css({width: "50px", height: "50px"});
    		$(".offer__icon-home").attr({
    			x: "-79",
    			y: "7",
    			width: "208",
    			height: "35"
    		});
    		$(".offer__icon-people").attr({
    			x: "2",
    			y: "3",
    			width: "45",
    			height: "45"
    		});
    		$(".offer__icon-education").attr({
    			x: "2",
    			y: "4",
    			width: "45",
    			height: "45"
    		});
    		$(".offer__icon-musik").attr({
    			x: "-103",
    			y: "11",
    			width: "253",
    			height: "30"
    		});
    		$(".offer__icon-train").attr({
    			x: "1",
    			y: "2",
    			width: "50",
    			height: "45"
    		});
    	} // ende if 600


  		else if($(window).width() < 900) {
  			$(".offer__icon svg").css({width: "80px", height: "80px"});
    		$(".offer__icon-home").attr({
    			x: "-75",
    			y: "13",
    			width: "229",
    			height: "50"
    		});
    		$(".offer__icon-people").attr({
    			x: "5",
    			y: "10",
    			width: "70",
    			height: "70"
    		});
    		$(".offer__icon-education").attr({
    			x: "7",
    			y: "10",
    			width: "65",
    			height: "65"
    		});
    		$(".offer__icon-musik").attr({
    			x: "-108",
    			y: "18",
    			width: "293",
    			height: "45"
    		});
    		$(".offer__icon-train").attr({
    			x: "10",
    			y: "13",
    			width: "60",
    			height: "55"
    		});
    	} // ende if 900


    	else {
    		$(".offer__icon svg").css({width: "100px", height: "100px"});
    		$(".offer__icon-home").attr({
    			x: "-70",
    			y: "18",
    			width: "240",
    			height: "60"		
    		});
    		$(".offer__icon-people").attr({
    			x: "10",
    			y: "10",
    			width: "80",
    			height: "80"
    		});
    		$(".offer__icon-education").attr({
    			x: "10",
    			y: "10",
    			width: "80",
    			height: "80"
    		});
    		$(".offer__icon-musik").attr({
    			x: "-108",
    			y: "16",
    			width: "309",
    			height: "60"
    		});
    		$(".offer__icon-train").attr({
    			x: "10",
    			y: "15",
    			width: "80",
    			height: "67"
    		});
    	}
	}); //(window).resize Ende 900

    /*selects*/
   function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('.dd') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-3').removeClass('active');
        });

      });


   /*selects 2*/
   function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('.ddd') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-3').removeClass('active');
        });

      });

	  /*selects 3*/
   function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('.new') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-3_new').removeClass('active');
        });

      });

	


