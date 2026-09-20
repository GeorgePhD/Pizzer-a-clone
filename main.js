

const login_btn = document.querySelector("#login_btn");
const popup_container_display_none = document.querySelector(".popup_container_display_none");
const popupCloseBtn = document.querySelector("#popup_close_btn");
const body = document.querySelector("body");
const slider = document.querySelector(".slider");


login_btn.addEventListener("click", () => {

    popup_container_display_none.style.display = "block"; 
    popup_container_display_none.style.transition = "600ms all ease-in-out";
    body.style.backgroundColor = "#969393";
})

popupCloseBtn.addEventListener("click", () => {
    popup_container_display_none.style.display = "none"
    body.style.backgroundColor = "";

})


let currentSlider = 0;

setInterval(() => {
    currentSlider++;

    if (currentSlider === 5) {
        currentSlider = 0;
    }

    slider.style.transform = `translateX(-${currentSlider * 20}%)`;

}, 3000);


