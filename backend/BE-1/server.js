/*
//create http server

//import and use express module
const exp_obj = require('express');
const app  = exp_obj();
//app is commonly used to store express-object
//test data
let usersList=[
  {id:1,name:'kp'},
  {id:2,name:'lucky'}
]
//  ##########MIDDLEWARES###########  
//add body parser middleware
app.use(exp_obj.json())

//sample middleware
const middleware1=(req,res,next)=>{
  //logic of middleware
  console.log("middleware-1 executed")
  next()
  //res.send({message:"res from middleware-1"})
}

const middleware2=(req,res,next)=>{
  console.log("middleware-2 executed")
  next()
}

//using middleware1
//application level middleware
app.use(middleware1) //executed for every request

//create sample rest api(req handlers-routes)

  //route for get users
  //syntax -  app.METHOD(path,request handler)
  //methods - get,put
  app.get('/users',(a,b)=>{
    //a - to hold request obj
    //b - to hold respnse obj
    //b.send({message:"all users"})
    //send response which is in json so use the above syntax

    b.send({message:"all users",payload:usersList})
  })
  
  //route to send one user by id
  app.get('/users/:id',middleware2,(req,res)=>{
    //get id from url
    let id0fUrl = Number(req.params.id); //=>{id : 20}
    //search the users array with ID
    let userById = usersList.find(i=>i.id===id0fUrl)
    //if user not found
    if(userById===undefined){
      res.send({message:"Invalid user ID"})
    }
    //if user found
    else{
      res.send({message:"one user",payload:userById})
    }
  })

  //route to create user
  app.post('/user',(req,res)=>{
      //get new user from req
      let newUser = req.body;
      //push newUser to users array
      usersList.push(newUser);
      //send res
      res.send({message:"New user created"})
  })

  //route to update user
  app.put('/user',(req,res)=>{

    //get mnodified user from req
    let modifiedUser = req.body
    //find returns obj
    //so find index of user in users array with modified user id
    let index = usersList.findIndex(i=>i.id===modifiedUser.id);
    //if user not found
    if(index===-1){
      res.send({message:"user not found"})
    }
    else{
      usersList[index] = modifiedUser;
      res.send({message:"user modified"})
    }
  });

  //route to update user
  app.delete('/user/:id',(req,res)=>{

    //get id from url
    let userIfOfurl = Number(req.params.id); 
    //get index of user to delete it
    let index = usersList.findIndex((i)=>i.id===userIfOfurl);
    //if user not found
    if(index===-1){
      res.send({message:"user not found"})
    }
    else{
      usersList.splice(index,1);
      res.send({message:"user deleted"})
    }
    
  })

//assign port number to http server of express app
app.listen(4000,()=>{
    console.log('http server started on port 4000')
})
//use node server.js to check if the http server is started or not

*/


//****   SESSION-16 part-1  after 40min   here we created userAip.js in APIs */
/*
const exp_obj = require('express');
const app  = exp_obj();

//import userApp express object from userApi
const userApp = require('./APIs/userApi');

//import productApp express object from userApi
const productApp = require('./APIs/productApi');

//if path starts with /user-api then forward request to userApp
app.use('/user-api',userApp);

//if path starts with /product-api then forward request to userApp
app.use('/product-api',productApp);

//if path starts with /cart-api then forward request to userApp
//app.use('/cart-api',cartApp);

//import mongoclient   use { } since it is a named export use same name MongoClient constructor
const {MongoClient}= require('mongodb')
let mClient = new MongoClient('mongodb://127.0.0.1:27017')

//connect to mongodb server
mClient.connect()
.then(()=>{
  console.log("DB is connected successfully")
  //we have assign port number only when DB server is running or else there is no use of hhtp server running
  app.listen(4000,()=>{
    console.log('http server started on port 4000')
  })
})
.catch(err=>console.log("ERROR generated in the connection",err))


*/


//****   SESSION-17 part-1  after 40min   here we created userAip.js in APIs */
/*
const exp_obj = require('express');
const app  = exp_obj();

//import userApp express object from userApi
const userApp = require('./APIs/userApi');

//import productApp express object from userApi
const productApp = require('./APIs/productApi');

//if path starts with /user-api then forward request to userApp
app.use('/user-api',userApp);

//if path starts with /product-api then forward request to userApp
app.use('/product-api',productApp);

//if path starts with /cart-api then forward request to userApp
//app.use('/cart-api',cartApp);

//import mongoclient   use { } since it is a named export use same name MongoClient constructor
const {MongoClient}= require('mongodb')
let mClient = new MongoClient('mongodb://127.0.0.1:27017')

//connect to mongodb server
mClient.connect()
.then((connectionObj)=>{
  //connecte to database fullstackS17db
  const fsObj = connectionObj.db('fullstackS17db')

  //connect to collection users in fullstackS17db
  const usersCollection = fsObj.collection('users')

  app.set('usersCollection',usersCollection);
  console.log("DB is connected successfully")
  //we have assign port number only when DB server is running or else there is no use of hhtp server running
  app.listen(4000,()=>{
    console.log('http server started on port 4000')
  })
})
.catch(err=>console.log("ERROR generated in the connection",err))
*/










//////////////////////
/*
//create http server
//import express module
const exp = require("express");
const app = exp();

//import dotenv
require('dotenv').config()  //dotenv identify the dotenv modules  

//import MongoClient
const { MongoClient } = require("mongodb");
//Create MongoClient object
let mClient = new MongoClient('process.env.DB_URL');//address of local data base server.

//connect to mongodb server
mClient
  .connect()
  .then((connectionObj) => {   
    //connect to a database(fsd)
    const fsddb=connectionObj.db('pvpdb');
    //connect to a collection
    const usersCollection=fsddb.collection('users')

    //connect to products
    const productsCollection=fsddb.collection('products')

    //connect to products
    const cartCollection=fsddb.collection('cart')

    //share collection obj tp APIS
    app.set('usersCollection',usersCollection);

    //share collection obj tp APIS
    app.set('productsCollection',productsCollection);

    //share collection obj tp APIS
    app.set('cartCollection',cartCollection);

    console.log("Db connection success");

    //assign port numbr to http server of express app
    app.listen(process.env,PORT, () => console.log("http server started on port 4000"));
  })
  .catch((err) => console.log("Error in DB connection", err));


  

//import userApp express object
const userApp = require("./APIs/userApi");
const productApp = require("./APIs/productsApi");

//if path starts with /user-api, forward req to userApp
app.use("/user-api", userApp);
//if path starts with /user-api, forward req to userApp
app.use("/product-api", productApp);

//handling invalid path
app.use('*',(req,res,next)=>{
  console.log(req.path)
  res.send({message:`Invalid path`})
})

//error handling middleware
app.use((err,req,res,next)=>{
  res.send({message:"error occurred",errorMessage:err.message})
})

*/



const exp=require('express')
const app=exp()

const cors = require('cors')
app.use(cors({
  origin:'http://localhost:5173'                 // origin:"*"  then it accepts from any origin
}))

//require('dotenv').config() 

const {MongoClient}=require('mongodb');  

//let mClient = new MongoClient('mongodb+srv://PRANEETH_K04:PRANEETH22501A0575@kpcluster.nd553z5.mongodb.net/')
let mClient = new MongoClient('mongodb+srv://PRANEETH_K04:PRANEETH22501A0575@kpcluster.nd553z5.mongodb.net/')
mClient.connect()
.then((connectionObj)=>{
  //connect to database
    const fsddb=connectionObj.db('pvpdb')

    //connect to collection
    const usersCollection=fsddb.collection('users')
    const productsCollection=fsddb.collection('products')
    const cartCollection=fsddb.collection('cart')

    //share collection obj to APIs
    app.set('usersCollection',usersCollection);
    app.set('productsCollection',productsCollection);
    app.set('cartCollection',cartCollection);

    console.log("db connection success")

    //assign port number to http server of express app
    app.listen(4000,()=>console.log("http server started at port 4000"))
})
.catch((err) => console.log("Error in DB connection", err));



//import userApp express object
const userApp=require("./APIs/userApi")
const productApp=require("./APIs/productsApi")

//if path starts with /user-api, forward req to userApp
app.use('/user-api',userApp)

//if path starts with /user-api, forward req to userApp
app.use("/product-api", productApp);

//handling invalid path
app.use('*',(req,res,next)=>{
    console.log(req.path)
    res.send({message:"invalid path"})
})
app.use((err,req,res,next)=>{
    res.send({message:"error occurred",errorMessage:err.message})
})