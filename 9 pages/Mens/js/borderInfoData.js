"use strict";

window.addEventListener("DOMContentLoaded",() => {

	const listData = document.querySelector("ol"),
				datas = listData.querySelectorAll("li"),
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


// 	datas.forEach((item, i) => {
// 		item.addEventListener("click", () => {
// 			const target = item.getAttribute("data-handle");
// 
// 		if(target === "coats") {
// 
// 			boxData.forEach((item,  i) => {
// 				if(item.getAttribute("data-info") !== "coats") {
// 					item.parentNode.removeChild(item);
// 					item.style.display = "none";
// 					item.style.setProperty("dispaly", "none", "important");
// 					console.log(item);
// 					box[0].style.display= "none";
// 				}
// 			});
// 
// 		}
// 
// 		});
// 	});

	showStyleA();
});
