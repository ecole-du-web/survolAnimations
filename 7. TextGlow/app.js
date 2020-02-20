const txt = document.querySelector('.txt');

txt.addEventListener('mouseenter', () => {
    txt.classList.add('anim');
})
txt.addEventListener('mouseleave', () => {
    txt.classList.remove('anim');
})