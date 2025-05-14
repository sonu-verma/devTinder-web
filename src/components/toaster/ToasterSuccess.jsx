import React from 'react'

const ToasterSuccess = ({message}) => {
  return (
    <div className="toast toast-top toast-end">
        <div className="alert alert-success">
            <span>{message}.</span>
        </div>
    </div>
  )
}

export default ToasterSuccess
