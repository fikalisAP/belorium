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

$('.item__color *').click(function(){
    if($(this).hasClass('active')){
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