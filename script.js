let toggle = false;
let toggle2 = false;
const addToCart = () => {
    const getN = document.getElementById('product-name');
    const getQ = document.getElementById('product-quantity');
    const valN = getN.value;
    const valQ = getQ.value;
    getN.value = '';
    getQ.value = '';
    if(valN!== '' && valQ!== ''){
        storeToLocal(valN,valQ);
    }
    if(document.getElementById('ul').innerText !== ''){
        showCart()
    }
    if(document.getElementById('showCache').innerText !== ''){
        showCache()
    }

    
}
const toggleShowCart =() => {

    if(!toggle){
        showCart();
        toggle = true;
    }
    else{
        const clrShowCart = document.getElementById('ul');
        clrShowCart.innerText = '';
        toggle = false;
    }
}

const toggleShowCache =() => {

    if(!toggle2){
        showCache();
        toggle2 = true;
    }
    else{
        const clrShowCache = document.getElementById('showCache');
        clrShowCache.innerText = '';
        toggle2 = false;
    }
}

const showCart = () => {
    const get = localStorage.getItem('shoppingCart');
    let Get = JSON.parse(get);
    const parent = document.getElementById('ul')
    parent.innerText = '';
    for(let i in Get){
        const child = document.createElement('li');
        child.innerText = `${i} ${Get[i]} `;
        child.classList.add('bg-green-400','border');
        parent.appendChild(child);
    }



}


// const storeToLocal = (product,value) => {
//     let cart = {};
//     const previous = localStorage.getItem('shoppingCart')
//     if(previous){
//         cart = JSON.parse(previous);
//     }
    
//     cart[product] = value;
//     localStorage.setItem('shoppingCart', JSON.stringify(cart));
// }

const addPrevious = () => {
    let previousCart = {}
    const previous = localStorage.getItem('shoppingCart');
    if(previous){
        previousCart = JSON.parse(previous);
    }
    return previousCart
}

const storeToLocal = (product,value) => {
    let cart = {};
    cart = addPrevious();
    cart[product] = value;
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}


const removeItem = () => {
    localStorage.removeItem('shoppingCart');
    showCart();
    showCache();
}

const showCache = () => {
    const get = localStorage.getItem('shoppingCart');
    let Get = JSON.parse(get);
    const parent = document.getElementById('showCache');
    parent.innerText ='';
    for(let i in Get){
        const child = document.createElement('div');
        child.innerHTML = `Product: ${i}  Quantity: ${Get[i]}`
        parent.appendChild(child);
    }

    
}
// const showCache = () => {
//     const get = localStorage.getItem('shoppingCart');
//     let shoppingCartObject = JSON.parse(get);

//     // Check if the object is not null and has the expected properties
//     if (shoppingCartObject && shoppingCartObject.hasOwnProperty('sdf')) {
//         document.getElementById('showCache').innerText = `${shoppingCartObject['sdf']}`;
//     } else {
//         console.error("Invalid or missing properties in the shoppingCartObject.");
//     }
// }
