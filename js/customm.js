/* ==== Navbar Background color changed ==== */
const scrollY = window.pageYOffset

function scrollNav(){
    const nav = document.getElementById("nav")

    //Scroll 2 step navbar background will change color
    if(this.scrollY >= 200){
        nav.classList.remove("bg-dark")
        nav.classList.add("navbarcolor")
    }
    else{
        nav.classList.add("bg-dark")
        nav.classList.remove("navbarcolor")
    }
}
window.addEventListener("scroll", scrollNav)