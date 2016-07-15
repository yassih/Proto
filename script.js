$( document ).ready(function() {

	$('.panel-body p').hover(function(){
   		// $(this).toggleClass('hover');
   });

   $('.panel-body p').click(function(){
   		// $(this).siblings.removeClass('selected');

   		$('.panel-body p').removeClass('selected');
   		$(this).addClass('selected');
   });

   $('.panel-footer p').click(function(){
   	// $(this).fadeOut();

   });

   var owl = $("#owl-demo");
 
   owl.owlCarousel({
   	items: 1,
   	navigation: true
   });
 
  	// Custom Navigation Events
  	$('.next').click(function(){
    owl.trigger('next.owl.carousel');
  	})

  	$('.prev').click(function(){
    owl.trigger('owl.prev');
  	})
   
});
