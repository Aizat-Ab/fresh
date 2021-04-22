const raitingItemsList = document.querySelectorAll('.raiting__item');
const raitingItemsArray = Array.prototype.slice.call(raitingItemsList);


const tabs = document.querySelectorAll('.tab');
const box = document.querySelectorAll('.box');

console.log(box);

tabs.forEach ((item, i) => {
    box.forEach(el => el.classList.remove('is-active'))
    box[0].classList.add('is-active');
    item.addEventListener('click', () => {
        box.forEach(el => el.classList.remove('is-active'))
        box[i].classList.add('is-active');
    });
});


raitingItemsArray.forEach(item =>
    item.addEventListener('click', () =>
    item.parentNode.dataset.totalValue = item.dataset.itemValue
    )
);



// TweenMax.from ('.products__box',0.5,{
//    opacity:0,
//    x:-20,
//    ease:Expo.easeInOut
// })

