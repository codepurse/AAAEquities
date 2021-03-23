import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../../component/header";
import Head from "next/head";


function form() {
  const inputFileRef = useRef(null);
  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");
    console.log(token);
  }, []);

  return (
    <>
      <Header></Header>
      <Head>
        <link rel="stylesheet" href="../Css/index.css"></link>
      </Head>
      <div className="container h-100">
        <div
          className="row h-100 align-items-center"
          style={{ mmarginBottom: "100px" }}
        >
          <div className="col-lg-12">
            <img
              src="../Image/upgrade.png"
              className="img-fluid mx-auto d-flex"
              style={{ width: "350px" }}
            ></img>
            <div className="divUpgradebox mx-auto">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="pUpgrade">Upgrade account</p>
                    <p className="pUpgradesub">Username</p>
                    <input type="text" className="txtBox txtForm2"></input>
                    <p className="pUpgradesub">Email</p>
                    <input type="text" className="txtBox txtForm2"></input>
                    <p className="pUpgradesub">Margin amount</p>
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
                      <p className="pUpload">
                        <b style={{ color: "#00634A" }}>Browse</b> client
                        signature over printed Name
                      </p>
                      <p className="pUpload">Max file size: 4mb</p>
                      <p className="pUpload">Accepted file type: Jpg and Png</p>
                    </div>
                    <div
                      className="mx-auto d-flex text-center"
                      style={{ width: "100px" }}
                    >
                      <button className="btnNext">SUBMIT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default form;
