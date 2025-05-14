import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { convertDate } from '../../utils/helper';

const Profile = () => {

  const user = useSelector( store => store.user);

  {
     !user && <div className='flex justify-center align-middle m-auto'>No Profile Found</div>
  }

  let formattedDate = null;
  if(user?.created_at){
    formattedDate = convertDate(user?.created_at)
  }
 
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm w-2/4 mx-auto mt-10">
      <figure>
        <img
          src={user?.profile ? user?.profile : "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" }
          alt="Album" 
          style={{ width: '363px', height: '294px', objectFit: 'fill' }}
          className='object-cover w-full h-full'
          />
      </figure>
      <div className="card-body justify-start">
        <h2 className="card-title">{user?.name}</h2>
        <span>Email: {user?.email }</span>
        <span>Phone: {user?.phone }</span>
        <span>Role: {user?.role }</span>
        <span>Joined On: {formattedDate }</span>
        <div className="card-actions justify-end absolute  bottom-10">
          <Link to="/me/update" className="btn btn-primary">Update</Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
