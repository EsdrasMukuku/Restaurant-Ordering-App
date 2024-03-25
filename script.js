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
const pizzaNum = document.getElementById('pizza_count');
const beerNum = document.getElementById('beer_count');
const burgerNum = document.getElementById('burger_count');
const checkoutButton = document.getElementById('btn-checkout');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const name = document.getElementById('name');

let totalPrice = 0;
let pizzaCost = 0;
let beerCost = 0;
let burgerCost = 0;
let pizzaCount = 0;
let beerCount = 0;
let burgerCount = 0;



const  mainRendering = () =>  { 
    
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

const updateCheckoutDetails = (itemIndex, checkoutElement, costElement, countElement, countVariable, costVariable, dataItem) => {
    checkoutElement.style.display = 'flex';
    costVariable += dataItem.price;
    countVariable++;
    countElement.textContent = countVariable + 'ct';
    costElement.textContent = '$' + costVariable;
    totalPrice += dataItem.price;

    return [countVariable, costVariable];
}
const  Total = () => {
    total.textContent = '$' + totalPrice;
}

const removeItem = (itemIndex, checkoutElement, costElement, countElement, countVariable, costVariable, dataItem) => {
    countVariable--;
    costVariable -= dataItem.price;
    countElement.textContent = countVariable + 'ct';
    costElement.textContent = '$' + costVariable;
    totalPrice -= dataItem.price;

    return [countVariable, costVariable];
}

const  updatePayment = (first, second, third) => {
    first.style.display = 'flex';
    second.style.pointerEvents = 'none';
    third.style.pointerEvents = 'none';
}

const thanks = (user) => {
    return `<div id='thanks'>Thanks,<b>${user}</b>! Your order is on the way!</div>`
};





main.innerHTML += mainRendering();



Array.from(checkButtons).forEach(button => {
    button.addEventListener('click', () => {
        section.style.display = 'flex';

        if (button.id === 'btn-pizza') {
            [pizzaCount, pizzaCost] = updateCheckoutDetails(0, pizzaCheckout, pizzaPrice, pizzaNum, pizzaCount, pizzaCost, data[0]);
        } else if (button.id === 'btn-burger') {
            [burgerCount, burgerCost] = updateCheckoutDetails(1, burgerCheckout, burgerPrice, burgerNum, burgerCount, burgerCost, data[1]);
        } else if (button.id === 'btn-beer') {
            [beerCount, beerCost] = updateCheckoutDetails(2, beerCheckout, beerPrice, beerNum, beerCount, beerCost, data[2]);
        }

        Total();
    });
});

document.getElementById('pizza-remove').addEventListener('click', () => {
    if (pizzaCount > 0) {
        [pizzaCount, pizzaCost] = removeItem(0, pizzaCheckout, pizzaPrice, pizzaNum, pizzaCount, pizzaCost, data[0]);
    }
    
    Total();
    
})



document.getElementById('beer-remove').addEventListener('click', () => {
    if (beerCount > 0) {
        [beerCount, beerCost] = removeItem(2, beerCheckout, beerPrice, beerNum, beerCount, beerCost, data[2]);
    }
    
    Total();
    
})

document.getElementById('burger-remove').addEventListener('click', () => {
    if (burgerCount > 0) {
        [burgerCount, burgerCost] = removeItem(1, burgerCheckout, burgerPrice, burgerNum, burgerCount, burgerCost, data[1]);
    }
    
    Total();
    
});

checkoutButton.addEventListener('click', () => {
    updatePayment(form, section, main);
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    localStorage.setItem('username', name.value);
    section.innerHTML = thanks(localStorage.getItem('username'));
    localStorage.clearItem('username');
});













    


