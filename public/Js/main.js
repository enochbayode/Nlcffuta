// -------------Gallery slides
var gallery = function() {
	$('.carousel-gallery').owlCarousel({
	loop:true,
	margin:25,
	nav:false,
	pagination: false,
	autoplay: 0.05,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:4
		}
	}
	})
};
gallery();
// -------------Gallery slides-------Ends------------here---------


// Navar -----------navbar-------------------
    $('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();
// Navar -----------navbar-------------------Ends---------Here

var carousel = function() {
	$('.carousel-excos').owlCarousel({
		center: true,
		loop: true,
		items:1,
		pagination:true,
		margin: 20,
		stagePadding: 0,
		nav: true,
		navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
		responsive:{
			0:{
				items: 1
			},
			600:{
				items: 2
			},
			1000:{
				items: 3
			}
		}
	});

};
carousel();

// window.onload = function(){
// }

const typedTextSpan = document.querySelector("#text");

const textArray = [
	"James 1:5  If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
	"Rom 8:6  For to be carnally minded is death; but to be spiritually minded is life and peace. ", 
	"Php 2:3  Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves. ",
	"James 1:14  But every man is tempted, when he is drawn away of his own lust, and enticed. ",
	"Rom 8:24  For we are saved by hope: but hope that is seen is not hope: for what a man seeth, why doth he yet hope for? ", 
	"3John 1:2  Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth. "
];

const typingDelay = 85;
const erasingdelay = 75;
const newTextDelay = 900;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
	if (charIndex < textArray[textArrayIndex].length) {
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	}
	else{
		setTimeout(erase, newTextDelay)
	}
}

function erase(){
	if (charIndex > 0){
		typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
		charIndex--;
		setTimeout(erase, erasingdelay);
	}
	else{
		textArrayIndex++;
		if (textArrayIndex >= textArray.length) textArrayIndex=0;
		setTimeout(type, typingDelay);
	} 
}

document.addEventListener("DOMContentLoaded", function(){
	setTimeout(type, newTextDelay)
});


document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		document.querySelector(
		  "body").style.visibility = "hidden";
		document.querySelector(
		  "#loader").style.visibility = "visible";
	} else {
		document.querySelector(
		  "#loader").style.display = "none";
		document.querySelector(
		  "body").style.visibility = "visible";
	}
};




// contact us
// window.onload = function(){

	
// }

