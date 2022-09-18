const visibleElementsCount = 1;
const width = 488;

const list = document.querySelector(".about-appearance-carousel-img-container-1");
const elements = document.querySelectorAll(".about-appearance-carousel-img");
const pagesIndicatorContainer = document.querySelector(".about-appearance-carousel-pages")

const backArrow = document.querySelector("#button-arrow-left");
const nextArrow = document.querySelector("#button-arrow-right");

let activeIndex = 0;


const drawIndicators = () => {
    for(i = 0; i < elements.length; i++) { 
        const indicator = document.createElement('div')
        const appended = pagesIndicatorContainer.appendChild(indicator)
        appended.classList.add("about-appearance-carousel-pages-item") 
        if (i == activeIndex) {
            appended.classList.add("about-appearance-carousel-pages-item-active")
        } else {
            appended.classList.add("about-appearance-carousel-pages-item-disable")
        }
    }
}

backArrow.onclick = () => {
    if (isLeftArrowActive()) {
        const prevIndex = activeIndex;
        activeIndex = activeIndex - 1;
        let position = -(activeIndex * width * visibleElementsCount);
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0)
        setArrowsStyles()
        updateActiveDrawIndicator(prevIndex, activeIndex);
        list.style.marginLeft = position + 'px';
    }
}

nextArrow.onclick = () => {
    if (isRightArrowActive()) {
        const prevIndex = activeIndex;
        activeIndex = activeIndex + 1;
        let position = -(activeIndex * width * visibleElementsCount);
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -width * (elements.length - visibleElementsCount));
        setArrowsStyles()
        updateActiveDrawIndicator(prevIndex, activeIndex);
        list.style.marginLeft = position + 'px';
    }
}

const isLeftArrowActive = () => activeIndex != 0;
const isRightArrowActive = () => activeIndex != elements.length - 1;

const updateActiveDrawIndicator = (prevActiveIndex, newActiveIndex) => { 
    console.log(pagesIndicatorContainer)
    pagesIndicatorContainer.children[prevActiveIndex].classList.remove("about-appearance-carousel-pages-item-active")
    pagesIndicatorContainer.children[prevActiveIndex].classList.add("about-appearance-carousel-pages-item-disable")
    pagesIndicatorContainer.children[newActiveIndex].classList.remove("about-appearance-carousel-pages-item-disable")
    pagesIndicatorContainer.children[newActiveIndex].classList.add("about-appearance-carousel-pages-item-active")
} 

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

drawIndicators();
setArrowsStyles();

console.log(pagesIndicatorContainer)