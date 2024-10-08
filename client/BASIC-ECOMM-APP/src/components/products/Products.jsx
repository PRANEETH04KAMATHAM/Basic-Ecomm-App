/*
import React from 'react'
import {  useState,useEffect} from "react";
import Product from '../../components/product/Product'

function Products() {

    let [productsObj,setproducts] = useState([]);
    
    async function getProducts(){
        let res = await fetch('http://localhost:3000/products')
        let productsdata = await res.json();
        setproducts(productsdata);
    }

    //to call a function then take useEffect
    useEffect(() => {
      getProducts()
    }, [])
    
  return (
    <div>
        <h1 className='text-center text-white' >Products</h1>

        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    productsObj.map(i=> 
                        (
                        <div key={i.id} className="col">
                            <Product i={i}/>
                        </div> 
                        )   
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Products

*/


///  SESSION-19

import React from 'react'
import {  useState,useEffect} from "react";
import Product from '../../components/product/Product'

function Products() {

    let [products,setproducts] = useState([]);
    
    async function getProducts(){
        let res = await fetch("http://localhost:4000/product-api/products");
        let productsData = await res.json();
        setproducts(productsData.payload);
    }

    //to call a function then take useEffect
    useEffect(() => {
      getProducts()
    }, [])
    
  return (
    <div>
        <h1 className='text-center text-white' >Products</h1>

        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    products.map((i)=> 
                        (
                        <div key={i.id} className="col">
                            <Product i={i}/>
                        </div> 
                        )   
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Products;