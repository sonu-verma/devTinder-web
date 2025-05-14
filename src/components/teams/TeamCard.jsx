import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({team}) => {
  return (
    <div className="card bg-base-300 w-80 h-100 shadow-sm">
        <figure className="px-10 pt-10 border-2 border-gray-300 object-fill">
            <img
            src={team?.logo ? team?.logo : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
            style={{ width: '403px', height: '294px', objectFit: 'fill' }}
            alt="Shoes"
            className="rounded-xl object-fill" />
            <Link to={`/team/update/${team.id}`} className="text-blue-500 absolute top-0 right-4">Edit</Link>
        </figure>
        <div className="card-body items-center text-center overflow-auto">
            
            <div className=" flex justify-evenly items-center">
                <h2 className="card-title">{team?.name}</h2>
            </div>
            <p>{team?.short_desc}</p>
            
        </div>
    </div>
  )
}

export default TeamCard
