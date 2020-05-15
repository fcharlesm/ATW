(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';

		jQuery('nav ul').slicknav({
			label: ''
		});
		
		jQuery('.gallery a').each(function() {
			jQuery(this).attr({ 'data-lightbox':'galeria'});
		});
		
		lightbox.option({
			'wrapAround': true,
			'showImageNumberLabel' : false
		  });

		  jQuery('ul.slider').bxSlider({
			  auto: true,
			  autoControls: true,
			  mode: 'fade',
			  pager: false
		  });
		  jQuery('.single-tours header nav ul li:contains("Tours")').addClass('current_page_item');
		  jQuery('.single-post header nav ul li:contains("Consejos")').addClass('current_page_item');

		  
		
	});

	

	
	
})(jQuery, this);
