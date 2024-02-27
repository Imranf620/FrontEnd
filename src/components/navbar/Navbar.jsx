import React, { useState } from "react";
import "./navbar.css";


const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const togglefunc = ()=>{
    setToggle(!toggle);
  }

  return (
    <div className="main">
      <nav>
        <div className="left">
          <a href="#">
            <img src="logo.png" height={100} width={100} alt="" />{" "}
          </a>
          <a href="#">
            <h1>betfair</h1>
          </a>
        </div>
          <div className="right">
          <a href="#">HOMEPAGE</a>
          <a href="#">OUR COMMTMENT</a>
          <a href="#">TOOLS TO HELP</a>
          <a href="#">LOOKING OUT FOR EVERYONE</a>
          <a href="#">HELP AND SUPPORT</a>
          {<img  onClick={togglefunc} src="hamburger.png" className="menu" alt="" />}

          
        </div>
      </nav>
      <img src="img.jpg" className="image" alt="" />
      {!toggle&&<><div className="toggle">
       <a href="#">HOMEPAGE</a>
        <a href="#">OUR COMMTMENT</a>
        <a href="#">TOOLS TO HELP</a>
        <a href="#">LOOKING OUT FOR EVERYONE</a>
        <a href="#">HELP AND SUPPORT</a>
      </div>
      </>}
    </div>
  );
};

export default Navbar;
