/* Author: 

*/

const sectionFirst=document.querySelector('.first_half');
const sectionSecond=document.querySelector('.second_half');
const wrapperSection=document.querySelector('.wrapper')

window.addEventListener('load',() => {

      sectionFirst.addEventListener('mouseenter', () => {
                 sectionFirst.style.width='70%';
                 sectionSecond.style.width='30%';
      })
      sectionSecond.addEventListener('mouseenter', () => {
        sectionSecond.style.width='70%';
        sectionFirst.style.width='30%';
})

sectionFirst.addEventListener('mouseleave', () => {
    sectionFirst.style.width='50%';
    sectionSecond.style.width='50%';
})
    // left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
    // left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
    
    // right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
    // right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
   
})






















