import React, {  useState } from 'react'
import { userData } from '../../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/constant';
const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const [email, setEmail] = useState('sonu@gmail.com');
  const [password, setPassword] = useState('password');
  
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLoginSubmit  = async () => {
    if (email === '') {
      setEmailError("Email is required");
    } else {
      setEmailError(false);
    }

    if (password === '') {
      setPasswordError("Password is required");
    } else {
      setPasswordError(false);
    }

    if (email && password) {
      try{

        const response = await fetch(API_URL+'login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
            withCredentials: true,
            credentials: 'include'
        });

        const json = await response.json();
    
        if (json.statusCode === 200) {
            document.cookie = `token=${json.token}; path=/; secure; SameSite=Strict`;
            dispatch(userData(json.user));
            return navigate('/');
        }

        if (json.statusCode === 401) {
            console.log("Login Failed: ", json.error);
            setPasswordError(json.error);
        }
        
      }catch (error) {
        console.log("Catch Error: ", error);
        setPasswordError(error.error);
        console.log("Error: ", error);
      } 
    }
  }

  return <>
    <div className='flex justify-center my-10'>
        <div className="card card-side bg-base-100 shadow-sm  w-2/4">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Id</legend>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Email Id Or Username" 
                            value={email} 
                            onChange={ (e) => setEmail(e.target.value)} 
                        />
                        { emailError && <p className="label text-red-500">{emailError}</p> }
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                            type="password" 
                            className="input" 
                            placeholder="Password"   
                            value={password} 
                            onChange={ (e) => setPassword(e.target.value)} 
                        />
                        { passwordError && <p className="label  text-red-500">{passwordError}</p> }
                    </fieldset>
                    <fieldset className="fieldset card-actions justify-start">
                        <button className="btn btn-primary" onClick={ handleLoginSubmit}>Login</button>
                    </fieldset>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-link">Forgot Password?</button>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Login
