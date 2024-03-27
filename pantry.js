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
                id: 13,
                cartId: 42,
                name: 'Canned Peas',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2480bfed-87a9-49ae-8e46-63e131870902.jpeg', 
                category: 'Canned Goods',
                price: 0.99
            },
            {
                id: 13,
                cartId: 43,
                name: 'Canned Baked Beans',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a9f88d95-acb1-40a5-87b7-97c51aa936a0.png',
                category: 'Canned Goods',
                price: 1.99
            },
            {
                id: 14,
                cartId: 44,
                name: 'Diced Tomatoes',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_66309b2e-5ef9-4203-948d-e2d344133749.jpg',
                category: 'Canned Vegetables',
                price: 9.94
            },
            {
                id: 14,
                cartId: 45,
                name: 'Golden Corn',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bdd41ca1-a510-407d-a8db-aa7e03c6f397.jpeg',
                category: 'Canned Vegetables',
                price: 0.99
            },
            {
                id: 15,
                cartId: 46,
                name: 'Yellow Mustard',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0422c9e8-0721-4798-859f-50c49ee7b20e.jpg',
                category: 'Condiments',
                price: 2.99
            },
            {
                id: 15,
                cartId: 47,
                name: 'Heinz Ketchup',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cdb6cdca-06c2-4c25-9512-a8a868b1ecd6.jpg',
                category: 'Condiments',
                price: 3.99
            },
            {
                id: 16,
                cartId: 48,
                name: 'Peanut Butter',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4f545b3d-a82c-4aeb-94d0-5bcf9f35cce3.jpg',
                category: 'Peanut Butter & Spread',
                price: 8.99
            },
            {
                id: 16,
                cartId: 49,
                name: 'Pink Peanut Butter & Spread',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e28c5eef-d282-484d-9c6e-14156553e1fe.jpeg',
                category: 'Peanut Butter & Spread',
                price: 4.99
            },
            {
                id: 17,
                cartId: 50,
                name: 'Sphagetti',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_87f5c0d3-cbc2-4456-b6bd-a18e47396d2b.png',
                category: 'Pasta & pizza',
                price: 3.69
            },
            {
                id: 17,
                cartId: 51,
                name: 'Pepperoni Pizza',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ec5e40f1-1232-404b-8c26-beb9cd280dbb.jpeg',
                category: 'Pasta & pizza',
                price: 9.99
            }
            // {
            //     id: 2,
            //     name: 'Spinach, 1lb',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9f9d0c46-72c5-4783-98ba-b8c369fafaa3.jpg',
            //     category: 'Vegetables',
            //     price: 6.21
            // },
            // {
            //     id: 2,
            //     name: 'Tomatoes, 2lb',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_72b9b769-8110-4410-8340-c89d62e23f15.jpeg',
            //     category: 'Vegetables',
            //     price: 4.96
            // },
            // {
            //     id: 2,
            //     name: 'Mini Peppers, 24oz',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7c242122-a7e8-4a81-ae5c-26b4f0fd7096.jpg',
            //     category: 'Vegetables',
            //     price: 7.45
            // },
            // {
            //     id: 2,
            //     name: 'Romaine Hearts, 5ct',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fca783b0-be59-4475-8f43-fb2c13412ca2.jpg',
            //     category: 'Vegetables',
            //     price: 6.83
            // },
            // {
            //     id: 2,
            //     name: 'Org. Cucumber, 3ct',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b0393401-6b8a-4b35-9a34-c0ea42ccdc13.jpg',
            //     category: 'Vegetables',
            //     price: 7.45
            // }
        ];


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
                id:13,
                name:'Canned Goods'
            },
            {
                id:14,
                name:'Canned Vegetables'
            },
            {
                id:15,
                name:'Condiments'
            },
            {
                id:16,
                name:'Peanut Butter & Spread'
            },
            {
                id:17,
                name:'Pasta & Pizza'
            },
            {
                id:18,
                name:'Rollbacks'
            }
            // {
            //     id:7,
            //     name:'New Itmes & rollbacks'
            // },

        ]
        
        const filters = [...new Set(btns.map((btn)=>{return btn}))]
        
        document.getElementById('btns').innerHTML=filters.map((btn)=>{
            var {name, id} = btn;
            return (
                "<button class = 'fil-p' onclick='filter("+(id)+`)'>${name}</a>`
            )
        }).join("");


        