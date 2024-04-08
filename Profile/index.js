const imgPosition = document.querySelectorAll(".aspect img")
const imgContainer = document.querySelector('.aspect')
let imgNuber = imgPosition.length
let index = 0
// console.log(imgPosition)
imgPosition.forEach(function(image, index){
    image.style.left = index*100 + "%"
})
function imgSlide(){
    index++;
    console.log(index)
    if(index >= imgNuber){index = 0}
    imgContainer.style.left = "-" + index*100 + "%"
}
setInterval(imgSlide,5000)