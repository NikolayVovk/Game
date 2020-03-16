let cat = document.querySelector('.micro_cube');
let restart = document.querySelector('#restart');
let life = document.querySelector('#life');
let end = document.querySelector('.end');
let zone = document.querySelector('#zone');

let trapA, trapB, trapC, trapD, trapE, trapF;
trapA = document.querySelector('.a');
trapB = document.querySelector('.b');
trapC = document.querySelector('.c');
trapD = document.querySelector('.d');
trapE = document.querySelector('.e');


let val = 0;
let forv = 0;
let jump = 0;
let jumpF = 0;


document.addEventListener('keydown', (e) => {
     switch(e.keyCode){
       case 40:
       if (forv>=0) {
        forv == 0;
      } else{forv += 180;jumpF+=180}
       break;

       case 39:
        if (val>=360) {
         val == 360;
       } else{val += 180; jump+=180;}
       break;

       case 38:
       if (forv<=-1000) {
        forv == 180;
      } else{forv -= 180; jumpF-=180}
       break;

       case 37:
       if (val<=-360) {
        val == -360;
      } else{val -= 180; jump-=180;}
       break;
     }

     cat.style.transform = "rotateX(85deg) translateX("+ val +"px) translateY("+ forv +"px) rotateY("+ jump +"deg) rotateX("+ jumpF +"deg)";
   });

   restart.addEventListener('click', () => {
     val = 0;
     forv = 0;
     jump = 0;
     jumpF = 0;
     cat.style.transform = "rotateX(85deg) translateX("+ val +"px) translateY("+ forv +"px) rotateY("+ jump +"deg) rotateX("+ jumpF +"deg)";
     countlife = 800;
     life.style.width = countlife + "px";
     end.style.display = "none";
   })

  let countlife = 800;



  let sayHi = () => {
      countlife == 800;
       forv += 30;
       cat.style.transform = "rotateX(85deg) translateX("+ val +"px) translateY("+ forv +"px) rotateY("+ jump +"deg) rotateX("+ jumpF +"deg)" ;
       colorA = window.getComputedStyle(trapA).top;
       colorB = window.getComputedStyle(trapB).top;
       colorC = window.getComputedStyle(trapC).top;
       colorD = window.getComputedStyle(trapD).top;
       colorE = window.getComputedStyle(trapE).top;
       let numbA = Math.round(parseInt(colorA));
       let numbB = Math.round(parseInt(colorB));
       let numbC = Math.round(parseInt(colorC));
       let numbD = Math.round(parseInt(colorD));
       let numbE = Math.round(parseInt(colorE));
       if (val==-360 && numbA >= 800 && numbA <= 1600) {
         countlife -= 50;
         trapA.style.background = "#FF5700";
         life.style.width = countlife + "px";
       }else if (forv >= 240) {
         countlife -= 50;
         life.style.width = countlife + "px";
         zone.style.opacity = "1";
       }
       else if (val==-180 && numbB >= 800 && numbB <= 1600) {
         countlife -= 50;
         trapB.style.background = "#FF5700";
         life.style.width = countlife + "px";
       } else if (val==0 && numbC >= 800 && numbC <= 1600) {
         countlife -= 50;
         trapC.style.background = "#FF5700";
         life.style.width = countlife + "px";
       }else if (val==180 && numbD >= 800 && numbD <= 1600) {
         countlife -= 50;
         trapD.style.background = "#FF5700";
         life.style.width = countlife + "px";
       }else if (val==360 && numbE >= 800 && numbE <= 1600) {
         countlife -= 50;
         trapE.style.background = "#FF5700";
         life.style.width = countlife + "px";
       }else {
         trapA.style.background = "#14161E";
         trapB.style.background = "#14161E";
         trapC.style.background = "#14161E";
         trapD.style.background = "#14161E";
         trapE.style.background = "#14161E";
         zone.style.opacity = "0";
       };
       if (countlife == 0) {
         lol();
       }
}
     setInterval(sayHi, 100);


     function lol (){
       end.style.display = "flex";
     }
