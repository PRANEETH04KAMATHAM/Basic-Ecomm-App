import './Login.css'
import { useForm } from 'react-hook-form';
import { useContext} from 'react';
import { userLoginContext } from '../../contexts/userLoginContext';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login(){

    let { loginUser, userLoginStatus ,err} = useContext(userLoginContext);

    const navigate = useNavigate();

    let {register,handleSubmit,formState:{errors}} = useForm();

    //on user submit
    function onUserLogin(userLog){
        loginUser(userLog);
        //console.log(userLog);
        console.log(userLoginStatus);
    }

    useEffect(() => {
        if (userLoginStatus === true) {
             //save token in session storage
          navigate("/user-profile");
          //console.log(userLoginStatus)
        }
      }, [userLoginStatus]);

    return(
        <div>
            <div>
            <h1 className='disaplay-2 text-center text-white'>Login</h1>

            {/* registration form */}
            <div className="row text-warning">

                <div className="col-11 col-sm-9 col-md-6 mx-auto">
                    {/* server errors */}
                     {err.length!=0 && <p className='fs-3 text-danger text-center' > {err} </p> }

                <form className='mx-auto mt-5' onSubmit={handleSubmit(onUserLogin)}>

                {/* username */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id='username' className="form-control bg-secondary" {...register("username",{required:true,minLength:4,maxLength:15})} />

                     {/* validation error message on username */}
                    {errors.username?.type === "required" && (
                    <p className="text-danger lead">*Username is required</p>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id='password' className="form-control bg-secondary" {...register("password",{required:true,minLength:4,maxLength:10})}/>
                    {/* validation error message on password */}
                    {errors.password?.type === "required" && (
                    <p className="text-danger lead">*Password is required</p>
                    )}
                </div>

                {/* submit button */}
                <button className='btn btn-success' type='submit'>Login</button>
                </form>
                </div>
            </div>
            
        </div>
        </div>

        
    )
}

export default Login;