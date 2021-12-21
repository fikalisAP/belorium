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

$(function () {
	var $window = $(window);
	$('.footer__item-title').click(function (event) {
		var windowsize = $window.width();
		if (windowsize < 900) {
			$(this).toggleClass('active').next().slideToggle(300);
			$(this).toggleClass('footer__item-title__active');
		}
	});
	$('.menu__burger').on('click', function(){
        $('.menu').slideToggle();
    })
});