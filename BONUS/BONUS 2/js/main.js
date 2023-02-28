const imgArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
const sliderDom = document.querySelector('#slider');
let sliderString = "";
let thumbnailsStringImg = "";

for(let i=0; i < imgArray.length; i++){
    if(i==0){
        sliderString += `<div class="img-container show"><img src="${imgArray[i]}"></div>`;
    } else {
        sliderString += `<div class="img-container"><img src="${imgArray[i]}"></div>`;
    }

    thumbnailsStringImg +=  `<div class="thumb-img"><div class="border-container"></div><img class="filter-img" src="${imgArray[i]}"></div>`
}

thumbnailsStringImg = "<div class=\"img-thumb-container\">"+thumbnailsStringImg+"</div>";


sliderString += `<div class="container-thumbnails">
                    <div class="thumb-contents">
                        ${thumbnailsStringImg}
                        <div id="up" class="arrow"><i class="fa-solid fa-angle-up"></i></div>
                        <div id="down" class="arrow"><i class="fa-solid fa-angle-down"></i></div>
                    </div>
                </div>`;
sliderDom.innerHTML = sliderString;

const upArrowDom = document.querySelector('#up');
const downArrowDom = document.querySelector('#down');

const imgContainerDom = document.getElementsByClassName('img-container');
const imgThumbContDom = document.getElementsByClassName('thumb-img');

/* Posso modificare le classi a partire da imgContainerDom in questo modo:
    imgContainerDom[i].classList.add('className');
*/

let currentImage = 0;

upArrowDom.addEventListener('click', function(){
    imgContainerDom[currentImage].classList.remove('show');
    if(currentImage > 0){
        currentImage--;
    } else {
        currentImage = imgContainerDom.length-1;
    }
    imgContainerDom[currentImage].classList.add('show');


});

downArrowDom.addEventListener('click', function(){
    imgContainerDom[currentImage].classList.remove('show');
    if(currentImage < imgContainerDom.length-1){
        currentImage++;
    } else {
        currentImage = 0;
    }
    imgContainerDom[currentImage].classList.add('show');
});
