import React from 'react';
import { useSelector } from 'react-redux';

const Sponsored = () => {
  const user = useSelector(store => store.user)
  return (
    <div className="sponsored">
      <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>Sponsored</h4>
      
      <span style={{ fontSize: "14px", fontWeight: "bold" }}>Sopara Gaon Test Cricket Tournament</span>
      <div style={{
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#eee",
        height: "100px",
        marginBottom: "5px"
      }}>
        <img
           src={user?.profile ? user?.profile : "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" }
          alt="Sponsored Ad"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className='text-end' style={{ fontSize: "12px", color: "#007bff", cursor: "pointer", marginTop: "5px" }}>view more..</div>
    </div>
  );
};

export default Sponsored;
