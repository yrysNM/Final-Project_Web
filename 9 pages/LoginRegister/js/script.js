const forms = document.querySelectorAll("form");

forms.forEach(item => {
	bindpostData(item);
});

/* const metaData = {

}; */


const postData = async (url, data) => {
	const res = await fetch(url, {
		method:  "POST",
            headers: {  
                "Content-type": "application/json"
            },
            body: data
	}); 

	return await res.json();
};


function bindpostData(form) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const  formData = new FormData(form);

		const json = JSON.stringify(Object.fromEntries(formData.entries()));

		postData("http://localhost:3000/requests", json)
		 	.then(data => {
		 		console.log(data);

		 	}).catch(() => {
		 		throw new Error("Error");
		 	}).finally(() => {
		 		form.reset();
		 	});
	});
}

function showMetaData(firstName, lastName, emails) {
	 Vue.component('data-user', {
                      template: `
                            <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-20">
                              <div class="px-4 py-5 sm:px-6">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                  User Information
                                </h3>
                                <p class="mt-1 normal-case max-w-2xl text-2xl text-gray-500">
                                  Personal details.
                                </p>
                              </div>
                              <div class="border-t border-gray-200">
                                <dl>
                                  <div class="bg-gray-50 px-4  py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-2xl font-medium normal-case text-gray-500">
                                      Full name
                                    </dt>
                                    <dd class="mt-1 text-2xl normal-case text-gray-900 sm:mt-0 sm:col-span-2">
                                        ${firstName} ${lastName}
                                    </dd>
                                  </div>
                                  <div class="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-2xl normal-case font-medium text-gray-500">
                                      Email address
                                    </dt>
                                    <dd class="mt-1 text-2xl normal-case text-gray-900 sm:mt-0 sm:col-span-2">
                                        ${emails}
                                    </dd>
                                  </div>

                               
                                </dl>
                              </div>
                            </div>
                      `
                    })


                  new Vue({
                  el: '#data-user',
                })
}