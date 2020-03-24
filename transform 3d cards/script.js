let wrap = document.querySelector(".wrap");
let cards = document.querySelectorAll(".card");
cards.forEach(item => {
   item.addEventListener("click", fullscreen); 
});
function fullscreen(){
    remove();
    this.classList.toggle("card_active");
    wrap.classList.toggle("wrap_active");
}
function remove(){
    cards.forEach(elem => {
        elem.classList.toggle("card_rm");
    });
}