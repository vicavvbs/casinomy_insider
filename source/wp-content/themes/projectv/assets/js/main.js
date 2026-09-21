jQuery(document).ready(function($) {
		
	$('.mobile-menu-icon').on('click', function(){
		$('.mobile-menu-overlay').addClass('active');
	});

	$('.mobile-menu-close-button').on('click', function(){
		$('.mobile-menu-overlay').removeClass('active');
	});
	
});