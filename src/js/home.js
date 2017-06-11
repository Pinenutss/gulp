$(function(){
   var mySwiper = new Swiper ('#js_swiper_1 .swiper-container', {
				direction: 'horizontal',
				pagination: '#swiper-pagination_1',
				slidesPerView: 'auto',
				paginationClickable: true,
				spaceBetween: 5,
				loop:true,
				autoplay : 3000,
				speed:900,
				prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
			});
})
