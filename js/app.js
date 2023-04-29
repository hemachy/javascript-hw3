//*Image hover
//*img 1 & 2
let image=document.querySelector(`.img-one`)
function toggleImage(){
    image.src="./image/img2.png";
}
image.addEventListener("mouseenter",toggleImage);
function prevImage(){
    image.src="./image/img1.png";  
}
image.addEventListener("mouseout",prevImage);