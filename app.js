// add a function to remove the preloader

window.addEventListener('load',()=>{
    const preload = document.querySelector('.preload');
    preload.classList.add("preload-finish");
});