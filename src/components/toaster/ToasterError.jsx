import React from 'react'

const ToasterError = ({message}) => {
  return (
    <div className="toast toast-top toast-end">
        <div className="alert alert-danger">
            <span>{message}.</span>
        </div>
    </div>
  )
}

export default ToasterError
