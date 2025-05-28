import React, { useEffect } from 'react'
import { API_URL } from '../../utils/constant'
import { getCookie } from '../../utils/helper'
import { useDispatch } from 'react-redux'
import { turfData } from '../../utils/turfSlice'
import Turfs from '../turf/Turfs'

const Home = () => {

    const dispatch = useDispatch();

    const getTurfData = async () => {
        const token = getCookie('token')
        const response = await fetch(API_URL+"turfs", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true,
            credentials: 'include'
        })

        const json = await response.json();
        console.log("json : ", json);
        dispatch(turfData(json.turfs?.data))
    }


    useEffect( () => {
        getTurfData();
    }, [])



  return (
    <>
    {/* Hero Section */}
      <section className="bg-[url('https://www.shutterstock.com/image-photo/green-soccer-field-football-top-600nw-2208451531.jpg')] bg-cover bg-center text-center py-20">
        <h1 className="text-4xl font-bold text-white">Book Turf Anytime, Anywhere</h1>
        <p className="text-white mt-2">Find and book the best turf for your game</p>
        <form className="mt-6 bg-white p-6 rounded shadow-lg max-w-xl mx-auto flex flex-col md:flex-row gap-4">
          <input type="text" placeholder="Enter Turf Name" className="flex-1 p-2 border rounded" />
          <input type="date" className="p-2 border rounded" />
          <button className="bg-green-600 text-white px-4 py-2 rounded">Search</button>
        </form>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-gray-100 rounded">Easy Booking</div>
          <div className="p-4 bg-gray-100 rounded">Verified Turfs</div>
          <div className="p-4 bg-gray-100 rounded">Affordable Prices</div>
        </div>
      </section>

      {/* Trending Turfs */}
      <Turfs />

      {/* New Turfs */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">New Listings</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[5, 6, 7, 8].map((turf) => (
            <div key={turf} className="bg-white rounded shadow p-4">
              <div className="h-40 bg-gray-300 rounded mb-4"></div>
              <h3 className="text-lg font-semibold">New Turf {turf}</h3>
              <p className="text-sm text-gray-600">Location {turf}</p>
            </div>
          ))}
        </div>
      </section>
       
    </>
  )
}

export default Home
