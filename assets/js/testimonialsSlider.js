const sliderFunc = ()=>{
    if(window.innerWidth <= 1024){
document.querySelector(".slide-first").remove()
new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween:20,
  navigation: {
    nextEl: ".reviewsNext",
    prevEl: ".reviewsPrev",
  },
  
});
}else{

new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".reviewsNext",
        prevEl: ".reviewsPrev",
    },
    
});
}
}
let positions = []
let positionNumber = 0
const slides = document.querySelectorAll(".swiper-slide")
const prevArrow = document.querySelectorAll(".arrow svg:nth-child(1)")
const nextArrow = document.querySelectorAll(".arrow svg:nth-child(2)")
const makeSlidePositions = ()=>{
    if(window.innerWidth <= 1024){
        positionNumber = window.innerWidth
    }
    else if(window.innerWidth <= 1250 && window.innerWidth > 1024 ){
        positionNumber = 790
    }
    else if(window.innerWidth <= 1920 && window.innerWidth > 1250){
        positionNumber = 941
    }
    console.log(positionNumber)
    positions = []
    
    let positioncount = 0
    for (let index = 0; index < slides.length - 2; index++) {
        positioncount += positionNumber
        const element = slides[index];
        if(index == 0){
            positions = [positioncount]
        }else{
            positions = [...positions, positioncount]
        }
    }
}
makeSlidePositions()
window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 1024){
        positionNumber = window.innerWidth
        makeSlidePositions(positionNumber)
    }
    else if(window.innerWidth <= 1250 && window.innerWidth > 1024 ){
        positionNumber = 790
        makeSlidePositions(positionNumber)
    }
    else if(window.innerWidth <= 1920 && window.innerWidth > 1250){
        positionNumber = 941
    }
})

let slideNumber = -1
const slide = (direction) => {
    console.log(positionNumber)
    const wrapper = document.querySelector(".swiper-wrapper");
    
    if (direction == "next") {
        if (slideNumber + 1 == slides.length - 3) return;
        slideNumber++;
        wrapper.scrollTo({
            left: positions[slideNumber],
            behavior: 'smooth'
        });
        console.log(positions[slideNumber]);
    } else if (direction == "prev") {
        if (slideNumber == -1) return;
        slideNumber--;
        wrapper.scrollTo({
            left: wrapper.scrollLeft - positionNumber,
            behavior: 'smooth'
        });
    }
};
