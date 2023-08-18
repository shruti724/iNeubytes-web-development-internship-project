const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = ()=>{
    // alert("Hello");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener('click', ()=> toggleNavbar());

document.getElementById('btn').addEventListener('click', joke)

async function joke(){
    let config = {
        headers: {
            Accept: "application/json",

        },
    };
    let a = await fetch("https://icanhazdadjoke.com", config);
    let b = await a.json()
    document.getElementById("content").innerHTML = b.joke;
}

// about page js
