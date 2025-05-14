import React from 'react'
import { convertDate } from '../../utils/helper';

const UserCard = ({ user, preview }) => {

  let formattedDate = null;
  if(user?.created_at){
    formattedDate = convertDate(user?.created_at)
  }

  var  cardImage = user?.profile ? user?.profile : "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" 
  if(preview){
    cardImage = preview
  }

  return (
    <div className="card bg-base-100 w-96 h-full m-auto items-center shadow-sm">
        <figure className=''>
          <img
              src={ cardImage }
              style={{ width: '363px', height: '294px', objectFit: 'fill' }}
              // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" 
              className='object-cover w-full h-full'
            />
        </figure>
        <div className="card-body">
        <h2 className="card-title">
            {user?.name}
            {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p><span className='font-bold'>Gender: </span>{user?.gender}</p>
        <p><span className='font-bold'>Phone: </span>{user?.phone}</p>   
        <p><span className='font-bold'>Joined On:</span> {formattedDate}</p>   
        <p>{user?.short_desc}</p>
        <div className="card-actions justify-end">
            <div className="badge badge-outline">Like</div>
        </div>
        </div>
    </div>
  )
}

export default UserCard
