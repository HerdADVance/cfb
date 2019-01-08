$(document).scroll(function() {
    
    var dist = $(document).scrollTop();
    var headerHeight = $('.header').outerHeight();
    
    if($('.header').hasClass('sticky')){
	    if(dist > 0){ // Remove top-bar from header
	    	$('.header').addClass('sticky-magic');
	    } else{ // Add top-bar to header
	    	$('.header').removeClass('sticky-magic');
	    }
	}
})