$(function () {
	var $window = $(window);
	var windowsize = $window.width();
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
	if (windowsize <= 900) {
		$('.adventage-inner').slick({
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slideToScroll: 1,
			mobileFirst: true,
			responsive: [{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slideToScroll: 2,
				},
			}]
		});
	}

})

$('.item__color *').click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active')
		$(this).css('border', 'none')
	} else {
		$(this).addClass('active')
		$(this).css('border', '3px solid #443C3A')
	}
});

$(function () {
	$('.another__tittle__wrapper').click(function (event) {
		$(this).toggleClass('active').children().next().slideToggle(300);
		if ($(this).hasClass('active')) {
			$('.another__tittle__wrapper.active').children().children('img').attr("src", "../images/downArrow.svg");
		}
		else {
			$('.another__tittle__img').attr("src", "../images/upArrow.svg");
		}
	});
});

$(function () {
	var $window = $(window);
	$('.footer__item-title').click(function (event) {
		var windowsize = $window.width();
		if (windowsize < 900) {
			$(this).toggleClass('active').next().slideToggle(300);
			$(this).toggleClass('footer__item-title__active');
		}
	});
	$('.menu__burger').on('click', function () {
		$('.menu').slideToggle();
		$('.container').css('padding', '0px')
	})
});

$('.catalog__item').click(function () {
	window.location.href = '../pages/good.html';
});