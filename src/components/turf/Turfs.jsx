import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Turfs = () => {

    const turfs = useSelector(store => store.turfs)

  return turfs ? <>
    <section className="bg-gray-50 px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Trending Turfs</h2>
        <div className="grid md:grid-cols-4 gap-4">
          { turfs.map((turf) => (
            <Link to={`turf/${turf.slug}`}  key={turf.slug}  >
                <div key={turf.id} className="bg-white rounded shadow p-4">
                    <div className="h-40 bg-gray-300 rounded mb-4"></div>
                    <h3 className="text-lg font-semibold">{turf?.name}</h3>
                    <p className="text-sm text-gray-600">{turf?.location} - {turf?.address}</p>
                    <div>
                        Available Sports: 
                        {
                            turf?.sports?.map((sport, index) => <span key={index}> {sport.name}{index < turf?.sports?.length - 1 ? ',' : ''} </span>)
                        }
                    </div>
                </div>
            </Link>
          ))}
        </div>
    </section>
  </> : '<div>Please wait...</div>'
}

export default Turfs
