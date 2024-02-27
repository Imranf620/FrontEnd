import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div className="content">
          <h3>THE BETFAIR WAY</h3>
          <p>Making it safer for everyone</p>
        </div>
        <div className="content">
          <h3>TOOLS TO HELP</h3>
          <p></p>
        </div>
        <div className="content">
          <h3>LOOKING OUT FOR EVERYONE</h3>
          <p>On the look out How you can help Protecting Minors </p>
        </div>
        <div className="content">
          <h3>HELP AND SUPPPORT</h3>
          <p>
            Support Organisations Blocking Gambling Sites Debt & Financial
            advice
          </p>
        </div>
      </div>
      <div className="middle">
        <img src="footerlogo1.jpg" alt="" />
        <img src="footerlogo2.png" alt="" />
        <img src="footerlogo3.jpg" alt="" />
        <img src="footerlogo4.png" alt="" />
      </div>
      <div className="lower">
        <div>taketimetothink.co.uk</div>
        <div>
          <img src="pause.png" alt="" />
          TAKE TIME TO THINK
        </div>
        <div>
          <img src="18.png" alt="" />
          Be Gamble Aware.com.org
        </div>
      </div>
    </div>
  );
};

export default footer;
