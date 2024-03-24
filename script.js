import { menuArray as data} from'./data.js';


const main =  document.getElementById('main-container');
const section = document.getElementById('pre-checkout');
const pizzaPrice = document.getElementById('pizza-price');
const beerPrice = document.getElementById('beer-price');
const burgerPrice = document.getElementById('burger-price');
const pizzaCheckout = document.getElementById('pizza-checkout');
const burgerCheckout = document.getElementById('burger-checkout');
const beerCheckout = document.getElementById('beer-checkout');
const checkButtons = document.getElementsByClassName('check');
const total = document.getElementById('Total');
const checkoutButton = document.getElementById('btn-checkout');




function mainRendering()  { 
    
    return `    <div class="container" id="pizza">
        
            <img src="${data[0].emoji}" alt="image of a slice of pizza">
            <div class="container-fluid">
            <h2> ${data[0].name}</h2>
                
                <p>${data[0].ingredients}<p>
                <br/>
                <h3>$${data[0].price}</h3>
            </div>
            <button id="btn-pizza" class="check">+</button>
            
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
        <button id="btn-burger" class="check">+</button>
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
        <button id="btn-beer"  class="check">+</button>
        </div>
    <hr class="none">`
    
}


main.innerHTML += mainRendering();


let totalPrice = 0;
let pizzaCost = 0;
let beerCost = 0;
let burgerCost = 0;
let pizzaCount = 0;
let beerCount = 0;
let burgerCount = 0;

Array.from(checkButtons).forEach(button => {
    button.addEventListener('click', function() {
        section.style.display = 'flex';

        if (button.id === 'btn-pizza') {
            pizzaCheckout.style.display = 'flex';
            pizzaCost += data[0].price;
            pizzaPrice.textContent = '$' + pizzaCost ;
            totalPrice += data[0].price;
        } else if (button.id === 'btn-burger') {
            burgerCheckout.style.display = 'flex';
            burgerCost += data[1].price;
            burgerPrice.textContent = '$' + burgerCost ;
            totalPrice += data[1].price;
        } else if (button.id === 'btn-beer') {
            beerCost += data[2].price;
            beerCheckout.style.display = 'flex';
            beerPrice.textContent = '$' + beerCost;
            totalPrice += data[2].price;
        }

        total.textContent = '$' + totalPrice;
    });
});








    


