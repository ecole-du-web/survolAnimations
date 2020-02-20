const btn1 = document.querySelector('.box1');
const btn2 = document.querySelector('.box2');
const btn3 = document.querySelector('.box3');

btn1.addEventListener('mouseenter', () => {
    btn2.classList.add('flou');
    btn3.classList.add('flou');
})
btn1.addEventListener('mouseleave', () => {
    btn2.classList.remove('flou');
    btn3.classList.remove('flou');
})

btn2.addEventListener('mouseenter', () => {
    btn1.classList.add('flou');
    btn3.classList.add('flou');
})
btn2.addEventListener('mouseleave', () => {
    btn1.classList.remove('flou');
    btn3.classList.remove('flou');
})

btn3.addEventListener('mouseenter', () => {
    btn1.classList.add('flou');
    btn2.classList.add('flou');
})
btn3.addEventListener('mouseleave', () => {
    btn1.classList.remove('flou');
    btn2.classList.remove('flou');
})