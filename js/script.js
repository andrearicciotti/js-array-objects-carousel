// RACCOLTA DATI
// CREO ARRAY DI OGGETTI PER SLIDER IMMAGINI
const sliderElems = [
    {
        image: "./img/01.webp",
        title: "Marvel's Spiderman Miles Morales",
        caption: "Spiderman dolor sit amet, consectetur adipisicing elit. Dicta iusto."
    },
    {
        image: "./img/02.webp",
        title: "Ratchet and Clank 4 is coming",
        caption: "Ratchet and Clank dolor sit amet, consectetur adipisicing elit. Dicta iusto."
    },
    {
        image: "./img/03.webp",
        title: "Fortnite new season",
        caption: "Fortnite dolor sit amet, consectetur adipisicing elit. Dicta iusto."
    },
    {
        image: "./img/04.webp",
        title: "The cat is on the table",
        caption: "The cat dolor sit amet, consectetur adipisicing elit. Dicta iusto."
    },
    {
        image: "./img/05.webp",
        title: "Avengers endendgame?",
        caption: "Loki strikes back dolor sit amet, consectetur adipisicing elit. Dicta iusto."
    }
]
// console.log(sliderElems);


// LOGICA DEL PROGRAMMA
const wrapper = document.querySelector('.container');

const sliderItems = sliderElementInDOM(sliderElems);
// console.log(sliderItems);

wrapper.append(sliderItems);

const items = document.querySelectorAll('.item');
console.log(items, items[0]);

items[0].classList.add('active');

const prev = document.createElement('div');
prev.classList.add('prev');
sliderItems.append(prev);

const next = document.createElement('div');
next.classList.add('next');
sliderItems.append(next);

prev.addEventListener("click", handlePrevious)
next.addEventListener("click", handleNext)

let curPosition = 0;

function handleNext() {

    console.log(this);
    for (let i = curPosition; i < items.length; i++) {

        const curItem = items[i];

        if (curItem.classList == "item active" && curItem == items[4]) {

            const nextItem = items[0];

            curItem.classList.remove('active');
            nextItem.classList.add('active');

            curPosition = 0;
            break
        }

        else if (curItem.classList == "item active") {

            const nextItem = items[i + 1];

            curItem.classList.remove('active');
            nextItem.classList.add('active');

            ++curPosition;
            break

        }
    }

}


function handlePrevious() {

    console.log(this);
    for (let i = curPosition; i < items.length; i--) {

        const curItem = items[i];

        if (curItem.classList == "item active" && curItem == items[0]) {

            const prevItem = items[4];

            curItem.classList.remove('active');
            prevItem.classList.add('active');

            curPosition = 4;
            break
        }

        else if (curItem.classList == "item active") {

            const prevItem = items[i - 1];

            curItem.classList.remove('active');
            prevItem.classList.add('active');

            --curPosition;
            break

        }
    }

}


/**
 * Dato un array in ingresso con immagini e titoli per un carosello immagini esce un contenuto HTML pronto. 
 * @param {array} array
 * @returns {html object}
 */
function sliderElementInDOM(array) {

    let result = "";

    const items = document.querySelector('.items');
    // console.log(items);

    array.forEach((curElem) => {
        result += `
        <div class="item">
            <img src="${curElem.image}" alt="">
            <div class="text">
                <h3>${curElem.title}</h3>
                <p>${curElem.caption}</p>
            </div>
        </div>
        `;

    });

    items.innerHTML = result;

    return items;

}

