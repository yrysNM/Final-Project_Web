window.addEventListener("DOMContentLoaded", () => {

	const boxs = document.querySelectorAll(".box1"),
			listBtnChanges = document.querySelectorAll("#li"),
			tagA = document.querySelectorAll("#tagA"),
			clearAllElemnts = document.querySelectorAll('[data-clear = "clearAll"]'),
			listBtnDes = document.querySelectorAll("#des");
		


	const metaData = {
		arrBoxs: [],
		objBoxs: {},
		arrListData: [],
		changeobjBoxs: {},
		changeobjShow: {},
		arrListDesData: []
	}


	const funcClearAll = () => {
		clearAllElemnts.forEach(item => {
			item.addEventListener("click", () => {
				location.reload();
			});
		})
	};


	const changeDesBoxs = () => {
		listBtnDes.forEach((item, i) => {
			metaData.arrListDesData[i] = item.dataset.designers;

			/* item.addEventListener("click", () => {
				boxs.forEach((listBoxs, j) => {
					
					if(metaData.arrBoxs[j].classList[2] == metaData.arrListDesData[i] && tagA[i].classList.contains()) {
						metaData.objBoxs[j].style.display = 'block';
							metaData.changeobjBoxs[i] = metaData.objBoxs[i];
					}else {
							metaData.objBoxs[j].style.display = 'none';

					}

				}) 
			}); */
		})
	};


	const changeBoxs = () => {

				boxs.forEach((Listboxs, j) => {
					metaData.objBoxs[j] = Listboxs;
					metaData.arrBoxs[j]  = Listboxs;

				})

				listBtnChanges.forEach((item, j )=> {
					 metaData.arrListData[j] = item.dataset.handle;
					metaData.changeobjShow[j] = tagA[j];


					item.addEventListener("click", () =>  {
						
						boxs.forEach((listBoxs, i) => {
							

						

								if(metaData.arrBoxs[i].classList[1] == metaData.arrListData[j] && 
														tagA[j].classList.contains("showStyle")) {
										
									metaData.objBoxs[i].style.display = "block";
									metaData.changeobjBoxs[i] = metaData.objBoxs[i];
										metaData.changeobjShow[j] = tagA[j]
								

								}

								else if(tagA[j].classList.contains("showStyle") && metaData.changeobjBoxs[i] != undefined)	{

								 	if(metaData.changeobjBoxs[i].classList[1] ==  metaData.arrListData[j] && tagA[j].classList.contains("showStyle")) {
								 	
											metaData.changeobjBoxs[i].style.display = "block";
											metaData.changeobjShow[j] = tagA[j]
									
									} 


								}

									
								

								else if(tagA[j].classList.contains("hideStyle") && metaData.changeobjBoxs[i] != undefined) {

									if(metaData.changeobjBoxs[i].classList[1] == metaData.arrListData[j] && 
										tagA[j].classList.contains("hideStyle")) {
									

											metaData.changeobjBoxs[i].style.display = "none";
										
										

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
															metaData.changeobjShow[2].classList.contains("hideStyle") && metaData.changeobjShow[3].classList.contains("hideStyle") && 
															metaData.changeobjShow[4].classList.contains("hideStyle")) {
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
	changeDesBoxs();


});