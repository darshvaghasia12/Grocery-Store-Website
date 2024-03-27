initApp();
const addData = JSON.parse(localStorage.getItem("cartData"))
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        let productData = products.forEach(element => {
            if (key == element.cartId) {
                listCards[key] = JSON.parse(JSON.stringify(element));
                listCards[key].quantity = 1;
                addData ? addData[key] = JSON.parse(JSON.stringify(element)) : "";
                addData ? addData[key].quantity = 1 : "";
                addData ? localStorage.setItem("cartData", JSON.stringify(addData)) : ""
            }
        });
    }
    reloadCard();
    console.log(listCards);
}
reloadCard()
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    const cartArray = addData ? addData : listCards
    console.log(cartArray);
    cartArray.forEach((value, key) => {
        if (value != null) {
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;
            if (value != null) {
                let newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="${value.image}"/></div>
                    <div>${value.name}</div>
                    <div>${value.price.toLocaleString()}</div>
                    <div>
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>`;
                listCard.appendChild(newDiv);
                localStorage.setItem("cartData1", JSON.stringify(listCards))
                if (cartArray.length > 0 && localStorage.getItem("cartData")) {
                    localStorage.setItem("cartData", (localStorage.getItem("cartData")))
                }
                if (cartArray.length > 0 && !localStorage.getItem("cartData")) {
                    localStorage.setItem("cartData", (localStorage.getItem("cartData1")))
                }
            }
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    var qty = quantity;
    if (qty == 0) {
        delete listCards[key];
        addData ? delete addData[key] : "";
    } 
    // else if ( quantity > 4){
    //     alert(" Not Enough Inventory");
    // }
    else {
        // console.log(qty);
        // console.log(listCards);
        // listCards[key].quantity = qty;
        addData ? addData[key].quantity = qty : "";
        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            if (key == element.cartId){
                // listCards[key].price = qty * element.price;

                addData ? addData[key].price = qty * element.price : "";
            }
            
        }
        addData ? addData[key].quantity = qty : "";

    }
    addData ? localStorage.setItem("cartData", JSON.stringify(addData)) : "";
    reloadCard();
}