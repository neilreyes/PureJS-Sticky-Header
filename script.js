var HeaderScroll = {
	config: {
		didScroll: false,
		lastScrollAmount: 0,
		headerHeight: null,
	},

	init: function(){
		window.addEventListener('scroll', this.handScrollEvent(event));
	},

	handScrollEvent: function(event){
		if( !this.didScroll ){
			this.didScroll = true;
			setTimeout(this.scrollPage,1000);
		}
	},

	scrollPage: function(){
		console.log(true);
	},

	setup: function( object ){
		var instance = Object.create(this);
		return config;
	}
}

var siteHeader = Object.create(HeaderScroll);
siteHeader.init();

console.log( siteHeader );











var onScrollAnimateHeader = function(){
	var didScroll = false;
	var lastScrollAmount = 0;
	// Get #main-header height
	var headerHeight = document.querySelector('header').offsetHeight + 50;
	var bodyEl = document.body;
	var className = 'has-scrolled';
	var dContainer = document.getElementById('debug');

	// Init debug
	dContainer.innerHTML = 'Scroll Y: 0';

	var init = function(){
		// Triggers a scroll event function scrollPage after 1s/1000 ms
		window.addEventListener('scroll',function(event){
			// Check if didScroll is not true
			if( !didScroll ){
				// Set didScroll to true
				didScroll = true;
				setTimeout( scrollPage, 1000);
			}
		}, false);
	}

	function scrollPage(){
		// Pass in the amount of window scroll Y axis
		var pageScrollY = scrollY();
		// Write Y axis
		dContainer.innerHTML = 'Scroll Y: ' + pageScrollY;

		// When scrolled down and are below the header, add a class .nav-up & .has-scrolled thus remove class .nav-dowm
		if( pageScrollY > lastScrollAmount && pageScrollY > headerHeight ){
			bodyEl.classList.remove('nav-down');
			bodyEl.classList.add('nav-up','has-scrolled');
		} else {
			// When scrolled up show nav menu
			if( pageScrollY + window.pageYOffset < document.documentElement.offsetHeight ){
				bodyEl.classList.remove('nav-up');
				bodyEl.classList.add('nav-down');

				// When page scroll is at the top remove has-scrolled class
				if( pageScrollY == 0 ){
					bodyEl.classList.remove('has-scrolled');
				}
			}
		}

		// Set didScroll to false & record page scroll to last scroll
		didScroll = false;
		lastScrollAmount = pageScrollY;
	}

	// Gets the scroll amount of the window
	function scrollY(){
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	obj = {
		init: init,
	}

	return obj.init();
}

onScrollAnimateHeader();