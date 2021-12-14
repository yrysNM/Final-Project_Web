window.addEventListener("DOMContentLoaded", () => {

	const boxs = document.querySelectorAll(".box1"),
			listChangeCoats = document.querySelector("[data-handle = 'coats']"),
			listChangeJakets = document.querySelector("[data-handle = 'jakets']"),
			listBtnChanges = document.querySelectorAll("#li"),
			tagA = document.querySelectorAll("#tagA"),
			app = document.getElementById("app");


const metaData = {
	arrBoxs: [],
	objBoxs: {},
	arrListData: [],
	objListBtn: {},
	changeobjBoxs: {},
	changeobjBoxsHide:{}
}



	const changeBoxs = () => {

				boxs.forEach((Listboxs, j) => {
					metaData.objBoxs[j] = Listboxs;
					metaData.arrBoxs[j]  = Listboxs;

				})

				listBtnChanges.forEach((item, j )=> {
					 metaData.arrListData[j] = item.dataset.handle;
					 metaData.objListBtn[j] = item;

					item.addEventListener("click", () =>  {
						
						boxs.forEach((listBoxs, i) => {
							
						//	metaData.objBoxs[i].style.display = "block";
						

								if(metaData.arrBoxs[i].classList[1] == metaData.arrListData[j] && 
														tagA[j].classList.contains("showStyle")) {
										
									//app.removeChild(metaData.objBoxs[i]);
									metaData.objBoxs[i].style.display = "block";
									metaData.changeobjBoxs[i] = metaData.objBoxs[i];
									//app.append(metaData.changeobjBoxs[i]);
									//	app.append(metaData.objBoxs[i]);


								}

// 								else if(metaData.arrBoxs[i].classList[1] != metaData.arrListData[j] && 
// 														tagA[j].classList.contains("showStyle")) {
// 										
// 									//app.removeChild(metaData.objBoxs[i]);
// 									//metaData.objBoxs[i].style.display = "none ";
// 									metaData.changeobjBoxs[i] = metaData.objBoxs[i];
// 									//app.append(metaData.changeobjBoxs[i]);
// 									//	app.append(metaData.objBoxs[i]);
// 
// 
// 								}

								else if(tagA[j].classList.contains("showStyle") && metaData.changeobjBoxs[i] != undefined)	{

								 	if(metaData.changeobjBoxs[i].classList[1] ==  metaData.arrListData[j] && 
								 		tagA[j].classList.contains("showStyle")) {
								 	
											metaData.objBoxs[i].style.display = "block";
								 	}
								 

									
								}

								else if(tagA[j].classList.contains("hideStyle") && metaData.changeobjBoxs[i] != undefined) {
									if(metaData.changeobjBoxs[i].classList[1] == metaData.arrListData[j] && 
										tagA[j].classList.contains("hideStyle")) {
									
										metaData.changeobjBoxs[i].style.display = "none";
										//metaData.changeobjBoxsHide[i] = metaData.objBoxs[i];
									
									}
									/* else if(metaData.changeobjBoxs[i].classList[1] != metaData.arrListData[j] && 
										tagA[j].classList.contains("hideStyle")) {
										metaData.changeobjBoxs[i].style.display = "block";
									} */
								}else {
								 	metaData.objBoxs[i].style.display = "none";
								}	
						})

					});
				})


			console.log(metaData);
	};

changeBoxs();















/*------------------------------------------------------------------------------------------------------------------------------------ */

	const changeCoats = () => {

			listChangeCoats.addEventListener("click", () => {

				boxs.forEach((item, i) => {
					if(!item.classList.contains("coats") &&  tagA[0].classList.contains("showStyle")) {
						
						//item.classList.remove("showBoxs");
						//item.classList.add("hideBoxs");
						item.style.display = "none";
					}

					if(tagA[0].classList.contains("hideStyle"))
					{
						item.style.display = "block";
						// item.classList.remove("hideBoxs");
						// item.classList.add("showBoxs");;
					}

				})

			});
	};


	

	const changeBoxsJackests = () => {

		listChangeJakets.addEventListener("click", () =>{
			boxs.forEach((item, i) => {
				

				 if(!item.classList.contains("jakets") && tagA[1].classList.contains("showStyle")) {
					// item.classList.remove("showBoxs");
					// item.classList.add("hideBoxs");
					item.style.display = "none";
				}

				

				if(tagA[1].classList.contains("hideStyle")) {
					item.style.display = "block";
					// item.classList.remove("hideBoxs");
					// item.classList.add("showBoxs");
				}

			})
		});
	};

	const changeBoxsJackestsCoats = () => {

		listChangeJakets.addEventListener("click", () =>{
			boxs.forEach((item, i) => {
				

				 if(!item.classList.contains("jakets") && !item.classList.contains("coats")  && 
				 		tagA[1].classList.contains("showStyle") &&  tagA[0].classList.contains("showStyle")) {

					// item.classList.remove("showBoxs");
					// item.classList.add("hideBoxs");
					item.style.display = "none";
				}

				

				if(tagA[1].classList.contains("hideStyle") && tagA[0].classList.contains("hideStyle")) {
					item.style.display = "block";
				}

			})
		});
	};
// 
//  	changeBoxsJackests();
//  
//  	changeCoats();
//  
//  	changeBoxsJackestsCoats();

});