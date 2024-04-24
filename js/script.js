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

