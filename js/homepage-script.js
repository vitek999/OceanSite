const visibleElementsCount = 2;
const padding = 30;
const width = 666 + padding;

const list = document.querySelector(".news-cardlist");
const elements = document.querySelectorAll(".news-card");

const backArrow = document.querySelector("#button-arrow-left");
const nextArrow = document.querySelector("#button-arrow-right");

let position = 0;

backArrow.onclick = () => {
    console.log('hello back')
    position += width * visibleElementsCount;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    setArrowsStyles()
    console.log('left: ' + isLeftArrowActive())
    console.log('right: ' + isRightArrowActive())
    list.style.marginLeft = position + 'px';
}

nextArrow.onclick = () => {
    console.log('hello next')
    position -= width * visibleElementsCount;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (elements.length - visibleElementsCount));
    setArrowsStyles()
    console.log('left: ' + isLeftArrowActive())
    console.log('right: ' + isRightArrowActive())
    list.style.marginLeft = position + 'px';
}

const isLeftArrowActive = () => position != 0;
const isRightArrowActive = () => position != -(elements.length - visibleElementsCount) * width

const setArrowsStyles = () => { 
    if (isLeftArrowActive()) {
        backArrow.classList.remove('button-arrow-default')
        backArrow.classList.remove('button-arrow-left-default')
        backArrow.classList.add('button-arrow-active')
        backArrow.classList.add('button-arrow-left')
    } else { 
        backArrow.classList.remove('button-arrow-active')
        backArrow.classList.remove('button-arrow-left')
        backArrow.classList.add('button-arrow-default')
        backArrow.classList.add('button-arrow-left-default') 
    }

    if (isRightArrowActive()) {
        nextArrow.classList.remove('button-arrow-default')
        nextArrow.classList.remove('button-arrow-right-default')
        nextArrow.classList.add('button-arrow-active')
        nextArrow.classList.add('button-arrow-right')
    } else { 
        nextArrow.classList.remove('button-arrow-active')
        nextArrow.classList.remove('button-arrow-right')
        nextArrow.classList.add('button-arrow-default')
        nextArrow.classList.add('button-arrow-right-default') 
    }
};

setArrowsStyles();

console.log(list)
console.log(elements)
console.log(backArrow)
console.log(nextArrow)