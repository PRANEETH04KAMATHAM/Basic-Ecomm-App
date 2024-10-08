/*
//create min-express application
const exp_obj = require('express');
const userApp  = exp_obj.Router();   
 
//add body parser middleware
userApp.use(exp_obj.json())

let usersList=[
  {id:1,name:'kp'},
  {id:2,name:'lucky'}
]

//create sample rest api(req handlers-routes)
userApp.get('/users',(a,b)=>{
  //a - to hold request obj
  //b - to hold respnse obj
  //b.send({message:"all users"})
  //send response which is in json so use the above syntax

  b.send({message:"all users",payload:usersList})
})

//route to send one user by id
userApp.get('/users/:id',(req,res)=>{
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
userApp.post('/user',(req,res)=>{
  //get new user from req
  let newUser = req.body;
  //push newUser to users array
  usersList.push(newUser);
  //send res
  res.send({message:"New user created"})
})

//route to update user
userApp.put('/user',(req,res)=>{

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
userApp.delete('/user/:id',(req,res)=>{

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

//export userApp
module.exports = userApp;
*/





/** SESSION-17  */
/*
//create min-express application
const exp_obj = require('express');
const userApp  = exp_obj.Router();   
 
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')


//add body parser middleware
userApp.use(exp_obj.json())



//create sample rest api(req handlers-routes)
userApp.get('/users',async (req,res)=>{

  //get usersCollection obj from server.js
  const usersCollection = req.app.get('usersCollection')

  //get users data from usersCollection of DB
  let usersList = await usersCollection.find().toArray()

  //send users data to client
  res.send({messsage:'users',payload:usersList});
})

//route to send one user by name
userApp.get('/users/:username',async (req,res)=>{
  //get usersCollection obj from server.js
  const usersCollection = req.app.get("usersCollection");
  //get id from url
  const usernameOfUrl=req.params.username;
  //find user by id
  let user=await usersCollection.findOne({username:{$eq:usernameOfUrl}})
  //send res
  res.send({message:"one user",payload:user})
})

//route to create user
userApp.post('/user',async(req,res)=>{

  //get usersCollection obj from server.js
  const usersCollection = req.app.get('usersCollection')

  //get new user from client
  const newUser = req.body;

  //verify duplicate user
  let existingUser=await usersCollection.findOne({username:newUser.username})

  //if user already existed
  if(existingUser!==null){
    res.send({message:"User already existed"})
  }
  //if user not existed
  else{
    //hash the password
    let hashedpassword= await bcryptjs.hash(newUser.password,7)
    //replace plain password with hashed password in newUser
    newUser.password=hashedpassword;
    //save user
    await usersCollection.insertOne(newUser)
    //send res
    res.send({message:"user created"})
  }

})




//user login(authentication)(public route)
userApp.post('/login',async(req,res)=>{
  //get usersCollection obj
const usersCollection = req.app.get("usersCollection");
//get new UserCredentils from client
const userCred=req.body;
//verify username
let dbUser=await usersCollection.findOne({username:userCred.username})
//if user not existed
if(dbUser===null){
 res.send({message:"Invalid username"})
}
//if user found,compare passwords
else{
   let result=await bcryptjs.compare(userCred.password,dbUser.password)
   //if passwords not matched
   if(result===false){
     res.send({message:"Invalid password"})
   }
   //if passwords are matched
   else{
     //create JWT token
      let signedToken= jwt.sign({username:userCred.username},'abcdef',{expiresIn:'1h'})
     //send res
     res.send({message:"login success",token:signedToken,user:dbUser})
   }
}
})

//route to update user
userApp.put('/user',(req,res)=>{


});

//route to update user
userApp.delete('/user/:id',(req,res)=>{


})

//export userApp
module.exports = userApp;
*/






//////////////////////////         session-18          ///////////////////////////////////

/*
//create mini-express app
const exp = require("express");

const userApp = exp.Router();
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const tokenVerify=require('../middlewares/tokenVerify.js')
const expressAsyncHandler=require('express-async-handler')

//add body parser middleware
userApp.use(exp.json());

//create sample rest api(req handlers- routes)
//route to get users(protected route)
userApp.get("/users", tokenVerify,expressAsyncHandler(async (req, res) => {
  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get users data from usersCollection of DB
  let usersList = await usersCollection.fnd().toArray();
  //send users data to client
  res.send({ message: "users", payload: usersList });
}));



//route to send one user by id(protected route)
userApp.get("/users/:username", tokenVerify,expressAsyncHandler(async(req, res) => {
  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get id from url
  const usernameOfUrl=req.params.username;
  //find user by id
  let user=await usersCollection.findOne({username:{$eq:usernameOfUrl}})
  //send res
  res.send({message:"one user",payload:user})
}));




//route to create user (public route)
userApp.post("/user", expressAsyncHandler(async(req, res) => {

  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get new User from client
  const newUser=req.body;

   //verify duplicate user
   let existingUser=await usersCollection.findOne({username:newUser.username})
   //if user already existed
   if(existingUser!==null){
     res.send({message:"User already existed"})
   }
   //if user not existed
   else{
     //hash the password
     let hashedpassword= await bcryptjs.hash(newUser.password,7)
     //replace plain password with hashed password in newUser
     newUser.password=hashedpassword;
     //save user
     await usersCollection.insertOne(newUser)
     //send res
     res.send({message:"user created"})
   }

}));



//user login(authentication)(public route)
userApp.post('/login',expressAsyncHandler(async(req,res)=>{
  //get usersCollection obj
const usersCollection = req.app.get("usersCollection");
//get new UserCredentils from client
const userCred=req.body;
//verify username
let dbUser=await usersCollection.findOne({username:userCred.username})
//if user not existed
if(dbUser===null){
 res.send({message:"Invalid username"})
}
//if user found,compare passwords
else{
   let result=await bcryptjs.compare(userCred.password,dbUser.password)
   //if passwords not matched
   if(result===false){
     res.send({message:"Invalid password"})
   }
   //if passwords are matched
   else{
     //create JWT token
      let signedToken= jwt.sign({username:userCred.username},'abcdef',{expiresIn:'1h'})
     //send res
     res.send({message:"login success",token:signedToken,user:dbUser})
   }
}

}))


//route to update user(protected route)
userApp.put("/user", tokenVerify,expressAsyncHandler(async(req, res) => {
      //get usersCollection obj
      const usersCollection = req.app.get("usersCollection");
      //get modified user from client
      let modifiedUser=req.body;
      //modify by username
      await usersCollection.updateOne({username:modifiedUser.username},{$set:{...modifiedUser}})
      res.send({message:"User modified"})
}));

//route to delete user(protected route)
userApp.delete("/user/:id", tokenVerify,expressAsyncHandler((req, res) => {
  
}));

//export userApp
module.exports = userApp;

*/


/*
//create mini-express app
const exp = require("express");

const userApp = exp.Router();
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const tokenVerify=require('../middlewares/tokenVerify.js')
const expressAsyncHandler=require('express-async-handler')

//add body parser middleware
userApp.use(exp.json());

//create sample rest api(req handlers- routes)
//route to get users(protected route)
userApp.get("/users", tokenVerify,expressAsyncHandler(async (req, res) => {
  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get users data from usersCollection of DB
  let usersList = await usersCollection.fnd().toArray();
  //send users data to client
  res.send({ message: "users", payload: usersList });
}));



//route to send one user by id(protected route)
userApp.get("/users/:username", tokenVerify,expressAsyncHandler(async(req, res) => {
  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get id from url
  const usernameOfUrl=req.params.username;
  //find user by id
  let user=await usersCollection.findOne({username:{$eq:usernameOfUrl}})
  //send res
  res.send({message:"one user",payload:user})
}));




//route to create user (public route)
userApp.post("/user", expressAsyncHandler(async(req, res) => {

  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get new User from client
  const newUser=req.body;

   //verify duplicate user
   let existingUser=await usersCollection.findOne({username:newUser.username})
   //if user already existed
   if(existingUser!==null){
     res.send({message:"User already existed"})
   }
   //if user not existed
   else{
     //hash the password
     let hashedpassword= await bcryptjs.hash(newUser.password,7)
     //replace plain password with hashed password in newUser
     newUser.password=hashedpassword;

     //add products 
     newUser.products=[];

     //save user
     await usersCollection.insertOne(newUser)
     //send res
     res.send({message:"user created"})
   }
}));



//user login(authentication)(public route)
userApp.post('/login',expressAsyncHandler(async(req,res)=>{
  //get usersCollection obj
const usersCollection = req.app.get("usersCollection");
//get new UserCredentils from client
const userCred=req.body;
//verify username
let dbUser=await usersCollection.findOne({username:userCred.username})
//if user not existed
if(dbUser===null){
 res.send({message:"Invalid username"})
}
//if user found,compare passwords
else{
   let result=await bcryptjs.compare(userCred.password,dbUser.password)
   //if passwords not matched
   if(result===false){
     res.send({message:"Invalid password"})
   }
   //if passwords are matched
   else{
     //create JWT token
      let signedToken= jwt.sign({username:userCred.username},'abcdef',{expiresIn:'1h'})
     //send res
     res.send({message:"login success",token:signedToken,user:dbUser})
   }
}

}))






//route to update user(protected route)
userApp.put("/user", tokenVerify,expressAsyncHandler(async(req, res) => {
      //get usersCollection obj
      const usersCollection = req.app.get("usersCollection");
      //get modified user from client
      let modifiedUser=req.body;
      //modify by username
      await usersCollection.updateOne({username:modifiedUser.username},{$set:{...modifiedUser}})
      res.send({message:"User modified"})
}));

//route to delete user(protected route)
userApp.delete("/user/:id", tokenVerify,expressAsyncHandler(async(req, res) => {
  
}));


//add selected product to a specified user cart
userApp.put('/add-to-cart/:username',expressAsyncHandler(async(req,res)=>{
  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get username from url
  let usernamefromurl = req.params.username
  //get cart obj
  let productObj = req.body;
  let result = await usersCollection.updateOne({username:usernamefromurl},{$push:{products:productObj}});
  res.send({message:"product added",payload:result});
}))


//export userApp
module.exports = userApp;




*/


//   SESSION-19
//create mini-express app
const exp = require("express");

const userApp = exp.Router();
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const tokenVerify=require('../middlewares/tokenVerify.js')
const expressAsyncHandler=require('express-async-handler')

//add body parser middleware
userApp.use(exp.json());

//create sample rest api(req handlers- routes)
//route to get users(protected route)
userApp.get("/users", tokenVerify,expressAsyncHandler(async (req, res) => {
  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get users data from usersCollection of DB
  let usersList = await usersCollection.fnd().toArray();
  //send users data to client
  res.send({ message: "users", payload: usersList });
}));



//route to send one user by id(protected route)
userApp.get("/users/:username", tokenVerify,expressAsyncHandler(async(req, res) => {
  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get id from url
  const usernameOfUrl=req.params.username;
  //find user by id
  let user=await usersCollection.findOne({username:{$eq:usernameOfUrl}})
  //send res
  res.send({message:"one user",payload:user})
}));




//route to create user (public route)
userApp.post("/user", expressAsyncHandler(async(req, res) => {

  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get new User from client
  const newUser=req.body;

   //verify duplicate user
   let existingUser=await usersCollection.findOne({username:newUser.username})
   //if user already existed
   if(existingUser!==null){
     res.send({message:"User already existed"})
   }
   //if user not existed
   else{
     //hash the password
     let hashedpassword= await bcryptjs.hash(newUser.password,7)
     //replace plain password with hashed password in newUser
     newUser.password=hashedpassword;

     //add products 
     newUser.products=[];

     //save user
     await usersCollection.insertOne(newUser)
     //send res
     res.send({message:"user created"})
   }
}));



//user login(authentication)(public route)
userApp.post('/login',expressAsyncHandler(async(req,res)=>{
  //get usersCollection obj
const usersCollection = req.app.get("usersCollection");
//get new UserCredentils from client
const userCred=req.body;
//verify username
let dbUser=await usersCollection.findOne({username:userCred.username})
//if user not existed
if(dbUser===null){
 res.send({message:"Invalid username"})
}
//if user found,compare passwords
else{
   let result=await bcryptjs.compare(userCred.password,dbUser.password)
   //if passwords not matched
   if(result===false){
     res.send({message:"Invalid password"})
   }
   //if passwords are matched
   else{
     //create JWT token
      let signedToken= jwt.sign({username:userCred.username},'abcdef',{expiresIn:'1h'})
     //send res
     res.send({message:"login success",token:signedToken,user:dbUser})
   }
}

}))



//route to update user(protected route)
userApp.put("/user", tokenVerify,expressAsyncHandler(async(req, res) => {
      //get usersCollection obj
      const usersCollection = req.app.get("usersCollection");
      //get modified user from client
      let modifiedUser=req.body;
      //modify by username
      await usersCollection.updateOne({username:modifiedUser.username},{$set:{...modifiedUser}})
      res.send({message:"User modified"})
}));

//route to delete user(protected route)
userApp.delete("/user/:id", tokenVerify,expressAsyncHandler(async(req, res) => {
  
}));


//add selected product to a specified user cart
userApp.put('/add-to-cart/:username',expressAsyncHandler(async(req,res)=>{
  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");
  //get username from url
  let usernamefromurl = req.params.username
  //get cart obj
  let productObj = req.body;
  console.log(productObj);
  let result = await usersCollection.updateOne({username:usernamefromurl},{$push:{products:productObj}});
  res.send({message:"product added",payload:result});
}))


//get latest cart
userApp.get('/cart',expressAsyncHandler(async(req,res)=>{

  //get usersCollection obj
  const usersCollection = req.app.get("usersCollection");

  //get username from url
  let usernamefromurl = req.params.username;

  //get cart
  let cart = await usersCollection.findOne({username:usernamefromurl},{products:1})

  //send res
  res.send({message:"cart",payload:cart})
}))




//export userApp
module.exports = userApp;