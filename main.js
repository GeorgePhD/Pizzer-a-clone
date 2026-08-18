

const login_btn = document.querySelector("#login_btn");
const popup_container_display_none = document.querySelector(".popup_container_display_none");
const popupCloseBtn = document.querySelector("#popup_close_btn");
 


login_btn.addEventListener("click", () => {

    popup_container_display_none.style.display = "block"; 
    popup_container_display_none.style.transition = "600ms all ease-in-out"; 
})

popupCloseBtn.addEventListener("click", () => {
    popup_container_display_none.style.display = "none"
    
})



















