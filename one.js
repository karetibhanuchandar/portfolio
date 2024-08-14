document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('.bar');
    const nav = document.querySelector('.links');
    
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});