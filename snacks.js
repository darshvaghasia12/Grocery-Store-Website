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
                id: 16,
                cartId: 52,
                name: 'Frito Lays, 24pc',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_047af961-8107-4fdc-87c9-557a26cee110.jpg', 
                category: 'Chips',
                price: 24.74
            },
            {
                id: 16,
                cartId: 53,
                name: 'Salted Chips, 32oz',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2f6fb584-4e79-4be4-ab49-74fc19fab678.jpeg',
                category: 'Chips',
                price: 7.45
            },
            {
                id: 16,
                cartId: 54,
                name: 'Sunchips, 30pc',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_84b83de5-b62e-4c3e-836a-af306bdd782f.jpg',
                category: 'Chips',
                price: 23.00
            },
            {
                id: 16,
                cartId: 55,
                name: 'Mixed Salted Nuts',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_091676c3-172c-4077-998d-e192c63cad6e.jpg',
                category: 'Chips',
                price: 16.16 
            },
            {
                id: 17,
                cartId: 56,
                name: 'Chocolate Bars',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_258daedb-b9f7-4e65-a3c4-cb2ba470a8cc.jpeg',
                category: 'Chocolate',
                price: 11.18
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
                id:16,
                name:'Chips'
            },
            {
                id:17,
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
