
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCookie } from '../../utils/helper'
import ToasterSuccess from '../toaster/ToasterSuccess'
import ToasterError from '../toaster/ToasterError'

const TeamCreate = () => {

    const user = useSelector( store => store.user)

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [image, setImage] = useState(null);

    const [nameError, setNameError] = useState("");
    const handleTeamCreation =  async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('short_desc', about);

        if (image) {
          formData.append('logo', image);
        }
        
        try {
            const token = getCookie('token');
           
            const response = await fetch('http://localhost:8000/api/team/create', {
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
            
            const json = await response.json();
            
            if(json?.errors) {
                if(json?.errors?.name){
                    setNameError(json?.errors?.name[0])
                }
            }
            

            if(json?.status === 'success'){
                console.log("Team Created Successfully")
                ToasterSuccess("Team Created Successfully")
                setName("");
                setAbout("");
                setImage(null);
                setNameError("");
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


    const handleProfile = (e) => {
        let file  = e.target.files[0];
        setImage(file)
    }

  return user ? (
    <form 
        onSubmit={(e) => {
            e.preventDefault();
            handleTeamCreation(e);
        }}

        encType='multipart/form-data'
    >
        <div className="flex justify-center align-middle m-auto gap-4 p-10">
            <div className="w-2/4 bg-slate-200 p-4">
                <legend className="fieldset-legend align-middle justify-center">Add Team</legend>
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
                                } 
                            }
                        /> 
                        { nameError && <p className="label text-red-500">{nameError}</p> }
                    </div>
                    
                </fieldset>
                <fieldset className='flex gap-4 mb-4'>
                    <div className='w-2/4'>
                        <label className="label">Profile</label>
                        <input type="file" className="file-input" onChange={ handleProfile } accept="image/*" />
                    </div>  
                </fieldset>
                <fieldset className='flex gap-4 mb-4'>
                    <div className='w-[97%]'>   
                        <label className="label">About Team</label>
                        <textarea 
                            className="textarea w-full" 
                            placeholder="Bio" 
                            value={about} 
                            onChange={
                                (e) => {
                                    setAbout(e.target.value)
                                } 
                            }
                        />
                    </div>
                </fieldset>
                <fieldset className='flex gap-4 mb-4'>
                    <button className="btn btn-neutral" type="submit">Create</button>
                </fieldset>
            </div>
        </div>
    </form>
  ) :  <div className='flex justify-center p-10'>Loading.....</div>
}

export default TeamCreate
