import React from "react";

function Categoryitems({ src, title, alt }) {
  return (
    <div style={{ width: "165px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={src}
          alt={alt}
          width={100}
          height={100}
          style={{ cursor: "pointer" }}
        ></img>
      </div>

      <span style={{ display: "flex", justifyContent: "center" }}>{title}</span>
    </div>
  );
}

export default Categoryitems;
