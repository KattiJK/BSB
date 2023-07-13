
document.querySelector('.header__burger').addEventListener('click', function() {
	this.classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('open');
})

// Табы

const question = document.querySelectorAll('.questions__content-item')

question.forEach((question) => {
	question.addEventListener('click', () => {
		question.classList.toggle('active')
	})
})


