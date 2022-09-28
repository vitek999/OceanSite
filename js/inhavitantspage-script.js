const WIDTH = 1390
const PAGE_IMAGES_COUNT = 6

const list =  document.querySelector(".content-inhabitants-list")
const menuItems = document.querySelectorAll(".filter-button")
const pages = document.querySelectorAll(".inhabitants-list-table-cards")

const backArrow = document.querySelector("#back-arrow-button")
const nextArrow = document.querySelector("#next-arrow-button")

let position = 0

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params)

function createCardItem(model) { 
    const cardA = document.createElement('a')
    cardA.classList.add("inhabitants-list-card") 
    cardA.href = model.href
    
    const img = document.createElement('img')
    img.classList.add("inhabitants-list-card-img")
    img.src = model.img

    const gradient = document.createElement('div')
    if (model.title !== "") {
        gradient.classList.add("inhabitants-list-card-gradient")
    }

    const cardText = document.createElement('div')
    cardText.classList.add("inhabitants-list-card-text")

    const title = document.createElement("h3")
    title.classList.add("inhabitants-list-card-text-header")
    title.innerText = model.title
    

    const subTitle = document.createElement("div")
    subTitle.classList.add("text-body18")
    subTitle.classList.add("regular-text")
    subTitle.innerText = model.subTitle

    cardText.appendChild(title)
    cardText.appendChild(subTitle)

    cardA.appendChild(img)
    cardA.appendChild(gradient)
    cardA.appendChild(cardText)

    return cardA
}

function update(items) { 
    position = 0;
    list.style.marginLeft = 0;
    list.innerHTML = '';
    for (let i = 0; i < items.length; i += PAGE_IMAGES_COUNT) {
        const pageItems = items.slice(i, i + PAGE_IMAGES_COUNT)

        const cardsContainer = document.createElement('div')
        cardsContainer.classList.add("inhabitants-list-table-cards")
        console.log(list)
        list.appendChild(cardsContainer)
        pageItems.forEach(element => {
            const child = createCardItem(element)
            cardsContainer.appendChild(child)
        });
    }
    updateArrowsState(items)
}

const BLANK_CARD = {
    href: "",
    img: "./img/inhabitantspage/emptyCard.svg",
    title: "",
    subTitle: ""
};

const DATA = {
    amphibians: [
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard1.svg",
            title: "Аксолотль древесный",
            subTitle: "Лягушки"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard2.svg",
            title: "Амбистом",
            subTitle: "Тритоны"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard3.svg",
            title: "Древолаз",
            subTitle: "Лягушки"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard4.svg",
            title: "Жаба обыкновенная",
            subTitle: "Жаба"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard5.svg",
            title: "Крестовка",
            subTitle: "Лягушки"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard6.svg",
            title: "Леопардовый тритон",
            subTitle: "Тритоны"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard7.svg",
            title: "Полосатый сирен",
            subTitle: "Лягушки"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard8.svg",
            title: "Руфилиус",
            subTitle: "Тритоны"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard9.svg",
            title: "Семиреченский лягушкозуб",
            subTitle: "Лягушки"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard10.svg",
            title: "Сирийская чесночница",
            subTitle: "Лягушки"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard11.svg",
            title: "Травянка",
            subTitle: "Лягушки"
        },
        {
            href: "",
            img: "./img/inhabitantspage/AmfibCard12.svg",
            title: "Углоух",
            subTitle: "Лягушки"
        },
    ],
    invertebrates: [
        {
            href: "./asteriaspage.html",
            img: "./img/inhabitantspage/InvertebratesCard1.svg",
            title: "Астеродискус",
            subTitle: "Морские звезды"
        },
        {
            href: "",
            img: "./img/inhabitantspage/InvertebratesCard2.svg",
            title: "Аурелия ушастая",
            subTitle: "Медузы"
        },
        {
            href: "",
            img: "./img/inhabitantspage/InvertebratesCard3.svg",
            title: "Бимак",
            subTitle: "Осьминоги"
        },
        {
            href: "",
            img: "./img/inhabitantspage/InvertebratesCard4.svg",
            title: "Волосистая цианея",
            subTitle: "Медузы"
        },
        {
            href: "",
            img: "./img/inhabitantspage/InvertebratesCard5.svg",
            title: "Голубой краб",
            subTitle: "Крабы"
        },
        {
            href: "",
            img: "./img/inhabitantspage/InvertebratesCard6.svg",
            title: "Красный астериас",
            subTitle: "Морские звезды"
        },
        {
            href: "",
            img: "./img/inhabitantspage/InvertebratesCard7.svg",
            title: "Фиолетовый тремоктопуc",
            subTitle: "Осьминоги"
        },
        {
            href: "",
            img: "./img/inhabitantspage/InvertebratesCard8.svg",
            title: "Физалия",
            subTitle: "Медузы"
        },
        {
            href: "",
            img: "./img/inhabitantspage/InvertebratesCard9.svg",
            title: "Цейлонский осьминог",
            subTitle: "Осьминоги"
        },
        {
            href: "",
            img: "./img/inhabitantspage/InvertebratesCard10.svg",
            title: "Хоккайдак",
            subTitle: "Медузы"
        },
        BLANK_CARD,
        BLANK_CARD,
    ],
    birds: [
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
    ],
    reptiles: [
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
    ],
    fish: [
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
    ],
    mammals: [
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
        BLANK_CARD,
    ]
}

function updateByKey(key) { 
    console.log(menuItems)
    menuItems.forEach(item => {
        item.classList.remove("button-only-border-active")
        item.classList.add("button-only-border-disabled")

        if(item.id == key) { 
            item.classList.remove("button-only-border-disabled")
            item.classList.add("button-only-border-active")
        }
    })
    let items = DATA[key]
    update(items)
}

const startPageItems = DATA.amphibians

const isLeftArrowActive = () => position != 0;
const isRightArrowActive = (items) => position === 0  && items.length > PAGE_IMAGES_COUNT

function updateArrowsState(items) { 
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

    if (isRightArrowActive(items)) {
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
}

backArrow.onclick = () => { 
    position += WIDTH
    position = Math.min(position, 0)
    list.style.marginLeft = position === 0 ? 'auto' : position + 'px';
    updateArrowsState(startPageItems)
}

nextArrow.onclick = () => { 
    position -= WIDTH
    position = Math.max(position, -WIDTH);
    list.style.marginLeft = position === 0 ? 'auto' : position + 'px';
    updateArrowsState(startPageItems)
}

update(startPageItems)