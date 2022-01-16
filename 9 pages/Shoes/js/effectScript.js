//window.addEventListener("DOMContentLoaded", () => {
	let infoSearch = document.querySelector('.infoSearch'),
		menu_btn = document.querySelector('#menu-btn'),
		icon = document.querySelector(".icon"),
		body = document.getElementsByTagName("body")[0];


	let w = screen.width; 
	let h = screen.height;

		menu_btn.onclick = () => {

			icon.classList.toggle("activite")
	}
