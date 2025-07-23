
var typed = new Typed('#element', {
    strings: ["Frontend Developer", "Python Developer","Web Developer","Data Science"],
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