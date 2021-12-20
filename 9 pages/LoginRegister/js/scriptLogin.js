/* var fs = require('fs'); */

const signup = document.querySelector(".signup"),
         password = document.querySelector("#password"),
         firstName = document.getElementById("firstName"),
         secondName  = document.getElementById("secondName"),
         email = document.getElementById("email"),
         btnSignUp = document.getElementById("singUp"),
         pwd_format = document.querySelector(".pwd-format"),
         pwd_formatEmail = document.querySelector(".pwd-formatEmail");
        // lets define a password format
        // The password should contain around 8-15 alhpanumeric character

        const metaData = { //metaData like base data name first name ...
            firstName: {},
            lastName: {},
            emails: {},
            password: {}
        };

        let valFirstName, valSecondName, valEmail, valPass;
        //function give metaData
        const data = () => {
            firstName.addEventListener("blur", () => {
                 valFirstName = firstName.value;
              //  metaData.firstName = val;
                
            });


            secondName.addEventListener("blur", () => {
                 valSecondName = secondName.value;
            });

            email.addEventListener("blur", () => {
                if(!email.value.includes("@")) {
                        pwd_formatEmail.style.display = 'block';
                            pwd_formatEmail.style.color = 'red';
                }
                else  {
                    
                    valEmail = email.value;
                       pwd_format.style.display = 'none';
                }
                
                

            });
            email.addEventListener("focus", () => {
                let pwd_formatEmailStyle = getComputedStyle(pwd_formatEmail);
                if(pwd_formatEmailStyle.display == "block") {
                      pwd_formatEmail.style.display = 'none';
                        valEmail = email.value;
                } 


            });

            password.addEventListener("blur", () => {
                 valPass = password.value;
            });



            //check for all  I know  this is not good code 😜 😜
            btnSignUp.addEventListener("click",() => {

                if(valFirstName != undefined && valSecondName != undefined && valEmail != undefined && valPass != undefined && 
                    valFirstName != null && valSecondName != null && valEmail != null && valPass != null && 
                    valFirstName != "" && valSecondName != "" && valEmail != "" && valPass != "") {
                    metaData.firstName = valFirstName;
                    metaData.lastName = valSecondName;
                    metaData.emails = valEmail;
                    metaData.password = valPass;


                  var app = new Vue({
                    el: "#app",
                    data: {
                        message: "Hello World!",

                    }
                })

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
                                        ${metaData.firstName} ${metaData.lastName}
                                    </dd>
                                  </div>
                                  <div class="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-2xl normal-case font-medium text-gray-500">
                                      Email address
                                    </dt>
                                    <dd class="mt-1 text-2xl normal-case text-gray-900 sm:mt-0 sm:col-span-2">
                                        ${metaData.emails}
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


            });

               /* fs.writeFile("userData.json", JSON.stringify(metaData), function(err) {
                        if(err) throw err;
                        console.log("complete");
                    }
               ); */
        };


        data();

        console.log(metaData);

        //password functions
        const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

        password.addEventListener('focusin', () => {
            pwd_format.style.display = 'block';

            // now lets check the password entered by the user
            password.addEventListener('keyup', () => {
                if (passwordPattern.test(password.value)) {
                    password.style.borderColor = 'green' // if password pattern matches the border of password input will ne green
                    pwd_format.style.color = 'green'
                } else {
                    password.style.borderColor = 'red'
                    pwd_format.style.color = 'red'
                }
            })
        })

        password.addEventListener('focusout', () => {
            pwd_format.style.display = 'none';
        })


