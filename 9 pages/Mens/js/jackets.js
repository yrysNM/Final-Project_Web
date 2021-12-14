window.addEventListener("DOMContentLoaded", () => {

	const boxs = document.querySelectorAll(".box1"),
			listChange = document.querySelector("[data-handle = 'coats']"),
			tagA = document.querySelectorAll("#tagA");


	const changeBoxs = () => {

		listChange.addEventListener("click", () =>{
			boxs.forEach((item, i) => {
				

				 if(!item.classList.contains("jocket") && tagA[1].classList.contains("showStyle")) {
					item.classList.remove("showBoxs");
					item.classList.add("hideBoxs");
				}

				

				if(tagA[1].classList.contains("hideStyle")) {
					item.classList.remove("hideBoxs");
					item.classList.add("showBoxs");
				}

			});
		});
	};

	changeBoxs();

});