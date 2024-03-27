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

// Change
        let products = [
            {
                id: 6,
                cartId: 30,
                name: 'Ham & Cheese Scramble',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_749323e0-ffec-49b5-9fdf-4aecdfc908ba.jpg', 
                category: 'Breakfast',
                price: 2.99
            },
            {
                id: 6,
                cartId: 31,
                name: 'Bacon & Cheese bites',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f23f25b5-cc39-459c-8cf5-775182eabbb2.jpg', 
                category: 'Breakfast',
                price: 4.99
            },
            {
                id: 7,
                cartId: 32,
                name: 'Cookies & Cream Greek Yogurt',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3699438f-a178-485c-bd9a-12b76b44ae64.jpeg', 
                category: 'Dessert',
                price: 7.99
            },
            {
                id: 7,
                cartId: 33,
                name: 'Oreo Desert Sandwiches',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_01558cfc-bb3d-48cf-8967-68de6a72ec04.jpg', 
                category: 'Dessert',
                price: 6.99
            },
            {
                id: 9,
                cartId: 34,
                name: 'Cheesy Rice Chicken',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b306d156-45ac-4c03-a469-a3035aa92d56.jpeg', 
                category: 'Meals',
                price: 1.99
            },            
            {
                id: 9,
                cartId: 35,
                name: 'Alfredo Chicken & Broccoli',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_78205208-f40d-4251-9394-242c5c229aa3.png', 
                category: 'Meals',
                price: 1.69
            },
            {
                id: 11,
                cartId: 36,
                name: 'Buffalo Chicken Strips',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a71bcd34-a2b2-4f82-8d64-006f4f5523a3.jpg', 
                category: 'Meat',
                price: 11.99
            },            
            {
                id: 11,
                cartId: 37,
                name: 'Chicken Patties',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5d36e57d-0d07-4cc3-8956-4337f9fc590b.jpg', 
                category: 'Meat',
                price: 6.99
            },
            {
                id: 12,
                cartId: 38,
                name: 'Brazi Bites',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a65129a1-27fe-4260-8f7c-f0b517bb6e28.jpg',
                category: 'Snacks',
                price: 18.65
            },
            {
                id: 10,
                cartId: 39,
                name: 'Cauliflower Crust Pizza',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c2c19571-f955-4f63-882c-7898ed70b8b2.jpg',
                category: 'Pizza',
                price: 17.40
            },
            {
                id: 10,
                cartId: 40,
                name: 'Cheese Pizza',
                image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a88eac87-00e4-490b-9f26-c08f438b8aa2.jpg',
                category: 'Pizza',
                price: 13.65 
            },
            {
                id: 12,
                cartId: 41,
                name: 'Chicken Nuggets',
                image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d8d5304c-04b6-412f-ae9c-a909d2120420.jpg',
                category: 'Snacks',
                price: 16.68
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
// Change
        const btns = [
            {
                id:8,
                name:'All'
            },
            {
                id:6,
                name:'Breakfast'
            },
            {
                id:7,
                name:'Dessert'
            },
            {
                id:9,
                name:'Meals'
            },
            {
                id:10,
                name:'Pizza'
            },
            {
                id:11,
                name:'Meat'
            },
            {
                id:12,
                name:'Snacks'
            }
        ]
        
        const filters = [...new Set(btns.map((btn)=>{return btn}))]
        
        document.getElementById('btns').innerHTML=filters.map((btn)=>{
            var {name, id} = btn;
            return (
                "<button class = 'fil-p' onclick='filter("+(id)+`)'>${name}</a>`
            )
        }).join("");

