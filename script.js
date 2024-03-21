import { menuArray } from'./data.js';

const data = menuArray;
const main =  document.getElementById('main-container');

console.log(`${data[0].emoji}`);

main.innerHTML += `
    <div class="container" id="pizza">
        
            <img src="${data[0].emoji}" alt="image of a slice of pizza">
            <div class="container-fluid">
                <h2> ${data[0].name}</h2>
                
                <p>${data[0].ingredients}<p>
                <br/>
                <h3>$${data[0].price}</h3>
            </div>
            <button id="btn-pizza">+</button>
        
    </div>
    <hr>
    <div class="container" id="burger">
        <img src="${data[1].emoji}" alt="image of ab hamburger">
        <div class="container-fluid">
                <h2> ${data[1].name}</h2>
                
                <p>${data[1].ingredients}<p>
                <br/>
                <h3>$${data[1].price}</h3>
            </div>
        <button id="btn-burger">+</button>
    </div>
    <hr>
    <div class="container" id="beer">
        <img src="${data[2].emoji}" alt="image of a beer mug">
        <div class="container-fluid">
                <h2> ${data[2].name}</h2>
                
                <p>${data[2].ingredients}<p>
                <br/>
                <h3>$${data[2].price}</h3>
            </div>
        <button id="btn-beer">+</button>
    </div>
    <hr class="none">`



