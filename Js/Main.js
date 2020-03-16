let cat = document.querySelector('.micro_cube');
let restart = document.querySelector('#restart');
let zone = document.querySelector('#zone');
let footer = document.querySelector('#footer');
let createp = document.createElement('p');
let createpS = document.createElement('p');
let stop = document.querySelector('#stop');
let record = document.querySelector('#record');
let play = document.querySelector('#play');
let track = document.createElement('div');
let main = document.querySelector('main');
let info = document.querySelectorAll('.info');

var val = 0;
var forv = 0;
let jump = 0;
let jumpF = 0;

 var arrY = [];
 var arrX = [];

document.addEventListener('keydown', function start(e) {
     switch(e.keyCode){
       case 40:
       if (forv>=0) {
        forv == 0;
        zone.style.opacity= "1";
      } else{forv += 180;jumpF-=180;zone.style.opacity= "0";}
       break;

       case 39:
        if (val>=360) {
         val == 360;
         zone.style.opacity= "1";
       } else{val += 180; jump+=180;zone.style.opacity= "0";}
       break;

       case 38:
       if (forv<=-1400) {
        forv == 180;
        zone.style.opacity= "1";
      } else{forv -= 180; jumpF+=180;zone.style.opacity= "0";}
       break;

       case 37:
       if (val<=-360) {
        val == -360;
        zone.style.opacity= "1";
      } else{val -= 180; jump-=180;zone.style.opacity= "0";}
       break;
     }

     footer.style.bottom = "0";
     footer.appendChild(createp);
     footer.appendChild(createpS);
     createp.innerHTML = val;
     createpS.innerHTML = forv;
     arrX.push(val);
     arrY.push(forv);
     track.remove();
      cat.style.transform = "rotateX(85deg) translateX("+ val +"px) translateY("+ forv +"px) rotateY("+ jump +"deg) rotateX("+ jumpF +"deg)";
   });


   record.addEventListener('click', () => {
     record.style.animation = "recording 2s infinite ease-in-out";
     stop.style.opacity = "1";
     stop.style.pointerEvents= "all";
     arrX = [];
     arrY = [];


     document.addEventListener('keydown', function start(e) {
       var track = document.createElement('div');
       main.appendChild(track);
       track.className= 'createDiv';
       track.style.display = "block";
       switch(e.keyCode){
       case 40:
       main.appendChild(track);

       case 39:
       main.appendChild(track);

       case 38:
       main.appendChild(track);

       case 37:
       main.appendChild(track);

     }
   track.style.transform = "rotateX(85deg) translateX("+ val +"px) translateY("+ forv +"px)";
  })
    });







   stop.addEventListener('click', () => {
    val = arrX[0];
    forv = arrY[0];
    cat.style.transform = "rotateX(85deg) translateX("+ val +"px) translateY("+ forv +"px) rotateY("+ jump +"deg) rotateX("+ jumpF +"deg)";
    record.style.animation = "none";
    record.style.opacity = "0.1";
    record.style.pointerEvents= "none";
    stop.style.opacity = "0.1";
    stop.style.pointerEvents= "none";
    play.style.opacity = "1";
    play.style.pointerEvents= "all";
   });




   play.addEventListener('click',()=> {
     for (var i = 0; i < arrX.length; i++) {
         val = arrX[i];
         forv = arrY[i];
         console.log(arrX[i]);
         cat.style.transform = "rotateX(85deg) translateX("+ val +"px) translateY("+ forv +"px) rotateY("+ jump +"deg) rotateX("+ jumpF +"deg)";
       }
       play.style.opacity = "0.1";
       play.style.pointerEvents= "none";
       record.style.opacity = "1";
       record.style.pointerEvents= "all";
       info[0].innerHTML = " Стартовые значения "+ arrX[0] + "__" + arrY[0];
       info[1].innerHTML = " Конечные значения "+ val + "__" + forv;
       info[2].innerHTML = " Всего шагов: "+ arrX.length;
    });




   restart.addEventListener('click', () => {
     val = 0;
     forv = 0;
     jump = 0;
     jumpF = 0;
     cat.style.transform = "rotateX(85deg) translateX("+ val +"px) translateY("+ forv +"px) rotateY("+ jump +"deg) rotateX("+ jumpF +"deg)";
     end.style.display = "none";
     stop.style.opacity = "0";
     stop.style.pointerEvents= "none";
     arrY = [0];
     arrX = [0];
   })
