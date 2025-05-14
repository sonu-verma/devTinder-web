import React from 'react'

const TeamFormShimmer = () => {
  return (
    <div className="flex flex-col justify-center align-middle m-auto gap-4 p-10 h-full">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-32 w-full"></div>
    </div>
    )
}

export default TeamFormShimmer
