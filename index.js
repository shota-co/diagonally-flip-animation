import './style';

// var body = document.getElementsByClassName('jsc-body');
// console.log(body);

// body[0].classList.add('is-loaded');

function transitionPage() {
	var $body = $('.jsc-body');
	$body.addClass('is-loaded');

	$('a[href]:not([href*="#"]):not([target]):not([href^="tel:"]):not([href^="mailto:"])').on('click', function(e) {
		e.preventDefault();
		var url = $(e.currentTarget).attr('href');
		if (url !== '') {
			$body.addClass('is-trans');
			setTimeout(function() {
				window.location = url;
			}, 1300);
		}
		return false;
	});
}

transitionPage();
