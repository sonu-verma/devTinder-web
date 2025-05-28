import React, { useEffect } from 'react'
import TeamCard from './TeamCard'
import { API_URL } from '../../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { teamsData } from '../../utils/teamSlice'
import TeamShimmer from './TeamShimmer'
import { Link } from 'react-router-dom'
import { getCookie } from '../../utils/helper'

const Teams = () => {

 const dispatch = useDispatch()
 const teams = useSelector((store) => store.teams)
 const teamData = async () => {
    const token = getCookie('token')
    const response = await fetch(API_URL+"teams", {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        withCredentials: true,
        credentials: 'include'
    });
    const json = await response.json()
    dispatch(teamsData(json.data))
 } 

 useEffect( () => {
    teamData()
 }, [])
    
  return !teams ? <TeamShimmer /> : (
    <div>
        <div className='flex justify-between items-center mx-10'>
            <h1 className='flex justify-center my-4 font-bold text-5xl'>Teams</h1>
            <Link to="/team/create" className='flex justify-center bg-blue-400 text-white p-2 rounded-xl mr-5'>Add Team</Link>
        </div>
        <div className='grid grid-cols-1 gap-8 p-10 w-3/4 mx-auto'>
            {
                teams?.map( (team) => {
                    return <TeamCard key={team.id} team={team} />
                })
            }
        </div>
    </div>
  )
}

export default Teams
