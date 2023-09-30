/* Author: 

*/

const sectionFirst=document.querySelector('.first_half');
const sectionSecond=document.querySelector('.second_half');

window.addEventListener('load',() => {

    sectionFirst.addEventListener('mouseenter', () => container.classList.add('hover-left'))
    sectionSecond.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
    
    sectionSecond.addEventListener('mouseenter', () => container.classList.add('hover-right'))
    sectionFirst.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
})






















