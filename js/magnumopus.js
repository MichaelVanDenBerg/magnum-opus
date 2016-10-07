/**
 * Magnum_Opus.js
 *
 * Some custom scripts for this theme.
 */
( function( $ ) {

	// Check distance to top and display back-to-top.
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$( '.back-to-top' ).addClass( 'show-back-to-top' );
		} else {
			$( '.back-to-top' ).removeClass( 'show-back-to-top' );
		}
	});

	// Click event to scroll to top.
	$( '.back-to-top, .search-toggle' ).click(function(){
		$( 'html, body' ).animate({scrollTop : 0},800);
		return false;
	});

	// Open hidden header to reveal mobile menu.
	$( '.menu-toggle' ).on( 'click' , function() {
		var open   = $(this).data( 'open' ),
			easing = open ? 'swing' : 'easeOutBounce',
			time   = open ? 1000 : 2000;

		$( '#hidden-header' )[open ? 'slideUp' : 'slideDown']( time, easing);

		$(this).data('open', !open);

		$( '.menu-toggle' ).toggleClass( 'menu-toggled' );

		// Change aria attritute.
		if ( $( this ).hasClass( 'menu-toggled' ) ) {
			$( '.menu-toggle' ).attr( 'aria-expanded' , 'true' );
		}
		else {
			$( '.menu-toggle' ).attr( 'aria-expanded' , 'false' );
		}
	});

	// Open hidden header to reveal desktop search.
	$( '#search-toggle a' ).on( 'click' , function() {
		var open   = $(this).data( 'open' ),
			easing = open ? 'swing' : 'easeOutBounce',
			time   = open ? 700 : 1500;

		$( '#hidden-header' )[open ? 'slideUp' : 'slideDown']( time, easing);

		$(this).data('open', !open);
	});

	// Add a focus class to sub menu items with children.
	$( '.menu-item-has-children' ).on( 'focusin focusout', function() {
		$( this ).toggleClass( 'focus' );
	});

	// Open hidden filter to reveal filter items (for Isotope).
	$( '.filter-toggle' ).click(function() {
		$( '#hidden-filter' ).slideToggle( 700, 'swing' );
		$( this ).toggleClass( 'filter-toggled' );
	});

	// Initialize Isotope.
	$( window ).load( function() {

		// Check for right to left support
		var rtl = $( 'body' ).hasClass( 'rtl' ) ? false : true;
		
		// Portfolio filtering
		var $container = $( '.portfolio-wrapper' );

		$container.isotope( {
			filter: '*',
			itemSelector: '.portfolio-item',
			layoutMode: 'fitRows',
			resizable: true,
			percentPosition: true,
			isOriginLeft: rtl,
			transformsEnabled: rtl,
			fitRows: {
				gutter: '.gutter-sizer'
			}
		} );

		// Filter items when filter link is clicked
		$( '.portfolio-filter li' ).click( function(){
			var selector = $( this ).attr( 'data-filter' );
				$container.isotope( { 
					filter: selector,
				} );
			$( '.portfolio-filter li' ).removeClass( 'active' );
			$( this ).addClass( 'active' );

		return false;
		} );

		window.dispatchEvent(new Event('resize'));
	} );

	// Remove empty <p> tags.
	// See: http://stackoverflow.com/questions/27781798/wordpress-retain-formatting-when-calling-extended-content#comment43990361_27782619
	// This seems to be the easiest solution. Remove this function if this ever gets fixed.
	$( 'p' ).each( function() {
		var $this = $( this );
		if ( $this.html().replace( /\s|&nbsp;/g, '' ).length === 0 ) {
			$this.remove();
		}
	});

})( jQuery );