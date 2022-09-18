//Select Elements
let mainImg = document.querySelector(".prod-img img");
let container = document.querySelector(".main-container");

//to change phone image and background on image click
function phonesImg (image ,col){
mainImg.src = image;
container.style.background = col;
}

