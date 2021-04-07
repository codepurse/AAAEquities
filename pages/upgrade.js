import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import axios from "axios";
import swal from "@sweetalert/with-react";
import getApi from "../services/api.service";
function success() {
  const [email, setEmail] = React.useState("");

  function showModal() {
    $("#exampleModalCenter").modal("show");
  }

  function changeEmail(e) {
    $(".pErroremail").hide();
   setEmail(e.currentTarget.value)
  }

  function emailkeyDown(e) {
    if (e.keyCode == 32) {
    e.preventDefault();
    }
  }

  
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

  function verifyEmail() {
   
    if (email == "") {
      $(".pErroremail").show();
    }else if (!email) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-sm-2 col-md-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-md-10 col-10 col-sm-10"
                style={{ padding: "0px" }}
              >
                <p className="pError">Oooops!</p>
                <p className="pErrorSub">Please input a valid email format.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    else {
      $("#modalVerify").modal("show")
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
        },
      };
      let formdata = new FormData();
      formdata.append("email", email);

      const api_upgrade = appglobal.api.base_api + appglobal.api.upgrade_request;

      axios
      .post(api_upgrade, formdata, options)
      .then((result) => {

        $("#modalVerify").modal("hide")
        $("#exampleModalCenter").modal("hide");
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2 col-sm-2 col-2 col-md-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/check.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 col-sm-10 col-10 col-md-10" style={{ padding: "0px" }}>
                  <p className="pError">Success</p>
                  <p className="pErrorSub">We have sent an email to {email}. Please click the link included to start upgrading your account.</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
      .catch((err) => {
        $("#modalVerify").modal("hide")
        console.log(err)
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2 col-sm-2 col-2 col-md-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 col-sm-10 col-10 col-md-10" style={{ padding: "0px" }}>
                  <p className="pError">Something went wrong</p>
                  <p className="pErrorSub">{err.response.data.message}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    
  }
  return (
    <>
      <Header></Header>
      <div className="container-fluid conUpgradeweb h-100">
        <div className="container h-100 ">
          <div className="row h-100 align-items-center">
            <div className="col-lg-7">
              <div className="divImage">
                <img
                  src="Image/gif.gif"
                  className="img-fluid mx-auto d-flex"
                ></img>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="divText">
                <p className="pUpgradetext">Ready for Liftoff!</p>

                <p className="pCheck1">
                  <span>
                    <img
                      src="Image/check.png"
                      style={{ width: "15px", marginRight: "10px" }}
                    ></img>
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <p className="pCheck1">
                  <span>
                    <img
                      src="Image/check.png"
                      style={{ width: "15px", marginRight: "10px" }}
                    ></img>
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <p className="pCheck1">
                  <span>
                    <img
                      src="Image/check.png"
                      style={{ width: "15px", marginRight: "10px" }}
                    ></img>
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <p className="pCheck1">
                  <span>
                    <img
                      src="Image/check.png"
                      style={{ width: "15px", marginRight: "10px" }}
                    ></img>
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="divUpgradebutton mx-auto d-flex">
                  <button className="btnNewupgrade" onClick={showModal}>
                    UPGRADE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="container conUpgrade">
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src="Image/imglogo.png"
                    className="img-fluid"
                    style={{ width: " 100px" }}
                  ></img>
                  <p className="pVerify">Verify your email</p>
                  <p className="pVerifySub">
                    We will send a email verification link in your given email
                    address.
                  </p>
                  <input
                    type="email"
                    className="txtEmailverify"
                    placeholder="Ex. sample@gmail.com"
                    onChange={changeEmail}
                    onKeyDown={emailkeyDown}
                    onPaste={(event) => {
                      event.preventDefault();
                    }}
                  ></input>
                  <p className="pErroremail">Email address cannot be blank.</p>
                  <button className="btnVerify" onClick={verifyEmail}>
                    Verify email
                  </button>
                  <p className="pQuestions">
                    Questions? Email us at{" "}
                    <span className="spanEmail">support@aaa-equities.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal "
        id="modalVerify"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modalBorder">
            <div className="modal-body">
              <div className="container">
                <div className="row  ">
                  <div className="col-lg-12 ">
                    <div className="colVerify">
                      <div className="Box">
                        <span>
                          <span></span>
                        </span>
                      </div>
                    </div>
                    <p className="pModal">
                      <button
                        type="button"
                        className="btn btn-secondary d-none"
                        id="close-modal"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      Please wait while we verify your account
                    </p>
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
