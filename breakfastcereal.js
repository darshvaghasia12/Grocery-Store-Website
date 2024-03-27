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

        async function fetchData() {
            try {
                const response = await fetch('getData.php');
                return await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error; // Propagate the error
            }
        }

        // let products = [
        //     {
        //         id: 19,
        //         cartId: 5,
        //         name: 'Kelloggs Frosted Flakes',
        //         image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8cd7d4c1-4074-4d98-91ad-c6a029131857.jpeg',
        //         category: 'Cereals',
        //         price: 11.18
        //     },
        //     {
        //         id: 19,
        //         cartId: 6,
        //         name: 'Cheerios Cereal',
        //         image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_98aedcfe-fdc9-46be-8809-bc2635376b76.png',
        //         category: 'Cereals',
        //         price: 4.99
        //     },
        //     {
        //         id: 20,
        //         cartId: 7,
        //         name: 'Homestyle Waffles',
        //         image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cf0da670-fce7-4e50-a1df-70982601d78a.jpeg', 
        //         category: 'Pancakes & Waffles',
        //         price: 5.99
        //     },
        //     {
        //         id: 20,
        //         cartId: 8,
        //         name: 'Pancakes',
        //         image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e40b814f-3952-4166-8437-a948bf78d97b.png', 
        //         category: 'Pancakes & Waffles',
        //         price: 4.99
        //     },
        //     {
        //         id: 21,
        //         cartId: 9,
        //         name: 'Whole Wheat Bread',
        //         image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bdbabed6-04af-4a92-a949-ebce0ee82fac.jpg',
        //         category: 'Breads',
        //         price: 5.99
        //     },
        //     {
        //         id: 21,
        //         cartId: 10,
        //         name: 'Honey Wheat Bread',
        //         image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_49557ffc-f0f4-488d-91b3-535a1aea68ad.png',
        //         category: 'Breads',
        //         price: 3.99
        //     },
        //     {
        //         id: 22,
        //         cartId: 11,
        //         name: 'Honey Oats, 50oz',
        //         image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_660b3904-0956-4231-a6f1-7a51261dd806.jpg',
        //         category: 'Oatmeals & grits',
        //         price: 9.69
        //     },
        //     {
        //         id: 22,
        //         cartId: 12,
        //         name: 'Quacker Oats',
        //         image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_04489b47-d04f-4211-a8c1-1f4062d5d5b8.png',
        //         category: 'Oatmeals & grits',
        //         price: 4.99
        //     },
        //     // {
        //     //     id: 2,
        //     //     name: 'Cucumber, 1.5lb',
        //     //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d8d5304c-04b6-412f-ae9c-a909d2120420.jpg',
        //     //     category: 'Vegetables',
        //     //     price: 7.45
        //     // },
        //     // {
        //     //     id: 2,
        //     //     name: 'Spinach, 1lb',
        //     //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9f9d0c46-72c5-4783-98ba-b8c369fafaa3.jpg',
        //     //     category: 'Vegetables',
        //     //     price: 6.21
        //     // },
        //     // {
        //     //     id: 2,
        //     //     name: 'Tomatoes, 2lb',
        //     //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_72b9b769-8110-4410-8340-c89d62e23f15.jpeg',
        //     //     category: 'Vegetables',
        //     //     price: 4.96
        //     // },
        //     // {
        //     //     id: 2,
        //     //     name: 'Mini Peppers, 24oz',
        //     //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7c242122-a7e8-4a81-ae5c-26b4f0fd7096.jpg',
        //     //     category: 'Vegetables',
        //     //     price: 7.45
        //     // },
        //     // {
        //     //     id: 2,
        //     //     name: 'Romaine Hearts, 5ct',
        //     //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fca783b0-be59-4475-8f43-fb2c13412ca2.jpg',
        //     //     category: 'Vegetables',
        //     //     price: 6.83
        //     // },
        //     // {
        //     //     id: 2,
        //     //     name: 'Org. Cucumber, 3ct',
        //     //     image: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b0393401-6b8a-4b35-9a34-c0ea42ccdc13.jpg',
        //     //     category: 'Vegetables',
        //     //     price: 7.45
        //     // }
        // ];


        // // let page = [products, baking]
        // let pagediv = {
        //     products: document.getElementById('freshproductsdiv'),
        //     baking: document.getElementById('bakingdiv')
        // }
        let products = [];
        let listCards  = [];
        // localStorage.clear(); 
        async function initApp(){
            products = await fetchData();
            console.log(products)
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
                id:19,
                name:'Cereals'
            },
            {
                id:20,
                name:'Pancakes & Waffles'
            },
            {
                id:21,
                name:'Breads'
            },
            {
                id:22,
                name:'Oatmeal& grits'
            },
            {
                id:23,
                name:'rollbacks'
            }
        ]
        
        const filters = [...new Set(btns.map((btn)=>{return btn}))]
        
        document.getElementById('btns').innerHTML=filters.map((btn)=>{
            var {name, id} = btn;
            return (
                "<button class = 'fil-p' onclick='filter("+(id)+`)'>${name}</a>`
            )
        }).join("");


        