const dataLoader = document.querySelector('.loader')

//loader
window.addEventListener('load', () => {
    setTimeout(() => {
        dataLoader.style.display = 'none'
    }, 1000);
})