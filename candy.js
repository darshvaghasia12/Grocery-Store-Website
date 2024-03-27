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
                id: 18,
                cartId: 13,
                name: 'Kinder Bueno, 20pc',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_72edfca9-160a-453d-8f73-78580e99f64a.jpeg', 
                category: 'Chocolates',
                price: 18.27
            },
            {
                id: 18,
                cartId: 14,
                name: 'Hersheys Assortment',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_dcdcb17b-5c9c-449f-b20a-5b3219b05573.jpg',
                category: 'Chocolates',
                price: 21.14
            },
            {
                id: 18,
                cartId: 15,
                name: 'M&M peanut',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_23c91e1e-886a-4893-aca0-96ea3e84140b.jpg',
                category: 'Chocolates',
                price: 19.89
            },
            {
                id: 18,
                cartId: 16,
                name: 'Waffle Bars',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a3615721-bab6-4ac1-9f32-d68ab7ba9b5e.jpg',
                category: 'Chocolates',
                price: 13.61 
            },
            {
                id: 18,
                cartId: 17,
                name: 'Brownie Brittle',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4841c44d-64a9-4c6d-af06-121ca42ca8ae.jpg',
                category: 'Chocolates',
                price: 9.32
            },
            // {
            //     id: 6,
            //     name: 'Spinach, 1lb',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9f9d0c46-72c5-4783-98ba-b8c369fafaa3.jpg',
            //     category: 'Vegetables',
            //     price: 6.21
            // },
            // {
            //     id: 7,
            //     name: 'Tomatoes, 2lb',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_72b9b769-8110-4410-8340-c89d62e23f15.jpeg',
            //     category: 'Vegetables',
            //     price: 4.96
            // },
            // {
            //     id: 8,
            //     name: 'Mini Peppers, 24oz',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7c242122-a7e8-4a81-ae5c-26b4f0fd7096.jpg',
            //     category: 'Vegetables',
            //     price: 7.45
            // },
            // {
            //     id: 9,
            //     name: 'Romaine Hearts, 5ct',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fca783b0-be59-4475-8f43-fb2c13412ca2.jpg',
            //     category: 'Vegetables',
            //     price: 6.83
            // },
            // {
            //     id: 10,
            //     name: 'Org. Cucumber, 3ct',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b0393401-6b8a-4b35-9a34-c0ea42ccdc13.jpg',
            //     category: 'Vegetables',
            //     price: 7.45
            // }
        ];
        let listCards  = [];
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
                id:18,
                name:'Chocolate'
            },
            {
                id:8,
                name:'All'
            }
        ]
        
        const filters = [...new Set(btns.map((btn)=>{return btn}))]
        
        document.getElementById('btns').innerHTML=filters.map((btn)=>{
            var {name, id} = btn;
            return (
                "<button class = 'fil-p' onclick='filter("+(id)+`)'>${name}</a>`
            )
        }).join("");

        function find(name){
            document.getElementById('list').innerHTML = ``;

            products.forEach((value,key) => {
                if(value.name == name){
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
