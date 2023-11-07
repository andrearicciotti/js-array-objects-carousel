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
console.log(sliderElems);

const wrapper = document.querySelector('.container');

const sliderItems = sliderElementInDOM(sliderElems);
console.log(sliderItems);

wrapper.append(sliderItems);






/**
 * Dato un array in ingresso con immagini e titoli per un carosello immagini esce un contenuto HTML pronto. 
 * @param {array} array
 * @returns {html object}
 */
function sliderElementInDOM(array) {

    let result = "";

    const items = document.querySelector('.items');
    console.log(items);

    array.forEach((curElem) => {
        result += `
        <div class="item active">
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

// const curImage = curElem.image;
// const imageItem = doceument.createElement('img');
// imageItem.src = curImage;

// let result = `

// <div class="item active">
//     <img src="./img/01.webp" alt="">
//         <div class="text">
//             <h3>Marvel's Spiderman Miles Morales</h3>
//             <p>Spiderman dolor sit amet, consectetur adipisicing elit. Dicta iusto.</p>
//         </div>
// </div>

// <div class="item">
//     <img src="./img/02.webp" alt="">
//     <div class="text">
//         <h3>Ratchet and Clank 4 is coming</h3>
//         <p>Ratchet and Clank dolor sit amet, consectetur adipisicing elit. Dicta iusto.</p>
//     </div>
// </div>

// <div class="item">
//     <img src="./img/03.webp" alt="">
//     <div class="text">
//         <h3>Fortnite new season</h3>
//         <p>Fortnite dolor sit amet, consectetur adipisicing elit. Dicta iusto.</p>
//     </div>
// </div>

// <div class="item">
//     <img src="./img/04.webp" alt="">
//     <div class="text">
//         <h3>The cat is on the table</h3>
//         <p>The cat dolor sit amet, consectetur adipisicing elit. Dicta iusto.</p>
//     </div>
// </div>

// <div class="item">
//     <img src="./img/05.webp" alt="">
//     <div class="text">
//         <h3>Avengers endendgame?</h3>
//         <p>Loki strikes back dolor sit amet, consectetur adipisicing elit. Dicta iusto.</p>
//     </div>
// </div>
// `;