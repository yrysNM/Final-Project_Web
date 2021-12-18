window.addEventListener("DOMContentLoaded", () => {

	const boxs = document.querySelectorAll(".box1"),
		//	listChangeCoats = document.querySelector("[data-handle = 'coats']"),
		//	listChangeJakets = document.querySelector("[data-handle = 'jakets']"),
			listBtnChanges = document.querySelectorAll("#li"),
			tagA = document.querySelectorAll("#tagA"),
			clearAllElemnts = document.querySelectorAll('[data-clear = "clearAll"]');
		


	const metaData = {
		arrBoxs: [],
		objBoxs: {},
		arrListData: [],
		//objListBtn: {},
		changeobjBoxs: {},
		//changeobjHide:{},
		changeobjShow: {}
	}


	const funcClearAll = () => {
		clearAllElemnts.forEach(item => {
			item.addEventListener("click", () => {
				location.reload();
			});
		})
	};



	const changeBoxs = () => {

				boxs.forEach((Listboxs, j) => {
					metaData.objBoxs[j] = Listboxs;
					metaData.arrBoxs[j]  = Listboxs;

				})

				listBtnChanges.forEach((item, j )=> {
					 metaData.arrListData[j] = item.dataset.handle;
					// metaData.objListBtn[j] = item;
					metaData.changeobjShow[j] = tagA[j]

					item.addEventListener("click", () =>  {
						
						boxs.forEach((listBoxs, i) => {
							
						//	metaData.objBoxs[i].style.display = "block";
						

								if(metaData.arrBoxs[i].classList[1] == metaData.arrListData[j] && 
														tagA[j].classList.contains("showStyle")) {
										
									metaData.objBoxs[i].style.display = "block";
									metaData.changeobjBoxs[i] = metaData.objBoxs[i];
										metaData.changeobjShow[j] = tagA[j]
									//	metaData.changeobjHide[i] = getComputedStyle(metaData.objBoxs[i]).display;

								}

								else if(tagA[j].classList.contains("showStyle") && metaData.changeobjBoxs[i] != undefined)	{

								 	if(metaData.changeobjBoxs[i].classList[1] ==  metaData.arrListData[j] && tagA[j].classList.contains("showStyle")) {
								 	
											metaData.changeobjBoxs[i].style.display = "block";
											metaData.changeobjShow[j] = tagA[j]
										//	metaData.changeobjHide[i] = getComputedStyle(metaData.changeobjBoxs[i]).display;
									} 


								}

									
								

								else if(tagA[j].classList.contains("hideStyle") && metaData.changeobjBoxs[i] != undefined) {

									if(metaData.changeobjBoxs[i].classList[1] == metaData.arrListData[j] && 
										tagA[j].classList.contains("hideStyle")) {
									

											metaData.changeobjBoxs[i].style.display = "none";
											//metaData.changeobjHide[i] = getComputedStyle(metaData.changeobjBoxs[i]).display;
										

										} 
										else if(metaData.changeobjBoxs[i].classList[1] != metaData.arrListData[j])
										{
											//metaData.changeobjBoxs[i].style.display = "block";
											for(let k = 0;k < tagA.length; k++)	{
													if(tagA[k].classList.contains("showStyle")) {
														if(metaData.changeobjBoxs[i].classList[1] == metaData.arrListData[k]) {
														//	metaData.changeobjBoxs[i].style.display = "block";
																

														}
													
													} 
											}
										}

										if(metaData.changeobjShow[0].classList.contains("hideStyle") && metaData.changeobjShow[1].classList.contains("hideStyle") && 
															metaData.changeobjShow[2].classList.contains("hideStyle")) {
																/* for(let i = 0;  i < boxs.length; i++) {
																
																	 metaData.objBoxs[i].style.display = "block";
																	 break;
																		
																} */
											location.reload();

										}


								}

									else {

								 			 metaData.objBoxs[i].style.display = "none";	

								}	
												
													
						})

					});

													
													
							
				})

			console.log(metaData);

		
			
	};




changeBoxs();
funcClearAll();


});