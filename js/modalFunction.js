



window.addEventListener('DOMContentLoaded', function() {   

//Time
function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      console.log(t);
      //algorithm Time
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');
    
      function updateClock() {
        var t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
        console.log(15);
      }
    
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
    
    /* var deadline="January 01 2022 00:00:00 GMT+0600"; //for Ukraine
    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer */
    const deadline = "2022-01-31";
    initializeClock('countdown', deadline);

    //Modal
    const modalTrigger = document. querySelectorAll('[data-modal]'),
            modal = document.querySelector(".modal"),
            modalCloseBtn = document.querySelector("[data-close]");


    function openModal() {
        // modal.classList.add("show");
        // modal.classList.remove("hide");
        modal.classList.toggle("show"); //with toggle
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }


    modalTrigger.forEach(btn => {
        btn.addEventListener("click", openModal);
    }); 


    function closeModal() {
        // modal.classList.add("hide");
        // modal.classList.remove("show");
            modal.classList.toggle("show");
        document.body.style.overflow = "";
    }

    modalCloseBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });


    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });


    const modalTimerId = setTimeout(openModal, 1000);

    function showModalByScroll() {

        if(window.pageYOffset + document.documentElement.clientHeight >= document.
            documentElement.scrollHeight -1) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll); 
        }
    }

    /* window.addEventListener("scroll", showModalByScroll); */
});


//animaiton snow 
$(document).ready(function() {
    $(".snow1").let_it_snow({
      speed: 0,
      interaction: true,
      size: 2,
      count: 200,
      opacity: 0,
      color: "#ffffff",
      windPower: 1,
      image: false 
    });
      
      var $snow = $(".flakes").find("svg");
      $(".snow2").let_it_snow({
      speed: 0,
      interaction: true,
      size: 6,
      count: 50,
      opacity: 0,
      color: "#ffffff",
      windPower: 0,
       image: "https://3.bp.blogspot.com/-LWSCSuSZ9qw/VLkSYiICCUI/AAAAAAADaAs/Exw-xb0znkg/s1600/hf_shimmer_flake20.png"
    });
    });
    
    // let it snow plugin from https://github.com/peachananr/let_it_snow
    !function(e){var t={speed:0,interaction:true,size:2,count:200,opacity:0,color:"#ffffff",windPower:0,image:false};e.fn.let_it_snow=function(n){function c(){u.clearRect(0,0,o.width,o.height);for(var t=0;t<a;t++){var n=s[t],i=f,p=l,d=100,v=n.x,m=n.y;var g=Math.sqrt((v-i)*(v-i)+(m-p)*(m-p)),y=v-i,b=m-p;if(g<d){var w=d/(g*g),E=(i-v)/g,S=(p-m)/g,x=w/2;n.velX-=x*E;n.velY-=x*S}else{n.velX*=.98;if(n.velY<=n.speed){n.velY=n.speed}switch(r.windPower){case false:n.velX+=Math.cos(n.step+=.05)*n.stepSize;break;case 0:n.velX+=Math.cos(n.step+=.05)*n.stepSize;break;default:n.velX+=.01+r.windPower/100}}var T=r.color;var N=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;var C=N.exec(T);var k=parseInt(C[1],16)+","+parseInt(C[2],16)+","+parseInt(C[3],16);n.y+=n.velY;n.x+=n.velX;if(n.y>=o.height||n.y<=0){h(n)}if(n.x>=o.width||n.x<=0){h(n)}if(r.image==false){u.fillStyle="rgba("+k+","+n.opacity+")";u.beginPath();u.arc(n.x,n.y,n.size,0,Math.PI*2);u.fill()}else{u.drawImage(e("img#lis_flake").get(0),n.x,n.y,n.size*2,n.size*2)}}requestAnimationFrame(c)}function h(e){if(r.windPower==false||r.windPower==0){e.x=Math.floor(Math.random()*o.width);e.y=0}else{if(r.windPower>0){var t=Array(Math.floor(Math.random()*o.width),0);var n=Array(0,Math.floor(Math.random()*o.height));var i=Array(t,n);var s=i[Math.floor(Math.random()*i.length)];e.x=s[0];e.y=s[1]}else{var t=Array(Math.floor(Math.random()*o.width),0);var n=Array(o.width,Math.floor(Math.random()*o.height));var i=Array(t,n);var s=i[Math.floor(Math.random()*i.length)];e.x=s[0];e.y=s[1]}}e.size=Math.random()*3+r.size;e.speed=Math.random()*1+r.speed;e.velY=e.speed;e.velX=0;e.opacity=Math.random()*.5+r.opacity}function p(){for(var e=0;e<a;e++){var t=Math.floor(Math.random()*o.width),n=Math.floor(Math.random()*o.height),i=Math.random()*3+r.size,u=Math.random()*1+r.speed,f=Math.random()*.5+r.opacity;s.push({speed:u,velY:u,velX:0,x:t,y:n,size:i,stepSize:Math.random()/30,step:0,angle:180,opacity:f})}c()}var r=e.extend({},t,n),i=e(this),s=[],o=i.get(0),u=o.getContext("2d"),a=r.count,f=-100,l=-100;o.width=window.innerWidth;o.height=window.innerHeight;(function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};window.requestAnimationFrame=e})();if(r.image!=false){e("<img src='"+r.image+"' style='display: none' id='lis_flake'>").prependTo("body")}p();e(window).resize(function(){if(this.resizeTO)clearTimeout(this.resizeTO);this.resizeTO=setTimeout(function(){el2=i.clone();el2.insertAfter(i);i.remove();el2.let_it_snow(r)},200)});if(r.interaction==true){o.addEventListener("mousemove",function(e){f=e.clientX,l=e.clientY})}}}(window.jQuery)