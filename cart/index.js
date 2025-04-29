const Cart_data = [
    { 
      'id': '1',
      'name': 'Green Lace Saree',
      'price': '₹455',
      'img': 'https://rukminim2.flixcart.com/image/312/312/xif0q/sari/l/j/x/free-green-lace-saree-ragisha-enterprise-unstitched-original-imah5bvhtnmm2rgs.jpeg?q=70',
      'oldprice': '₹2999',
      'rating': '3.5',
      'offer': '91% off',
      'reviews': '(2345)',
      'description': 'Elegant green lace saree with intricate embroidery, perfect for festive occasions.',
      'category': 'Women\'s Clothing',
      'brand': 'Ragisha Enterprise',
      'availability': 'In Stock'
    },
    {  
      'id': '2',
      'name': 'Floral Cotton Kurti',
      'price': '₹699',
      'img': 'https://assets.ajio.com/medias/sys_master/root/20241003/ejWy/66fe70f9f9b8ef490b8f0805/-473Wx593H-464717564-multi-MODEL.jpg',
      'oldprice': '₹1499',
      'rating': '4.2',
      'offer': '53% off',
      'reviews': '(1789)',
      'description': 'Comfortable floral printed cotton kurti, suitable for daily wear.',
      'category': 'Women\'s Clothing',
      'brand': 'Aurelia',
      'availability': 'Limited Stock'
    },
    {  
      'id': '3',
      'name': 'Casual Sneakers',
      'price': '₹899',
      'img': 'https://kxadmin.metroshoes.com/product/71-8805-16-40/1200/71-8805LA16.jpg',
      'oldprice': '₹1999',
      'rating': '4.5',
      'offer': '55% off',
      'reviews': '(3200)',
      'description': 'Trendy white sneakers with soft cushioning for all-day comfort.',
      'category': 'Footwear',
      'brand': 'Sparx',
      'availability': 'In Stock'
    },
    {  
      'id': '4', 
      'name': 'Digital Smartwatch',
      'price': '₹1599',
      'img': 'https://uribaba.co.in/wp-content/uploads/2023/07/SW-2865-12.jpg',
      'oldprice': '₹4999',
      'rating': '4.1',
      'offer': '68% off',
      'reviews': '(1256)',
      'description': 'Feature-packed smartwatch with heart rate monitor and Bluetooth connectivity.',
      'category': 'Accessories',
      'brand': 'boAt',
      'availability': 'In Stock'
    },
    {  
      'id': '5',
      'name': 'Leather Wallet',
      'price': '₹799',
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcp9SGXDcy_wTyRz9RuCZox7_HUSP9DP4FQ&s',
      'oldprice': '₹1599',
      'rating': '4.3',
      'offer': '50% off',
      'reviews': '(876)',
      'description': 'Classic brown leather wallet with multiple card slots and a secure zipper.',
      'category': 'Accessories',
      'brand': 'WildHorn',
      'availability': 'In Stock'
    },
    {  
      'id': '6',
      'name': 'Noise-Canceling Headphones',
      'price': '₹2499',
      'img': 'https://mifo.com.au/cdn/shop/files/sonictrek-quietmix-2.jpg?v=1724366505',
      'oldprice': '₹6999',
      'rating': '4.6',
      'offer': '64% off',
      'reviews': '(1985)',
      'description': 'Premium wireless headphones with active noise cancellation and deep bass.',
      'category': 'Electronics',
      'brand': 'Sony',
      'availability': 'In Stock'
    },
    {   id: '7',
        name: 'Classic Aviator Sunglasses',
        price: '₹999', 
        img: 'https://www.aviationkart.com/cdn/shop/files/3453741793618.jpg?v=1718356510', 
        oldprice: '₹2999', 
        rating: '4.4', 
        offer: '45% off', 
        reviews: '(1500)', 
        description: 'Stylish aviator sunglasses with UV protection',
        category: 'Accessories', 
        brand: 'Ray-Ban', 
        availability: 'Limited Stock' 
    }
];

const productdata= document.getElementById("product-data");
Cart_data.forEach((products)=>{

    const card = document.createElement('div')
    card.classList.add("multiple-data")
    productdata.appendChild(card)

    const images = document.createElement('img')
    images.classList.add('product-images')
    images.src = products.img
    card.appendChild(images)

    const childcard = document.createElement('div')
    childcard.classList.add('child-cards')
    card.appendChild(childcard)

    const name = document.createElement('h4')
    name.classList.add('product-name')
    name.textContent = products.name
    childcard.appendChild(name)

    const price = document.createElement('p')
    price.classList.add('product-price')
    price.textContent = products.price
    childcard.appendChild(price)

    const delprice = document.createElement('del')
    delprice.classList.add('old-price')
    delprice.textContent = products.oldprice
    price.appendChild(delprice)

    const discount = document.createElement('span')
    discount.classList.add('discount-price')
    discount.textContent = products.offer
    price.appendChild(discount)


})

