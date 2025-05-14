import React, { useEffect, useState } from 'react'
import UserCard from './userCard'
import { useSelector } from 'react-redux'
import ProfileShimmer from './ProfileShimmer'
import { getCookie } from '../../utils/helper'
import { API_URL } from '../../utils/constant'

const UpdateProfile = () => {

    const user = useSelector( store => store.user)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [about, setAbout] = useState("");
    const [userInfo, setUserInfo] = useState({});
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null); 

    useEffect(() => {
        setName(user?.name || '');
        setEmail(user?.email || '');
        setPhone(user?.phone || '');
        setGender(user?.gender || '');
        setAbout(user?.short_desc || '');
        setUserInfo(user)
    }, [
        user
    ]);


    const handleUserProfileUpdate =  async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('gender', gender);
        formData.append('short_desc', about);

        if (image) {
          formData.append('profile', image);
        }
        
        try {
            const token = getCookie('token');
           
            const response = await fetch(API_URL+'user-update', {
                method: 'POST',
                credentials: 'include',
                withCredentials: true,
                headers: {
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${token}`,
                //   'Content-Type': 'multipart/form-data',
                },
                body: formData
              });
            
            const json =  response.json(); 
            console.log("json : ", json)
        } catch (err){
            console.log("Error: ", err)
        }

    }


    const handleProfile = (e) => {
        let file  = e.target.files[0];
        if(file){
            setImage(file)
            // Create a preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

  return user ? (
    <form 
        onSubmit={(e) => {
            e.preventDefault();
            handleUserProfileUpdate(e);
        }}

        encType='multipart/form-data'
    >
        <div className="flex justify-center align-middle m-auto gap-4 p-10">
            <div className="w-2/4 bg-slate-200 p-4">
                <legend className="fieldset-legend align-middle justify-center">Update Profile</legend>
                <fieldset className='flex gap-4 mb-4'>
                    <div className='w-[97%]'>
                        <label className="label">Name</label>
                        <input 
                            type="text" 
                            className="input w-full" 
                            placeholder="Please enter name" 
                            value={name} 
                            onChange={
                                (e) => {
                                    setName(e.target.value)
                                    setUserInfo({ ...userInfo, name: e.target.value })
                                } 
                            }
                        />
                    </div>
                </fieldset>
                <fieldset className='flex gap-2 mb-4 '>
                    <div className='w-2/4'>
                        <label className="label">Email</label>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Email Address" 
                            value={email} 
                            onChange={
                                (e) => {
                                    setEmail(e.target.value)
                                    setUserInfo({ ...userInfo, email: e.target.value })
                                } 
                            }
                            disabled/>
                    </div>
                    <div className='w-2/4'>
                        <label className="label">Phone No</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Phone Number" 
                            value={phone} 
                            onChange={
                                (e) => {
                                    setPhone(e.target.value)
                                    setUserInfo({ ...userInfo, phone: e.target.value })
                                } 
                            }
                            disabled
                        />
                    </div>  
                </fieldset>
                <fieldset className='flex gap-4 mb-4'>
                    <div className='w-2/4'>
                        <label className="label">Gender</label>
                        <select 
                            className="select w-full" 
                            value={gender} 
                            onChange={
                                (e) => {
                                    setGender(e.target.value)
                                    setUserInfo({ ...userInfo, gender: e.target.value })
                                } 
                            }
                        >
                                <option value="">Choose Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                        </select>
                    </div>
                    <div className='w-2/4'>
                        <label className="label">Profile</label>
                        <input type="file" className="file-input" onChange={ handleProfile } accept="image/*" />
                    </div>  
                </fieldset>
                <fieldset className='flex gap-4 mb-4'>
                    <div className='w-[97%]'>   
                        <label className="label">About</label>
                        <textarea 
                            className="textarea w-full" 
                            placeholder="Bio" 
                            value={about} 
                            onChange={
                                (e) => {
                                    setAbout(e.target.value)
                                    setUserInfo({ ...userInfo, short_desc: e.target.value })
                                } 
                            }
                        />
                    </div>
                </fieldset>
                <fieldset className='flex gap-4 mb-4'>
                    {/* <button className="btn btn-neutral" onClick={ handleUserProfileUpdate }>Update Profile</button> */}
                    <button className="btn btn-neutral" type="submit">Update</button>
                </fieldset>
            </div>
            <div className='w-2/4 mx-auto'>
                <UserCard user = {userInfo } preview = {preview}/>
            </div>
        </div>
    </form>
  ) :  <ProfileShimmer />
}

export default UpdateProfile
