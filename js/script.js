document.getElementById("openModal").addEventListener("click", function(){
    document.getElementById("modal").classList.remove('collapse')
})

document.getElementById("closeModal").addEventListener("click",function(){
    document.getElementById("modal").classList.add("collapse")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal").classList.add("collapse")
    }
});

document.querySelector("#modal .bg-[#33333398]").addEventListener("click", event => {
    event._isClickWithInModal = true;
});

document.getElementById("modal").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.add("collapse");
})