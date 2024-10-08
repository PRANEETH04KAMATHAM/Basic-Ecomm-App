/*
import { useForm } from 'react-hook-form'
import './EditUser.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { userLoginContext } from '../../contexts/userLoginContext';

function EditUser() {

  let {register,handleSubmit,setValue,formState:{errors}} = useForm();
  let { currentUser ,setCurrentUser} = useContext(userLoginContext);
  
    let navigate = useNavigate();
    let [err,setErr] = useState('')

    async function onSave(modifiedUser){
        console.log(modifiedUser)  
      try{
          let res = await fetch(`http://localhost:3000/users/${currentUser.id}`,
              {
                  method:'PUT',
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(modifiedUser)
              });
              console.log(res)

          if(res.status===200)
              {
                  //navigate to Login component
                  modifiedUser.id=currentUser.id;
                  setCurrentUser(modifiedUser)
                  navigate("/user-profile")
              }
      }
      catch(err){
          console.log("error is ",err)
          setErr(err.message)
      }
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-white' >User-profile</h1>
      </div>

      <div className="row text-warning">

                <div className="col-11 col-sm-9 col-md-6 mx-auto">
                    {/* server errors 
                    {err.length!=0 && <p className='fs-2 text-danger text-center' > {err} </p> }

                <form className='mx-auto mt-5' onSubmit={handleSubmit(onSave)}>

                {/* username 
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id='username' className="form-control bg-secondary" {...register("username",{required:true,minLength:4,maxLength:15})} 
                     value={setValue("username", currentUser.username)}/>

                    {/* printing validation errors 
                    {errors.username?.type==='required' && <p className="text-danger">*username should not be empty</p>}
                    {errors.username?.type==='minLength' && <p className="text-danger">*username should have atleast 4 character</p>}
                    {errors.username?.type==='maxLength' && <p className="text-danger">*username should not have more than 15 character</p>}
                </div>

                {/* password 
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id='password' className="form-control bg-secondary" {...register("password",{required:true,minLength:4,maxLength:10})}

                    value={setValue('password',currentUser.password)} />

                    {/* printing validation errors 
                    {errors.password?.type==='required' && <p className="text-danger">*password should not be empty</p>}
                    {errors.password?.type==='minLength' && <p className="text-danger">*password should have atleast 4 character</p>}
                    {errors.password?.type==='maxLength' && <p className="text-danger">*password should not have more than 10 character</p>}
                </div>

                {/* email 
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" id='email' className="form-control bg-secondary" {...register("email",{required:true})}

                    value={setValue('email',currentUser.email)}/>

                    {/* printing validation errors 
                    {errors.email?.type==='required' && <p className="text-danger">*emailshould not be empty</p>}
                </div>

                {/* mobile 
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="number" id='mobile' className="form-control bg-secondary" {...register("mobile",{required:true,minLength:10,maxLength:10})}

                    value={setValue('mobile',currentUser.mobile)}/>

                    {/* printing validation errors 
                    {errors.mobile?.type==='required' && <p className="text-danger">*mobile number should not be empty</p>}
                    {errors.mobile?.type==='minLength' && <p className="text-danger">*mobile number should have only 10 character</p>}
                    {errors.mobile?.type==='maxLength' && <p className="text-danger">*mobile number should have only 10 character</p>}
                </div>

                {/* image 
                <div className="mb-3">
                    <label htmlFor="profile" className="form-label">Paste Profile Img URL</label>
                    <input type="text" id='profile' className="form-control bg-secondary" {...register("profileImage",{required:true})}
                   
                   value={setValue('profileImage',currentUser.profileImage)}
                    disabled />

                    {/* printing validation errors 
                     {errors.profileImage?.type==='required' && <p className="text-danger">*image url should not be empty</p>} 
                </div>

                {/* submit button 
                <button className='btn btn-success' type='submit'>Save</button>
                </form>
                </div>
            </div>
    </div>
  )
}

export default EditUser;

*/









//    SESSION - 19


import { useForm } from 'react-hook-form'
import './EditUser.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { userLoginContext } from '../../contexts/userLoginContext';

function EditUser() {

  let {register,handleSubmit,setValue,formState:{errors}} = useForm();
  let { currentUser ,setCurrentUser} = useContext(userLoginContext);
  
    let navigate = useNavigate();
    let [err,setErr] = useState('')

    //save modified user after edit
    async function onSave(modifiedUser){
        console.log(modifiedUser)  
      try{
          let res = await fetch('http://localhost:4000/user-api/user',
              {
                  method:'PUT',
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(modifiedUser)
              });
              //console.log(res)
            let data=await res.json()
            console.log("data :",data)

          if(data.message==='User modified')
              {
                  //navigate to Login component
                  modifiedUser.id=currentUser.id;
                  setCurrentUser(modifiedUser)
                  navigate("/user-profile")
              }
      }
      catch(err){
          console.log("error is ",err)
          setErr(err.message)
      }
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-white' >User-profile</h1>
      </div>

      <div className="row text-warning">

                <div className="col-11 col-sm-9 col-md-6 mx-auto">
                    {/* server errors */}
                    {err.length!=0 && <p className='fs-2 text-danger text-center' > {err} </p> }

                <form className='mx-auto mt-5' onSubmit={handleSubmit(onSave)}>

                {/* username */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id='username' className="form-control bg-secondary" {...register("username",{required:true,minLength:4,maxLength:15})} 
                     value={setValue("username", currentUser.username)}/>

                    {/* printing validation errors */}
                    {errors.username?.type==='required' && <p className="text-danger">*username should not be empty</p>}
                    {errors.username?.type==='minLength' && <p className="text-danger">*username should have atleast 4 character</p>}
                    {errors.username?.type==='maxLength' && <p className="text-danger">*username should not have more than 15 character</p>}
                </div>

                {/* password */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id='password' className="form-control bg-secondary" {...register("password",{required:true,minLength:4,maxLength:10})}

                    value={setValue('password',currentUser.password)} />

                    {/* printing validation errors */}
                    {errors.password?.type==='required' && <p className="text-danger">*password should not be empty</p>}
                    {errors.password?.type==='minLength' && <p className="text-danger">*password should have atleast 4 character</p>}
                    {errors.password?.type==='maxLength' && <p className="text-danger">*password should not have more than 10 character</p>}
                </div>

                {/* email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" id='email' className="form-control bg-secondary" {...register("email",{required:true})}

                    value={setValue('email',currentUser.email)}/>

                    {/* printing validation errors */}
                    {errors.email?.type==='required' && <p className="text-danger">*emailshould not be empty</p>}
                </div>

                {/* mobile */}
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="number" id='mobile' className="form-control bg-secondary" {...register("mobile",{required:true,minLength:10,maxLength:10})}

                    value={setValue('mobile',currentUser.mobile)}/>

                    {/* printing validation errors */}
                    {errors.mobile?.type==='required' && <p className="text-danger">*mobile number should not be empty</p>}
                    {errors.mobile?.type==='minLength' && <p className="text-danger">*mobile number should have only 10 character</p>}
                    {errors.mobile?.type==='maxLength' && <p className="text-danger">*mobile number should have only 10 character</p>}
                </div>

                {/* image */} 
                <div className="mb-3">
                    <label htmlFor="profile" className="form-label">Paste Profile Img URL</label>
                    <input type="text" id='profile' className="form-control bg-secondary" {...register("profileImage",{required:true})}
                   
                   value={setValue('profileImage',currentUser.profileImage)}
                    disabled />

                    {/* printing validation errors */}
                     {errors.profileImage?.type==='required' && <p className="text-danger">*image url should not be empty</p>} 
                </div>

                {/* submit button */}
                <button className='btn btn-success' type='submit'>Save</button>
                </form>
                </div>
            </div>
    </div>
  )
}

export default EditUser;

