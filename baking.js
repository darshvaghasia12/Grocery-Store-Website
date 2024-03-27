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
                cartId: 1,
                name: 'Chocolate Chip Cookies',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a8ba7807-aac6-4c88-9994-edc4f49dcdf0.jpg', 
                category: 'Cookies',
                price: 14.92
            },
            {
                id: 14,
                cartId: 2,
                name: 'Butter Croissants, 12ct',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e6f81536-0a5e-4da0-a205-df1f61222aff.jpg',
                category: 'Breads',
                price: 7.45
            },
            {
                id: 15,
                cartId: 3,
                name: 'Danish Mix $ Match, 2 Fl',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2ed21bbc-beaf-470f-9751-02e5c161a00c.jpg',
                category: 'Danish',
                price: 14.92
            },
            {
                id: 14,
                cartId: 4,
                name: 'French Bread, 2 Pack',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1d76144f-3e29-4f06-b41b-eb9798dd6b2f.jpeg',
                category: 'Breads',
                price: 7.45 
            },
            // {
            //     id: 5,
            //     name: 'Cucumber, 1.5lb',
            //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d8d5304c-04b6-412f-ae9c-a909d2120420.jpg',
            //     category: 'Vegetables',
            //     price: 7.45
            // },
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
                id:13,
                name:'Cookies'
            },
            {
                id:14,
                name:'Breads'
            },
            {
                id:3,
                name:'Danish'
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
