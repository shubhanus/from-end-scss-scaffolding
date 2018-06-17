// common variable
var windowHeight =  $(window).height(),
	windowWidth =  $(window).width();

// sidebar open & close function
$(".close-wrapper").addClass("hide");
// open function
$(".menu-icon").on("click",function() {
	$(".sidebar-wrapper").addClass("active");
	$(".close-wrapper").removeClass("hide");
});
// close function
$(".close-icon,.close-wrapper").on("click",function() {
	$(".sidebar-wrapper").removeClass("active");
	$(".close-wrapper").addClass("hide");
});


// window height 

$(".banner-section").css("height",windowHeight-280)

// onscroll add box shadow for header

$(window).scroll(function(){
	if($(window).scrollTop() > 0) {
		$(".header-section").addClass("box-shadow");
	}else if($(window).scrollTop() == 0){
		$(".header-section").removeClass("box-shadow");
	}
});

// banner slider function
$('.b-slider').click(function(){
	var menu = $(this).attr('data-section');
	$(".slider-content").addClass('hide');
	$('.'+ menu + '-section').removeClass('hide');
});

// service effect
