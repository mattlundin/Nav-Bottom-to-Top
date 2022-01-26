//* NAV BOTTOM TO TOP
const nav = document.querySelector('nav');

let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos) {
		nav.style.top = '0';
		// nav.style.position = 'fixed'
	} else {
		nav.style.top = '0';
	}
	prevScrollPos = currentScrollPos;

	if (window.screen.width <= '500px') {
		nav.style.top = '0';
	}
});

//* MOBILE NAV
const navSlide = () => {
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list li');
	const burger = document.querySelector('.burger');
	const close = document.querySelector('.nav-list .close');
	const body = document.querySelector('body');

	burger.addEventListener('click', () => {
		navList.classList.add('open');

		//~ disable overscroll while nav is open
		if (navList.classList.contains('open')) {
			body.style.overflow = 'hidden';
		}
		//~ close when clicking on nav-link
		for (let i = 0; i < navItem.length; i++) {
			let closeNav = navItem[i];
			closeNav.addEventListener('click', () => {
				navList.classList.remove('open');

				body.style.overflow = 'scroll';
			});
		}
		//~ close nav-list
		close.addEventListener('click', () => {
			navList.classList.remove('open');

			body.style.overflow = 'scroll';
		});
	});
};
navSlide();

//~ mobile vh toolbar fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});
