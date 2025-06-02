import React from 'react';

const connections = [
  { name: 'Vishal Pandey', location: 'Virar, Maharashtra', mutual: 4 },
  { name: 'Sonu Verma', location: 'Nalasopara, Maharashtra', mutual: 10 },
  { name: 'Devdutta Barve', location: 'Borivali, Maharashtra', mutual: 3 },
];

const SuggestedConnections = () => {
  return (
    <div className="suggested-connections" style={{ marginTop: "20px" }}>
      <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>Suggested connections</h4>
      {connections.map((conn, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#000",
            marginRight: "10px"
          }}></div>
          <div style={{ fontSize: "14px" }}>
            <strong>{conn.name}</strong>
            <div style={{ fontSize: "12px", color: "#666" }}>{conn.location}</div>
            <div style={{ fontSize: "12px", color: "#999" }}>{conn.mutual} mutual friends</div>
          </div>
        </div>
      ))}

      <button style={{
        width: "100%",
        padding: "8px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        marginTop: "10px",
        cursor: "pointer"
      }}>
        Find and Invite your friends
      </button>
    </div>
  );
};

export default SuggestedConnections;
