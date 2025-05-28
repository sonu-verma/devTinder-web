import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { API_URL } from '../../utils/constant';
import TeamShimmer from '../teams/TeamShimmer';
import TeamCard from '../teams/TeamCard';
import { getCookie } from '../../utils/helper';
import ToasterSuccess from '../toaster/ToasterSuccess';
import ToasterError from '../toaster/ToasterError';

const TeamConnection = () => {

const user = useSelector( store => store.user);
const [connections, setConnections] = useState(null);

 useEffect( () => {
    const token = getCookie('token')
    const getConnections = async () => {
        try{
            const response =await fetch(API_URL+'connections', {
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



 const connectionHandleEvent = async (teamId) => {
    try {
        const token = getCookie('token');
       
        const response = await fetch(API_URL + `teams/${teamId}/request-connection`, {
            method: 'POST',
            credentials: 'include',
            withCredentials: true,
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: {}
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
    } catch (err){
        console.log("catch: ",err)
        ToasterError(err)
    }
 }

  return !connections ? <TeamShimmer /> : (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10'>
        { 
            connections && connections?.map( 
                connection =>
                    <TeamCard key={connection.id} team={connection} type="connection" handleConnection={ () => connectionHandleEvent(connection?.id) } /> 
            )
        }
    </div>
  )
}

export default TeamConnection
