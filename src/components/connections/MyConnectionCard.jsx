import React from 'react'
import { Link } from 'react-router-dom'
import MyConnection from './MyConnections'
import { API_URL } from '../../utils/constant'
import { getCookie } from '../../utils/helper'
import ToasterSuccess from '../toaster/ToasterSuccess'
import ToasterError from '../toaster/ToasterError'

const MyConnectionCard = ({connection}) => {

    const handleAccept = async (id) =>  {

        const token = getCookie('token');

        const response = await fetch(API_URL + `connections/${id}/accept`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true,
            credentials: 'include'
        });

        const json = await response.json();
        
       
        if(json?.status === 'success'){
            console.log("Team Created Successfully")
            ToasterSuccess("Team Created Successfully")
        }
        
        if(json?.status === 'error'){
            console.log("error: ",json.message)
            ToasterError(json.message)
        }
    }

    
    const handleReject = async (id) =>  {

        const token = getCookie('token');

        const response = await fetch(API_URL + `connections/${id}/reject`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true,
            credentials: 'include'
        });

        const json = await response.json();

        if(json?.status === 'success'){
            console.log("Team Created Successfully")
            ToasterSuccess("Team Created Successfully")
        }
        
        if(json?.status === 'error'){
            console.log("error: ",json.message)
            ToasterError(json.message)
        }
    }

  return (
   
    <div className="card card-side bg-base-100 shadow-sm h-4/4">
        <figure style={{ width: '300px',height: 'auto', overflow: "hidden",position: "relative"}}>
            <img
                src={connection?.team?.logo ? connection?.team?.logo : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
                alt={connection?.team?.logo??'movie'} 
                className=''
                style={{ width: '100%',height: '229px', objectFit: 'cover', display: "block" , padding: "20px"}}
                />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{connection?.team?.name}</h2>
            <p>{connection?.team?.short_desc}</p>
            <p>Team Owner: {connection?.team?.user?.name}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-error" onClick={ () => handleReject(connection.id) }>Reject</button>
                <button className="btn btn-success" onClick={ () => handleAccept(connection.id) }>Accept</button>
                
            </div>
            {
                (connection.status  == 'rejected') &&  <span className='text-red-300 flex justify-end'>You have rejected this request.</span>
            }
        </div>
    </div>
  )
}

export default MyConnectionCard
