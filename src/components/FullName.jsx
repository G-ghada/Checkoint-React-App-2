import React from "react";

export function FullName() {
  return (
    <div style={{ display: "flex" }}>
      <h3
        style={{ color: "black", fontFamily: "monospace", display: "inline" }}
      >
        First Name :
      </h3>
      <h2 style={{ color: "red", fontFamily: "monospace"  }}> Ghada </h2>
      <h3 style={{ color: "black", fontFamily: "monospace" }}> Last Name : </h3>
      <h2 style={{ color: "red", fontFamily: "monospace" }}> Bousselmi</h2>
    </div>
  );
}
