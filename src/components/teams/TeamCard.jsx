import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({team, type = 'team', handleConnection}) => {
  return (
    <div className="flex flex-row card bg-base-300 shadow-sm">
        <figure className="px-10 pt-10 border-2 border-gray-300 object-fill">
            <img
            src={team?.logo ? team?.logo : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
            style={{ width: '403px', height: '294px', objectFit: 'fill' }}
            alt="Shoes"
            className="rounded-xl object-fill" />
            {
                type == 'team' 
                ? 
                <Link to={`/team/update/${team.id}`} className="text-blue-500 absolute top-0 right-4">Edit</Link>
                : 
                team.connection ? <span onClick={handleConnection} className="text-blue-500 absolute top-0 right-0 bg-gray-400 text-white rounded-xl p-1">{team?.connection?.status}</span> : <span onClick={handleConnection} className="text-blue-500 absolute top-0 right-0 bg-gray-400 text-white rounded-xl p-1">Make Connection</span>
                
            }
        </figure>
        <div className="card-body items-center text-center overflow-auto">
            
            <div className=" flex justify-evenly items-center">
                <h2 className="card-title">{team?.name}</h2>
            </div>
            <p>{team?.short_desc}</p>
            <p>Team Owner: {team?.user?.name}</p>
            
        </div>
    </div>
  )
}

export default TeamCard
