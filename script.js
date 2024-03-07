let toggle = false;
let toggle2 = false;
const addToCart = () => {
    const getN = document.getElementById('product-name');
    const getQ = document.getElementById('product-quantity');
    const valN = getN.value;
    const valQ = getQ.value;
    getN.value = '';
    getQ.value = '';
    if(valN && valQ){ //if they are truthy
        storeToLocal(valN,valQ);
    }
    if(document.getElementById('showCart').innerText !== ''){
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
        document.getElementById('showCartBtn').style.backgroundColor = 'steelBlue'
    }
    else{
        document.getElementById('title').classList.add('hidden')

        const clrShowCart = document.getElementById('showCart');
        clrShowCart.innerText = '';
        document.getElementById('showCartBtn').style.backgroundColor = '#ff9900'
        toggle = false;
    }
}

const toggleShowCache =() => {

    if(!toggle2){
        showCache();
        document.getElementById('showCacheBtn').style.backgroundColor = 'steelBlue'
        toggle2 = true;
    }
    else{
        const clrShowCache = document.getElementById('showCache');
        clrShowCache.innerText = '';
        document.getElementById('showCacheBtn').style.backgroundColor = '#ff9900'
        toggle2 = false;
    }
}

const showCart = () => {
    document.getElementById('title').classList.remove('hidden')

    const get = localStorage.getItem('shoppingCart');
    let Get = JSON.parse(get);
    const parent = document.getElementById('showCart')
    parent.innerText = '';
    for(let i in Get){
        const child = document.createElement('li');
        child.innerHTML = `
        <div class= "flex font-medium">
        <span class="w-[30vw]">${i}:</span> <span class= "font-normal">${Get[i]}</span>
        </div>   `;
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
