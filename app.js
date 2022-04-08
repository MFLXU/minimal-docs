// nav bar toggle 
let navBtn = document.getElementById("nav-btn")
let navBar = document.querySelector(".navbar")

navBtn.addEventListener("click", () => {
    navBar.classList.toggle("show-nav")
    if(navBtn.className ===  "fa-solid fa-bars"){
        navBtn.classList === "fa-solid fa-xmark"
    }
    else{
        navBtn.classList === 'fa-solid fa-bars'
    }
})