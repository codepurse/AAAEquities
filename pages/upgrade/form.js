import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../../component/header";
import Head from "next/head";
import Link from "next/link";
import swal from "@sweetalert/with-react";
import getApi from "../../services/api.service";
import axios from "axios";

function form() {
  const inputFileRef = useRef(null);
  const [marginamount, setMarginamount] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [client, setClient] = React.useState("");
  const [clientpic, setClientpic] = React.useState("");
  const [formtoken, setFormtoken] = React.useState("");

  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");
    setFormtoken(token);
    console.log(token);
  }, []);

  function removeClientpic() {
    setClient("");
    setClientpic("");
    $(".inputFile1").val("");
    $(".divUploadclient").hide();
  }

  function numOnly(event) {
    let value = event.currentTarget.value;
    let numbers = value.replace(/[^0-9]/g, "");
    event.currentTarget.value = numbers;
  }

  function changeEmail(e) {
    setEmail(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
    
  }

  function keydownSpace(e) {
    if (e.keyCode == 32) {
      e.preventDefault();
      }
  }

  function changeUsername(e) {
    setUsername(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeMargin(e) {
    setMarginamount(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function goSubmit() {
    if (!username || !email || !marginamount || !clientpic) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="../Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-md-10 col-sm-10 col-10"
                style={{ padding: "0px" }}
              >
                <p className="pError">Something went wrong</p>
                <p className="pErrorSub">Fill up all the missing fields.</p>
              </div>
            </div>
          </div>
        </div>
      );
      var empty = 0;
      $(".txtForm2").each(function () {
        if (this.value == "") {
          empty++;
          $(this).css("border", "1px solid red");
        }
      });

      if (!clientpic) {
        $(".divUpload").css("border-color", "red");
      }
    } else if (!isEmail(email)) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-sm-2 col-md-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="../Image/error.png"
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
      $(".txtEmail").css("border", "1px solid red");
      return false;
    } else if (marginamount > 100000) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-sm-2 col-md-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="../Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-md-10 col-10 col-sm-10"
                style={{ padding: "0px" }}
              >
                <p className="pError">Oooops!</p>
                <p className="pErrorSub">Margin limit is P100,000.00</p>
              </div>
            </div>
          </div>
        </div>
      );
      $(".txtMargin").css("border", "1px solid red");
    } else if (!$("#cbx1").is(":checked")) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="../Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-sm-10 col-md-10 col-10"
                style={{ padding: "0px" }}
              >
                <p className="pError">Something went wrong</p>
                <p className="pErrorSub">
                  Please agree to our terms and conditions and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      $("#modalVerify").modal("hide");

      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
        },
      };
      let formdata = new FormData();
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("margin_amount_requested", marginamount);
      formdata.append("token", formtoken);
      formdata.append("client_signature_image", client, client.name);

      const api_upgrade =
        appglobal.api.base_api + appglobal.api.upgrade_accounts;

      axios
        .post(api_upgrade, formdata, options)
        .then((result) => {
          console.log(result);
          $("#exampleModalCenter").modal("hide");
          $("#modalVerify").modal("hide");
          swal(
            <div style={{ width: "450px", padding: "20px 8px" }}>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col-lg-2 col-sm-2 col-2 col-md-2"
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="../Image/check.png"
                      style={{ width: "32px", marginTop: "0px" }}
                    ></img>
                  </div>
                  <div
                    className="col-lg-10 col-sm-10 col-10 col-md-10"
                    style={{ padding: "0px" }}
                  >
                    <p className="pError">Success</p>
                    <p className="pErrorSub">Account succesfully upgraded.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
        .catch((err) => {
          console.log(err.response);
          $("#modalVerify").modal("hide");
          swal(
            <div style={{ width: "450px", padding: "20px 8px" }}>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col-lg-2 col-sm-2 col-2 col-md-2"
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="../Image/error.png"
                      style={{ width: "32px", marginTop: "0px" }}
                    ></img>
                  </div>
                  <div
                    className="col-lg-10 col-sm-10 col-10 col-md-10"
                    style={{ padding: "0px" }}
                  >
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

  function handleFile(e) {
    var reader = new FileReader();
    let file = e.target.files[0];
    let size = Math.floor(file.size / 1024 / 1024);

    if (size > 4) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="../Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-md-10 col-sm-10 col-10"
                style={{ padding: "0px" }}
              >
                <p className="pError">Something went wrong</p>
                <p className="pErrorSub">Invalid! Maximum size is 4mb.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      $(".divUpload").css("border-color", "#9098A9");
      $(".pUploadclient").text(file.name);
      setClientpic(file.name);
      setClient(file);
      reader.onloadend = function () {
        $(".imgClientpic").attr("src", reader.result);
      };
      reader.readAsDataURL(file);
      $(".divClient").attr("style", "2px solid #9098A9");
      $(".divUploadclient").show();
    }
  }

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
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      onChange={changeUsername}
                    ></input>
                    <p className="pUpgradesub">Email</p>
                    <input
                      type="text"
                      className="txtBox txtForm2 txtEmail"
                      onChange={changeEmail}
                      onKeyDown = {keydownSpace}
                    ></input>
                    <p className="pUpgradesub">Margin amount</p>
                    <input
                      type="text"
                      className="txtBox txtForm2 txtMargin"
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onChange={changeMargin}
                      value={marginamount}
                      onInput={numOnly}
                      maxLength="6"
                    ></input>
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
                    <div className="container divUploadclient">
                      <div className="row">
                        <div className="col-lg-2 col-sm-2 col-2">
                          <img
                            src="../Image/jpg.png"
                            className="img-fluid mx-auto d-flex"
                            style={{ width: "45px" }}
                          ></img>
                        </div>
                        <div
                          className="col-lg-10 col-sm-10 col-10"
                          style={{ position: "relative" }}
                        >
                          <img
                            src="../Image/trash-can.png"
                            className="imgTrash"
                            onClick={removeClientpic}
                          ></img>
                          <p className="pUploadname pUploadclient">
                            Sample file.png
                          </p>
                          <p
                            className="pView"
                            data-toggle="modal"
                            data-target="#exampleModalCenter1"
                         
                          >
                            View image
                          </p>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <input
                        className="inp-cbx"
                        id="cbx1"
                        type="checkbox"
                        style={{ display: "none" }}
                      />
                      <label className="cbx" htmlFor="cbx1">
                        <span>
                          <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                          </svg>
                        </span>
                      </label>
                     
                 
                       <a target = "_blank" href = "https://docs.google.com/viewer?url=https://aaaequities.vercel.app/others/margin_agreement.pdf">
                        <span className="pCheck"  >
                          I have read the margin trading agreement.
                        </span>
                        </a>
                      
                     
                    </div>
                    <div
                      className="mx-auto d-flex text-center"
                      style={{ width: "100px" }}
                    >
                      <button className="btnNext" onClick={goSubmit}>
                        SUBMIT
                      </button>
                    </div>
                  </div>
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
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
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

      <div
        className="modal fade"
        id="exampleModalCenter1"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
          style={{ padding: "0px" }}
        >
          <div className="modal-content modalPic">
            <div className="container conPic" style={{ padding: "0px" }}>
              <div className="row" style={{ padding: "0px" }}>
                <div className="col-lg-12" style={{ padding: "0px" }}>
                  <img
                    src=""
                    className="img-fluid mx-auto d-flex imgHide imgClientpic"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default form;
