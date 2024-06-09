let SlideBtnLft = document.getElementById("slide-btn-left")
let SlideBtnRgt = document.getElementById("slide-btn-right")
let ImgItem = document.querySelectorAll(".image-item")
console.log(ImgItem.length - 1)

let startslide = 0
let endslide = (ImgItem.length - 1) * 100
SlideBtnLft.addEventListener("click", () => {
    if (startslide < 0) {
        startslide = startslide + 100;
    }

    ImgItem.forEach(element => {
        element.style.transform = `translateX(${startslide}%)`;
    })
})

SlideBtnRgt.addEventListener("click", () => {
    if (startslide >= -endslide + 100) {
        startslide = startslide - 100;
    }

    ImgItem.forEach(element => {
        element.style.transform = `translateX(${startslide}%)`;
    })
})

/********** sidebar navigation*/
const sideBarNavigationEl = document.getElementById("sidebar-container-navigation")
const sideBarOpenNavigationEl = document.getElementById("open-nav-slider")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")

sideBarOpenNavigationEl.addEventListener("click", () => {
    sideBarNavigationEl.classList.toggle("slider-show")
})

sidebarCloseNavigationEl.addEventListener("click", () => {
    sideBarNavigationEl.classList.toggle("slider-show")
})
