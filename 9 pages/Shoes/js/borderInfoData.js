"use strict";

window.addEventListener("DOMContentLoaded",() => {

	const listData = document.querySelector("ol"),
				datas = listData.querySelectorAll("li"),
				 boxs = document.querySelectorAll(".box1"),
				tagA = document.querySelectorAll("#tagA");


	//function by leftBox
	const showStyleA = () => {
		tagA.forEach(item => {
			item.addEventListener("click", (event) =>{
				// event.preventDefault();
				if(!item.classList.contains("showStyle")) {
					item.classList.remove("hideStyle");
					item.classList.add("showStyle");
				}

				else if(item.classList.contains("showStyle"))  {
					item.classList.remove("showStyle");
					item.classList.add("hideStyle");
				}

			});
		});
	}

	showStyleA();
});
