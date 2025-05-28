import React from 'react'

const TurfCard = ({turf}) => {
  return (
    <div className="bg-white rounded shadow p-4">
        <div className="h-40 bg-gray-300 rounded mb-4"></div>
        <h3 className="text-lg font-semibold">Turf {turf}</h3>
        <p className="text-sm text-gray-600">Location {turf}</p>
    </div>
  )
}

export default TurfCard
