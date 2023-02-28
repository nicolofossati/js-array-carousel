/*

<div class="img-container show">
    <img src="img/01.webp">
</div>
            

*/

const imgArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
const sliderDom = document.querySelector('#slider');
let sliderString = "";

for(let i=0; i < imgArray.length; i++){
    if(i==0){
        sliderString += `<div class="img-container show"><img src="${imgArray[i]}"></div>`;
    } else {
        sliderString += `<div class="img-container"><img src="${imgArray[i]}"></div>`;
    }
}

sliderString += `<div id="up" class="arrow"><i class="fa-solid fa-angle-up"></i></div> <div id="down" class="arrow"><i class="fa-solid fa-angle-down"></i></div>`;
sliderDom.innerHTML = sliderString;