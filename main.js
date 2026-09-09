var typed = new Typed('#element', {
    strings: ["AI/ML Engineer", "Python Developer","Data Analyst","Data Scientist"],
    typeSpeed: 50,
    backSpeed : 10,
    backDelay : 1000,
    loop:true
});



// ---------------------disable right click and text Selection----------------------------

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
})
document.addEventListener('selectstart',(e)=>{
    e.preventDefault();
})

// ---------------------mobile nav toggle (hamburger menu)----------------------------

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if(menuIcon && navbar){
    menuIcon.addEventListener('click', ()=>{
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    });

    // close the menu once a link is tapped
    document.querySelectorAll('.navbar a').forEach((link)=>{
        link.addEventListener('click', ()=>{
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });
}