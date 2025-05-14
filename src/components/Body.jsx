import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { userData } from '../utils/userSlice'
import { API_URL } from '../utils/constant'
import { getCookie } from '../utils/helper'

const Body = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = useSelector( (store) => store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
 
  const location = useLocation();
  
  const fetchUser = async () => {
    
    const url = location.pathname;

    if(url === '/login' || url === '/sign-up'){
      return;
    }

    try{
      let token = document.cookie.split('; ').find(row => row.startsWith('token='));
    
      if(token){
        token = token.split('=')[1];
      }

      const response = await fetch(API_URL + "user", {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
      });    
      const json = await response.json()
      
       if (json?.status === 'success') {
            document.cookie = `token=${token}; path=/; secure; SameSite=Strict`;
            dispatch(userData(json.data.user));
            setIsLoggedIn(true);
        }

        if (json?.status !== 'success') {
            return navigate('/login');
        }
        
    }catch(err){
        console.log("Error fetching user data: -", err)
        return navigate('/login');
    }
  }



  
  useEffect( () => {
      if(!user) {
        fetchUser()
      } 

      let token = getCookie('token');
    

      if(token){
        setIsLoggedIn(true);
      }

      if(!token){
        setIsLoggedIn(false);
        return navigate('/login')
      }

  }, [location.pathname, navigate])

  return <>
    <Navbar isLoggedIn={isLoggedIn} />
    <Outlet />
    <Footer />
  </>
}

export default Body
