import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";


function success() {
  
  return (
    <>
      <Header></Header>
        <div className = "container-fluid conUpgradeweb h-100">
        <div className  = "container h-100 ">
          <div className = "row h-100 align-items-center">
            <div className = "col-lg-7">
              <div className = "divImage">
              <img src = "Image/gif.gif" className = "img-fluid mx-auto d-flex"></img>
              </div>
            </div>
            <div className = "col-lg-5">
              <div className = "divText">
                <p className = "pUpgradetext">Ready for Liftoff!</p>
      
                <p className="pCheck1">
                <span>
                  <img
                    src="Image/check.png"
                    style={{ width: "15px", marginRight: "10px" }}
                  ></img>
                </span>
                If approved, you will receive your account password via email.
              </p>

              <p className="pCheck1">
                <span>
                  <img
                    src="Image/check.png"
                    style={{ width: "15px", marginRight: "10px" }}
                  ></img>
                </span>
                If we need more information prior to account approval, our team
                will be in touch with you via email
              </p>

              <p className="pCheck1">
                <span>
                  <img
                    src="Image/check.png"
                    style={{ width: "15px", marginRight: "10px" }}
                  ></img>
                </span>
                After you receive your password, please fund your account with a
                minumum of P50,000. Instuctions{" "}
                <a
                  href="https://aaa-equities.com.ph/fund-account/"
                  className="pHere"
                >
                  here
                </a>
                
              </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default success;
