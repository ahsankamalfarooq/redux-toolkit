import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';

const Products = () => {
    const {data : products , status} = useSelector((state)=> state.product)
    const dispatch = useDispatch()
    // const [products, setProducts] = useState([]);


    useEffect(() => {
        dispatch(fetchProducts())
        // const fetchProducts = async () => {
        //     try{
        //         const res = await fetch('https://fakestoreapi.com/products')
        //         const data = await res.json()
        //         console.log(data)
        //         setProducts(data)
        //     } catch(err) {

        //     }
        // }
        // fetchProducts();
    }, [])


const handleAdd = (product) => {
    dispatch(add(product))

}

 if (status === STATUSES.LOADING) {
    return  <h2>Loading ...</h2>
 }
 if (status === STATUSES.ERROR) {
    return  <h2>Something went wrong...</h2>
 }


  return (
    <div className='productsWrapper'>
        {products.map(product => (
            <div className='card' key={product.id}>
                <img src={product.image} alt='' />
                <h4>{product.title}</h4>
                <h5>${product.price}</h5>
                <button onClick={()=> handleAdd(product)} className='btn'>Add to cart</button>
            </div>
        ))}
    </div>
  )
}

export default Products
