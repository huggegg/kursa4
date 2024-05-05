document.getElementById("sendForm").addEventListener("click", function(){
    document.getElementById("modal").classList.remove('collapse')
})

document.getElementById("closeModal").addEventListener("click",function(){
    document.getElementById("modal").classList.add("collapse")
})