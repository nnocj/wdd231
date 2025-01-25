/*menu should show content only when the hamburger button is pressed.*/
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.head-nav');
const headerTitle = document.querySelector('.header-h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
   headerTitle.classList.toggle('hide');// to hide the title when the hamburger is open

   navigation.style.display == "contents";
});