/*
import { useForm } from 'react-hook-form';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register(){
    let {register,handleSubmit,formState:{errors}} = useForm();
    let navigate = useNavigate()
    let [err,setErr] = useState('')

    async function onUserRegister(newUser){
        try{
            let res = await fetch('http://localhost:3000/users',
                {
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(newUser)
                });
                
            if(res.status===201)
                {
                    //navigate to Login component
                    navigate('/login')
                }
        }
        catch(err){
            console.log("error is ",err)
            setErr(err.message)
        }
    }


    return(
        <div>
            <h1 className='disaplay-2 text-center text-white'>User Registration</h1>

            {/* registration form /
            <div className="row text-warning">

                <div className="col-11 col-sm-9 col-md-6 mx-auto">
                    {/* server errors /
                    {err.length!=0 && <p className='fs-2 text-danger text-center' > {err} </p> }

                <form className='mx-auto mt-5' onSubmit={handleSubmit(onUserRegister)}>

                {/* username 
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id='username' className="form-control bg-secondary" {...register("username",{required:true,minLength:4,maxLength:15})} />
                    {/* printing validation errors 
                    {errors.username?.type==='required' && <p className="text-danger">*username should not be empty</p>}
                    {errors.username?.type==='minLength' && <p className="text-danger">*username should have atleast 4 character</p>}
                    {errors.username?.type==='maxLength' && <p className="text-danger">*username should not have more than 15 character</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id='password' className="form-control bg-secondary" {...register("password",{required:true,minLength:4,maxLength:10})}/>
                    {/* printing validation errors 
                    {errors.password?.type==='required' && <p className="text-danger">*password should not be empty</p>}
                    {errors.password?.type==='minLength' && <p className="text-danger">*password should have atleast 4 character</p>}
                    {errors.password?.type==='maxLength' && <p className="text-danger">*password should not have more than 10 character</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" id='email' className="form-control bg-secondary" {...register("email",{required:true})}/>
                    {/* printing validation errors 
                    {errors.email?.type==='required' && <p className="text-danger">*emailshould not be empty</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="number" id='mobile' className="form-control bg-secondary" {...register("mobile",{required:true,minLength:10,maxLength:10})}/>
                    {/* printing validation errors 
                    {errors.mobile?.type==='required' && <p className="text-danger">*mobile number should not be empty</p>}
                    {errors.mobile?.type==='minLength' && <p className="text-danger">*mobile number should have only 10 character</p>}
                    {errors.mobile?.type==='maxLength' && <p className="text-danger">*mobile number should have only 10 character</p>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="profile" className="form-label">Paste Profile Img URL</label>
                    <input type="text" id='profile' className="form-control bg-secondary" {...register("profileImage",{required:true})}/>
                    {/* printing validation errors 
                    {errors.profileImage?.type==='required' && <p className="text-danger">*image url should not be empty</p>}
                </div>

                {/* submit button 
                <button className='btn btn-success' type='submit'>Register</button>
                </form>
                </div>
            </div>
            
        </div>
    )
}

export default Register;


*/


//session-18

import { useForm } from 'react-hook-form';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register(){
    let {register,handleSubmit,formState:{errors}} = useForm();
    let navigate = useNavigate()
    let [err,setErr] = useState('')

    async function onUserRegister(newUser){
        try{
            let res = await fetch("http://localhost:4000/user-api/user",
                {
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(newUser)
                });
            let data = await res.json()    

            if(data.message==="user created")
                {
                    //navigate to Login component
                    navigate('/login')
                }
            else
            {
                setErr(data.message)
            }    
        }
        catch(err){
            console.log("error is ",err)
            setErr(err.message)
        }
    }


    return(
        <div>
            <h1 className='disaplay-2 text-center text-white'>User Registration</h1>

            {/* registration form */}
            <div className="row text-warning">

                <div className="col-11 col-sm-9 col-md-6 mx-auto">
                    {/* server errors */}
                    {err.length!=0 && <p className='fs-2 text-danger text-center' > {err} </p> }

                <form className='mx-auto mt-5' onSubmit={handleSubmit(onUserRegister)}>

                {/* username */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id='username' className="form-control bg-secondary" {...register("username",{required:true,minLength:4,maxLength:15})} />
                    {/* printing validation errors */}
                    {errors.username?.type==='required' && <p className="text-danger">*username should not be empty</p>}
                    {errors.username?.type==='minLength' && <p className="text-danger">*username should have atleast 4 character</p>}
                    {errors.username?.type==='maxLength' && <p className="text-danger">*username should not have more than 15 character</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id='password' className="form-control bg-secondary" {...register("password",{required:true,minLength:4,maxLength:10})}/>
                    {/* printing validation errors */}
                    {errors.password?.type==='required' && <p className="text-danger">*password should not be empty</p>}
                    {errors.password?.type==='minLength' && <p className="text-danger">*password should have atleast 4 character</p>}
                    {errors.password?.type==='maxLength' && <p className="text-danger">*password should not have more than 10 character</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" id='email' className="form-control bg-secondary" {...register("email",{required:true})}/>
                    {/* printing validation errors */}
                    {errors.email?.type==='required' && <p className="text-danger">*emailshould not be empty</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="number" id='mobile' className="form-control bg-secondary" {...register("mobile",{required:true,minLength:10,maxLength:10})}/>
                    {/* printing validation errors */}
                    {errors.mobile?.type==='required' && <p className="text-danger">*mobile number should not be empty</p>}
                    {errors.mobile?.type==='minLength' && <p className="text-danger">*mobile number should have only 10 character</p>}
                    {errors.mobile?.type==='maxLength' && <p className="text-danger">*mobile number should have only 10 character</p>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="profile" className="form-label">Paste Profile Img URL</label>
                    <input type="text" id='profile' className="form-control bg-secondary" {...register("profileImage",{required:true})}/>
                    {/* printing validation errors */}
                    {errors.profileImage?.type==='required' && <p className="text-danger">*image url should not be empty</p>}
                </div>

                {/* submit button */}
                <button className='btn btn-success' type='submit'>Register</button>
                </form>
                </div>
            </div>
            
        </div>
    )
}

export default Register;




// import React from 'react'
// import './Register.css'
// import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// function Register() {
//   let {register,handleSubmit,formState:{errors}}=useForm()
//   //error state
//   let [err,setErr]=useState('')
//   let navigate=useNavigate()
//   async function onUserRegister(newUser){
//     try{
//     let res=await fetch('http://localhost:4000/user-api/users',
//       {method:'POST',
//       headers:{"content-type":"application/json"},
//       body:JSON.stringify(newUser)
//     })
//     let data=await res.json()
//     if(data.message==="user created"){
//       navigate('/login')
//     }
//     else{
//       setErr(data.message)  //deal with message only if 
//     }
//    }catch(err){
//     console.log("err is ",err)
//     setErr(err.message)
//    }
//   }
//   return (
//     <div>
//       <p className="display-3 text-center">User Registration</p>
//       {/* Registration form */}
//       <div className="row">
//         <div className="col-11 col-sm-10 col-md-6 mx-auto">
//           {err.length!=0&&<p className='fs-2 text-danger text-center'>{err}</p>}
//         <form className='mx-auto mt-5 bg-light p-3 mb-5' onSubmit={handleSubmit(onUserRegister)}>
//         <div className="mb-3">
//           <label htmlFor="username" className='form-label'>Username</label>
//           <input type="text" id='username' className='form-control' {...register("username",{required:true,minLength:4,maxLength:12})}/>  
//           {errors.username?.type==='required'&&<p className='text-danger lead'>*Username is required</p>}
//           {errors.username?.type==='minLength'&&<p className='text-danger lead'>*Min Length should be 4</p>}
//           {errors.username?.type==='maxLength'&&<p className='text-danger lead'>*Max Length should not exceed 12</p>}
        
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className='form-label'>Password</label>
//           <input type="password" id='password' className='form-control' {...register("password",{required:true})} /> 
//           {errors.password?.type==='required'&&<p className='text-danger lead'>*Password is required</p>} 
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className='form-label'>Email</label>
//           <input type="email" id='email' className='form-control' {...register("email",{required:true})} /> 
//           {errors.email?.type==='required'&&<p className='text-danger lead'>*Email is required</p>} 
//         </div>
//         <div className="mb-3">
//           <label htmlFor="mobile" className='form-label'>Mobile Number</label>
//           <input type="number" id='mobile' className='form-control' {...register("mobile",{required:true,minLength:10,maxLength:10})} />  
//           {errors.mobile?.type==='required'&&<p className='text-danger lead'>*Mobile Number is required</p>}
//           {errors.username?.type==='minLength'&&<p className='text-danger lead'>*Length should be 10</p>}
//           {errors.username?.type==='maxLength'&&<p className='text-danger lead'>*Length should be 10</p>}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="profile" className='form-label'>Paste Profile image URL</label>
//           <input type="text" id='profile' className='form-control' {...register("profile",{required:true})} /> 
//           {errors.profile?.type==='required'&&<p className='text-danger lead'>*Profile pic is required</p>} 
//         </div>
//         <button className="btn btn-success">Submit</button>
//       </form>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Register




