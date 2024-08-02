
const whiteThemeBtn = document.querySelector('.white-theme-js');
const darkThemeBtn = document.querySelector('.dark-theme-js');
const bodyDark = document.querySelector('.body-theme');


darkThemeBtn.addEventListener('click', () => {
	darkThemeBtn.classList.add('is-active');
	whiteThemeBtn.classList.add('is-active');
	bodyDark.classList.add('dark');

})

whiteThemeBtn.addEventListener('click', () => {
	darkThemeBtn.classList.remove('is-active');
	whiteThemeBtn.classList.remove('is-active');
	bodyDark.classList.remove('dark');
})
