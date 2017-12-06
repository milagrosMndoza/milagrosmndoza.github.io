$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top,
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
// Mostramos y ocultamos toggle
	$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});
  // //Project hover animation 
  $('#portfolio .thumbnail').hover(function(){
    $(this).children(".cust-caption").slideDown();
  },
  function(){
    $(this).children(".cust-caption").fadeOut();
  });
});
  
 //Skills' animation
$(window).scroll(function(){
  jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},6000);
		});
});

$(document).ready();

