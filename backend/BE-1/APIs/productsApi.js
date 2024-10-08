//here we can create products routes
/*
//create mini express app
const exp_obj = require('express');
const productApp = exp_obj.Router();

const expressAsyncHandlerObj = require('express-async-handler')
//product routes
productApp.get('/products',expressAsyncHandlerObj(async(req,res)=>{
    //res.send({message:'all products'})

    //get products collection object
    let productsCollectionObj = req.app.get('/productsCollection')

    //get all products
    let productsList = await productsCollectionObj.find().toArray()

    //send res
    res.send({message:'products',pauload:productsList})
    
}))

//get product by id
productApp.get('/products/id',expressAsyncHandlerObj(async(req,res)=>{

    //get products collection object
    let productsCollectionObj = req.app.get('/productsCollection')

    //get all products
    let productid = Number(req.params.id)

    //read product by its id
    let product = await productsCollectionObj.findOne({id:productid})

    //send res
    res.send({message:'products',pauload:product})
    
}))

//export 
module.exports = productApp;

*/




//create mini exp app
const exp=require("express");
const productApp=exp.Router();
const expressAsyncHandler=require('express-async-handler');

//get all products
productApp.get('/products',expressAsyncHandler(async(req,res)=>{
    //get prod coll obj
    let productsCollection=req.app.get('productsCollection')

    //get all products
    let productsList=await productsCollection.find().toArray()

    //send res
    res.send({message:'products',payload:productsList})
}))

//get a product by id
productApp.get('/products/:id',expressAsyncHandler(async(req,res)=>{
    //get prod call obj
    let productsCollection=req.app.get('productsCollection')
    //get product id from url
    let productId=Number(req.params.id)
    //read product by id
    let product=await productsCollection.findOne({id:productId})
    //send res
    res.send({message:'products',payload:product})

}))

module.exports =productApp;