// --- Logo link --------------------------------------------------------//
const headerLogoConatiner = document.querySelector('.header__logo-container');

headerLogoConatiner.addEventListener('click', () => {
	location.href = 'index.html';
});




//--- Back to Top Button ----------------------------------------------//

document.addEventListener('DOMContentLoaded', function () {
	// Show button when user scrolls down
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById('backToTopBtn').style.display = 'block';
		} else {
			document.getElementById('backToTopBtn').style.display = 'none';
		}
	}

	// Smooth scroll to the top when the button is clicked
	document.getElementById('backToTopBtn').addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
});

//----- Mobile Footer Menu ----------------------------------------------//

document.addEventListener('DOMContentLoaded', function () {
	const headings = document.querySelectorAll('.footer__container-mobile-menu-h5');
	headings.forEach(heading => {
		heading.addEventListener('click', function () {
			this.nextElementSibling.classList.toggle('visible');
		});
	});
});

document.querySelectorAll('.footer__container-mobile-menu-h5').forEach(function (item) {
	item.addEventListener('click', function () {
		if (item.classList.contains('active')) {
			item.classList.remove('active');
		} else {
			document.querySelectorAll('.footer__container-mobile-menu-h5').forEach(function (otherItem) {
				otherItem.classList.remove('active');
			});
			item.classList.add('active');
		}
	});
});
