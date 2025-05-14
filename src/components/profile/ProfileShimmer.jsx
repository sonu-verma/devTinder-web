import React from 'react'

const ProfileShimmer = () => {
  return (
       <div className='grid grid-cols-2 gap-4 p-10 '>
            <div className="flex w-full flex-col gap-4 ">
                <div className="skeleton h-40 w-full "></div>
                <div className="skeleton h-10 w-28"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
            </div>
            <div className="flex w-full flex-col gap-4">
                <div className="skeleton h-40 w-full"></div>
                <div className="skeleton h-10 w-28"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
            </div>
       </div>
  )
}

export default ProfileShimmer
