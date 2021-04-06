import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";


function success() {
  const inputFileRef = useRef(null);
  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  return (
    <>
      <Header></Header>
      <div className="container h-100">
        <div className="row h-100 align-items-center" style = {{mmarginBottom: "100px"}}>
          <div className="col-lg-12">
            <img
              src="Image/upgrade.png"
              className="img-fluid mx-auto d-flex"
              style={{ width: "350px" }}
            ></img>
            <div className="divUpgradebox mx-auto" >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="pUpgrade">Upgrade account</p>
                    <p className="pUpgradesub">Username</p>
                    <input type="text" className="txtBox txtForm2"></input>
                    <p className="pUpgradesub">Email</p>
                    <input type="text" className="txtBox txtForm2"></input>
                    <p className="pUpgradesub">Margin limit requested</p>
                    <p className = "pUpgradesub" style = {{color: "#212121"}}>*Your Margin Limit Request must be less than or equal to your Cash Balance at the time of request</p>
                    <input type="text" className="txtBox txtForm2"></input>
                    <input
                      onChange={(e) => handleFile(e)}
                      ref={inputFileRef}
                      id="file-upload"
                      type="file"
                      className="inputFile1"
                      accept=".jpg, .png, .jpeg|image"
                      style={{ display: "none" }}
                    />
                    <div className="divUpload divClient" onClick={onBtnClick}>
                      <p className="pUpload">upgrade_accounts
                        <b style={{ color: "#00634A" }}>Browse</b> client
                        signature over printed Name
                      </p>
                      <p className="pUpload">Max file size: 4mb</p>
                      <p className="pUpload">Accepted file type: Jpg and Png</p>
                    </div>
                    <div className="mx-auto d-flex text-center" style = {{width: "100px"}}>
                      <button className="btnNext">SUBMIT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default success;
