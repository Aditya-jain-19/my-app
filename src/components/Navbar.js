// import React, { useState } from 'react'
// import { ReactPropTypes } from 'react'
export default function Navbar({title,about,mode,toggleMode}) {
  // const [modeSnip, setModeSnip] = useState("Enable Dark Mode");
  // const toggleSnip =()=>{
  //   if(modeSnip==="Enable Dark Mode"){
  //     setModeSnip("Enable light Mode");
  //   }else{
  //     setModeSnip("Enable Dark Mode");
  //   }
  // }
  return (
    <nav className={`navbar navbar-expand-lg  bg-${mode} navbar-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{about}</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{mode==='light'?"Enable Dark Mode":"Enable Light Mode"}</label>
</div>
    </div>
  </div>
</nav>
  )
}



// Navbar.propTypes = {
//     title : PropTypes.string,
//     about : PropTypes.string
// }