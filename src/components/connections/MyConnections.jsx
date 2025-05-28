import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { API_URL } from '../../utils/constant';
import TeamShimmer from '../teams/TeamShimmer';
import TeamCard from '../teams/TeamCard';
import { getCookie } from '../../utils/helper';
import ToasterSuccess from '../toaster/ToasterSuccess';
import ToasterError from '../toaster/ToasterError';
import MyConnectionCard from './MyConnectionCard';

const MyConnection = () => {

const user = useSelector( store => store.user);
const [connections, setConnections] = useState(null);

 useEffect( () => {
    const token = getCookie('token')
    const getConnections = async () => {
        try{
            const response =await fetch(API_URL+'my-connections', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    id_user: user?.id,
                }),
                withCredentials: true,
                credentials: 'include'
            });
    
            const json = await response.json();
            setConnections(json.data);
        }catch(error){
            console.log("error: ", error)
        }
    }

    getConnections();
 }, [user]);


  return !connections ? <TeamShimmer /> : (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-8 p-10 w-2/4 mx-auto'>
        <h1 className='flex justify-center mx-10 text-3xl'>My Connections</h1>
        {
            connections && connections?.map( 
                connection =>
                    <MyConnectionCard key={connection.id} connection={connection}  /> 
            )
        }
    </div>
  )
}

export default MyConnection
