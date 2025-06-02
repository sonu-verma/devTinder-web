import React from 'react';
import { useSelector } from 'react-redux';

const PostCard = ({ name,time, content, image, cheersCount }) => {

  const user = useSelector(store => store.user);  

  return (
    <div className="post-card" style={{ background: "#f2f2f2", padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#333", marginRight: "10px" }}></div>
        <div>
          <strong>{name}</strong>
          <div style={{ fontSize: "12px", color: "#666" }}>{time}</div>
        </div>
      </div>

      <div style={{ fontSize: "14px", marginBottom: "10px" }}>{content}</div>

      {image && (
        <div style={{ marginBottom: "10px" }}>
          <img
            src={user?.profile ? user?.profile : "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" }
            alt="Post Visual"
            style={{
              width: "100%",
              borderRadius: "8px",
              objectFit: "cover",
              maxHeight: "300px"
            }}
          />
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "14px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
            <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" >
                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                </g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                </g>
                <g id="SVGRepo_iconCarrier"> 
                    <g> 
                        <g> 
                            <path d="M255.999,0c-9.336,0-16.9,7.565-16.9,16.9v33.8c0,9.336,7.565,16.9,16.9,16.9s16.9-7.565,16.9-16.9V16.9 C272.899,7.565,265.335,0,255.999,0z"></path> 
                        </g> 
                    </g>
                    <g> 
                        <g> 
                            <path d="M200.345,50.018l-33.8-33.8c-6.601-6.601-17.297-6.601-23.898,0c-6.601,6.596-6.601,17.301,0,23.898l33.801,33.8 c3.301,3.301,7.625,4.952,11.948,4.952s8.648-1.651,11.948-4.952C206.947,67.32,206.947,56.615,200.345,50.018z"></path> 
                        </g> 
                    </g> 
                    <g> 
                        <g> 
                            <path d="M369.348,16.217c-6.601-6.601-17.297-6.601-23.898,0l-33.8,33.8c-6.601,6.596-6.601,17.301,0,23.898 c3.301,3.301,7.625,4.952,11.95,4.952c4.324,0,8.648-1.651,11.948-4.952l33.8-33.8C375.95,33.52,375.95,22.814,369.348,16.217z"></path> 
                        </g> 
                    </g> 
                    <g> 
                        <g> 
                            <path d="M493.602,458.297c-2.256-9.061-11.443-14.578-20.482-12.312l-49.2,12.267l-24.812-99.524 c57.552-23.203,85.164-86.744,64.273-146.68c-4.489-12.875-1.209-5.694-61.206-118.365c-3.647-6.843-11.525-10.288-19.007-8.456 l-127.177,31.707L128.83,85.228c-7.536-1.903-15.36,1.612-19.007,8.456c-8.529,16.016-48.536,91.147-53.897,101.214h0.006 c-3.399,6.383-6.013,13.063-8.203,19.851c-19.297,59.777,8.924,121.276,65.163,143.975l-24.813,99.529l-49.195-12.267 c-9.055-2.277-18.226,3.252-20.487,12.312c-2.256,9.055,3.257,18.226,12.312,20.487l131.186,32.711 c9.089,2.263,18.232-3.284,20.488-12.312c2.256-9.055-3.257-18.226-12.312-20.487l-49.193-12.266l24.813-99.527 c45.849,4.841,87.899-17.723,110.312-55.978c22.401,38.274,64.497,60.808,110.31,55.977l24.814,99.529l-49.193,12.266 c-9.055,2.261-14.568,11.431-12.312,20.488c2.26,9.046,11.412,14.571,20.487,12.312l131.196-32.711 C490.357,476.522,495.869,467.352,493.602,458.297z M95.616,192.282l37.839-71.065l105.643,26.341v82.057l0.012,0.003 L95.616,192.282z M272.914,226.68l0.052-79.138l105.577-26.324l36.472,68.49L272.914,226.68z"></path> 
                        </g> 
                    </g> 
                </g>
            </svg>
            {cheersCount} Cheers!
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button title="Like" style={{ background: "none", border: "none", cursor: "pointer" }}>👍</button>
          <button title="Comment" style={{ background: "none", border: "none", cursor: "pointer" }}>💬</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
