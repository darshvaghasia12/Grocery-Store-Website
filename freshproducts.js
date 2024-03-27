let openShopping = document.querySelector('.shopping');
        let closeShopping = document.querySelector('.closeShopping');
        let list = document.querySelector('.list');
        let listCard = document.querySelector('.listCard');
        let body = document.querySelector('body');
        let total = document.querySelector('.total');
        let quantity = document.querySelector('.quantity');


        openShopping.addEventListener('click', ()=>{
            body.classList.add('active');
        })
        closeShopping.addEventListener('click', ()=>{
            body.classList.remove('active');
        })

        let products = [
            {
                id: 1,
                cartId: 18,
                name: 'Bananas, 3lb',
                image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7feee29d-1949-402c-bf49-5d40a06453b1.jpg', 
                category: 'Fruits',
                price: 1.85
            },
            {
                id: 1,
                cartId: 19,
                name: 'Avacado, 6ct',
                image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ac2399b8-32fe-4fce-8799-b9154684fb2a.jpg',
                category: 'Fruits',
                price: 7.45
            },
            {
                id: 1,
                cartId: 20,
                name: 'Strawberries, 2lb',
                image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_29d76b0c-3ccc-4a6c-82ea-92b2ad521100.jpg',
                category: 'Fruits',
                price: 3.60
            },
            {
                id: 2,
                cartId: 21,
                name: 'Brocoli Crown',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f89427ea-4053-49fc-ab88-e7593f6f667d.jpg',
                category: 'Vegetables',
                price: 1.03
            },
            {
                id: 2,
                cartId: 22,
                name: 'Cauliflower',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2ca7e392-5b9e-4ee8-a475-a83fce6f97ae.jpg',
                category: 'Vegetables',
                price: 2.99
            },
            {
                id: 3,
                cartId: 23,
                name: 'Organic Apples, 3lbsFresh Cut Fruit Tray',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_20b547ae-9a28-4a09-bc75-cc679b13343a.jpeg',
                category: 'Pre-cut Fruits',
                price: 12.99
            },
            {
                id: 3,
                cartId: 24,
                name: 'Cucumber, 1.5lbSnow Fruits Strawberries',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_77944726-d27a-4c73-ad7d-260b7d7a3d55.jpeg',
                category: 'Pre-cut Fruits',
                price: 11.99
            },
            {
                id: 4,
                cartId: 25,
                name: 'Haus Dozen Rose Bunch',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2d168830-f8b3-4070-873e-9ca7bf930a5a.jpeg',
                category: 'Flowers',
                price: 14.99
            },
            {
                id: 4,
                cartId: 26,
                name: 'Bloom Haus Bronze Bouquet',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_db643096-c174-4e82-86d8-3cc062dde52e.jpeg',
                category: 'Flowers',
                price: 14.99
            },
            {
                id: 5,
                cartId: 27,
                name: 'Con Queso Dip',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_41a8b2b3-b415-4261-adc3-ae77f6d01d74.png',
                category: 'Salsa & Dips',
                price: 3.69
            },
            {
                id: 5,
                cartId: 28,
                name: 'Tostitos Salsa',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b114d706-fdb4-477f-b103-d1d86c28c2a1.png',
                category: 'Salsa & Dips',
                price: 7.99
            },
            {
                id: 6,
                cartId: 29,
                name: 'Artichoke',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_be491aeb-62fa-4064-ae57-227fc8a7e529.jpg',
                category: 'Season Produce',
                price: 3.69
            }
        ];

        async function fetchData() {
            try {
                const response = await fetch('getData.php');
                return await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error; // Propagate the error
            }
        }


        // // let page = [products, baking]
        // let pagediv = {
        //     products: document.getElementById('freshproductsdiv'),
        //     baking: document.getElementById('bakingdiv')
        // }
        let listCards  = [];
        // localStorage.clear(); 
        function initApp(){
            products.forEach((value, key) =>{
                let newDiv = document.createElement('div');
                newDiv.classList.add('item');
                newDiv.innerHTML = `
                    <img src="${value.image}">
                    <div class="title">${value.name}</div>
                    <div class="price">$${value.price.toLocaleString()}</div>
                    <button onclick="addToCard(${value.cartId})">Add To Cart</button>`;
                list.appendChild(newDiv);
            })
        }
        
        function filter(id){
            document.getElementById('list').innerHTML = ``;
            if (id == 8){
                initApp();
                return;
            }
            products.forEach((value,key) => {
                if(value.id == id){
                    let newDiv = document.createElement('div');
                    newDiv.classList.add('item');
                    newDiv.innerHTML = `
                        <img src="${value.image}">
                        <div class="title">${value.name}</div>
                        <div class="price">$${value.price.toLocaleString()}</div>
                        <button onclick="addToCard(${value.cartId})">Add To Cart</button>`;
                    list.appendChild(newDiv);
                }
                

            }) 
        }

        const btns = [
            {
                id:8,
                name:'All'
            },
            {
                id:1,
                name:'Fruits'
            },
            {
                id:2,
                name:'Vegetables'
            },
            {
                id:3,
                name:'Pre-cut Fruits'
            },
            {
                id:4,
                name:'Flowers'
            },
            {
                id:5,
                name:'Salsa & Dips'
            },
            {
                id:6,
                name:'Season Produce'
            },
            {
                id:7,
                name:'New Itmes & rollbacks'
            },

        ]
        
        const filters = [...new Set(btns.map((btn)=>{return btn}))]
        
        document.getElementById('btns').innerHTML=filters.map((btn)=>{
            var {name, id} = btn;
            return (
                "<button class = 'fil-p' onclick='filter("+(id)+`)'>${name}</a>`
            )
        }).join("");


        