import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                console.log(data)
                setProducts(data)
            } catch(err) {

            }
        }
        fetchProducts();
    }, [])


  return (
    <div className='productsWrapper'>
        {products.map(product => (
            <div className='card' key={product.id}>
                <img src={product.image} alt='' />
                <h4>{product.title}</h4>
                <h3>${product.price}</h3>
            </div>
        ))}
    </div>
  )
}

export default Products
