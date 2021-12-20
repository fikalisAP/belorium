$(function () {
	$('.header__slider-inner').slick({
		// autoplay: true,
		// autoplaySpeed: 2000,
		// arrows: false,
		draggable: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		fade: true,
		speed: 2000,
		infinite: true,
		cssEase: 'ease-in-out',
		touchThreshold: 100
	});
})