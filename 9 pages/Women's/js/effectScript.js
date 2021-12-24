window.addEventListener("DOMContentLoaded", () => {
	let infoSearch = document.querySelector('.infoSearch'),
		menu_btn = document.querySelector('#menu-btn');

	if(getComputedStyle(menu_btn).display == "inline-block") {
		infoSearch.classList.add("hidden");
	}

	menu_btn.onclick = () => {
	    if(infoSearch.classList.contains("hidden")) {
	    	infoSearch.classList.remove("hidden");
	    	infoSearch.classList.add("activite");
	    }

	   else if(infoSearch.classList.contains("activite")) {
	   		infoSearch.classList.remove("activite");
	    	infoSearch.classList.add("hidden");
	   }
	}

	/* let searchForm = document.querySelector('.search-form');

	document.querySelector('#search-btn').onclick = () => {
	    searchForm.classList.toggle('active');
	    navbar.classList.remove('active');
	    cartItem.classList.remove('active');
	}

	let cartItem = document.querySelector('.cart-items-container');

	document.querySelector('#cart-btn').onclick = () => {
	    cartItem.classList.toggle('active');
	    navbar.classList.remove('active');
	    searchForm.classList.remove('active');
	}

	window.onscroll = () => {
	    navbar.classList.remove('active');
	    searchForm.classList.remove('active');
	    cartItem.classList.remove('active');
	} */
});