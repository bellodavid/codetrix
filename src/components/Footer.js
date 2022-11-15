import React from 'react'

function Footer() {
var date = new Date();
var year = date.getFullYear();

  return (
    <div style={{display: "flex", justifyContent: 'center',   
     backgroundColor: "black", zIndex: 1}}>
        <div><h2 style={{color:" rgb(246, 225, 188)", fontSize: 15}}> Copywrite  © {year} | David Bello</h2></div>
    </div>
  )
}

export default Footer