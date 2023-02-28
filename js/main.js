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

sliderString += `<div id="up" class="arrow hide"><i class="fa-solid fa-angle-up"></i></div> <div id="down" class="arrow"><i class="fa-solid fa-angle-down"></i></div>`;
sliderDom.innerHTML = sliderString;

const upArrowDom = document.querySelector('#up');
const downArrowDom = document.querySelector('#down');

const imgContainerDom = document.getElementsByClassName('img-container');

/* Posso modificare le classi a partire da imgContainerDom in questo modo:
    imgContainerDom[i].classList.add('show');
*/

let currentImage = 0;

upArrowDom.addEventListener('click', function(){
    if(currentImage > 0){
        imgContainerDom[currentImage].classList.remove('show');
        currentImage--;
        imgContainerDom[currentImage].classList.add('show');

        downArrowDom.classList.remove('hide');
        
        if(currentImage == 0){
            upArrowDom.classList.add('hide');
        }
    }
});

downArrowDom.addEventListener('click', function(){
    if(currentImage < imgContainerDom.length-1){
        imgContainerDom[currentImage].classList.remove('show');
        currentImage++;
        imgContainerDom[currentImage].classList.add('show');

        upArrowDom.classList.remove('hide');

        if(currentImage == imgContainerDom.length-1){
            downArrowDom.classList.add('hide');
        }
    }
});
