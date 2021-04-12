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
 const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    const api_upgrade_validate =
    appglobal.api.base_api + appglobal.api.validate_upgrade;

    axios
    .get(api_upgrade_validate, {params: { token: token }}, options)
    .then((result) => {
      console.log(result);
      $("#modalTerms").modal("toggle");
    })
    .catch((err) => {
      console.log(err.response.data.message)
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
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
                className="col-lg-10 col-10 col-sm-10 col-md-10"
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

  }, []);

  
  function goDecline() {
    swal(
      <div style={{ width: "450px", padding: "20px 8px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2" style={{ padding: "0px" }}>
              <img
                src="../Image/error.png"
                style={{ width: "32px", marginTop: "0px" }}
              ></img>
            </div>
            <div className="col-lg-10 " style={{ padding: "0px" }}>
              <p className="pError">Cannot proceed.</p>
              <p className="pErrorSub">You must accept our margin facility agreement.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function goAccept() {
    $("#modalTerms").modal("toggle");
    $(".conUpgrade1").show();
  }


  function removeClientpic(event) {
    event.stopPropagation();
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

  function viewPic(event) {
    event.stopPropagation();
    $("#exampleModalCenter1").modal("show");
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
                  Please agree to our terms and conditions of our Margin Trading Agreement.
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
      <div className="container h-100 conUpgrade1">
        <div
          className="row h-100 align-items-center"
          style={{ mmarginBottom: "100px" }}
        >
          <div className="col-lg-12">
            <img
              src="../Image/gif.gif"
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
                    <p className="pUpgradesub">Margin limit requested</p>
                  
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
                      <p className = "pUpgradesub" style = {{color: "#212121", fontSize: "0.9rem"}}>Your Margin Limit Request must be less than or equal to your Cash Balance at the time of request</p>
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
                            onClick={viewPic}
                         
                          >
                            View image
                          </p>
                        </div>
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
                     
                 
                       
                        <span className="pCheck">
                          I have read the margin trading agreement.
                        </span>
                        
                      
                     
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

         <div
        className="modal fade"
        id="exampleModalCenter2"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
          style={{ padding: "0px" }}
        >
          <div className="modal-content modalPic">
            <div className="container conPic" style={{ padding: "0px" }}>
              <div className="row" style={{ padding: "0px" }}>
                <div className="col-lg-12" style={{ padding: "0px" }}>
                <embed src="../others/margin_agreement.pdf" frameborder="0" width="100%" height="100%"/>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     
      <div
        className="modal "
        id="modalTerms"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content modalAgreement">
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 ">
                    <p className="pMargin">Margin Facility Agreement</p>
                    <div className="divScroll">
                      <p className="pMarginsub">
                        I/We (Client) are applying for AAA Southeast Equities
                        Inc.’s (AAA) Margin Facility and agree to be bound by
                        the terms and conditions below. The Client undertakes to
                        notify AAA of any material changes in the Client’s
                        information as disclosed in the Customer Account
                        Information Form (CAIF), including the Client’s
                        financial circumstances or investments objectives. Any
                        information given to AAA on this Margin Facility
                        Agreement (AGREEMENT) is subject to verification with
                        the Client’s express authorization.
                      </p>
                      <p className="pMarginTitle">1. MARGIN LINE</p>
                      <p className="pMarginsub">
                        1.1 Upon approval by AAA of this AGREEMENT, a Margin
                        Line shall be established by AAA in the Client’s favor
                        for an amount equal to what is held in the Client’s
                        account (AAA Margin Account) equivalent to the total
                        amount of cash plus the market value of Marginable
                        Securities with a defined margin rating. In no case,
                        however, shall the Margin Line exceed the amount
                        requested by the Client in this Agreement or the amount
                        approved by AAA, whichever is lower. The Client fully
                        understands that the approved Margin Line can be reduced
                        or cancelled by AAA any time according to market
                        conditions or for any reason whatsoever at AAA’s sole
                        and absolute discretion.
                      </p>
                      <p className="pMarginsub">
                        1.2 Should the Client wish to increase or decrease the
                        Margin Line, the Client shall submit a request to AAA.
                        The request must be made either in writing or through
                        the appropriate facility provided in AAA’s website. The
                        Client understands that AAA may approve or disapprove
                        the request at its sole and absolute discretion.
                        Further, AAA may impose conditions for the approval of
                        the request which conditions may include, among others,
                        the increase of the minimum deposit and the minimum
                        maintaining net equity balance. In case AAA approves
                        this request for increase or decrease of Margin Line,
                        the use of the AAA Margin Account subsequent to such
                        approval shall signify the Client’s agreement to any new
                        or revised conditions.
                      </p>
                      <p className="pMarginsub">
                        1.3 The term “Marginable Securities” refers to the
                        eligible marginable securities included in the list
                        provided in AAA’s website. A reclassification of what
                        are marginable or non-marginable securities and/or their
                        margin rating may be made by AAA at any time
                      </p>
                      <p className="pMarginTitle">
                        2. DEPOSIT AND MINIMUM MAINTAINING BALANCE
                      </p>
                      <p className="pMarginsub">
                        The Client shall deposit the minimum amount imposed by
                        AAA either in cash or a combination of cash and
                        acceptable shares of stock, subject to the terms and
                        conditions and limitations provided by AAA. A minimum
                        maintaining net equity balance in an amount to be
                        imposed by AAA is required to keep the AAA Margin
                        Account activated. A breach of this minimum maintaining
                        balance after an end-of-day process will subject the AAA
                        Margin Account to the same rules provided under
                        paragraph 7.5 hereof.
                      </p>
                      <p className="pMarginTitle">
                        3. ONLINE CONFIRMATION RECEIPTS
                      </p>
                      <p className="pMarginsub">
                        3.1 AAA shall maintain a ledger of the Client’s daily
                        transactions and shall furnish the Client with
                        electronic Trade Confirmations and Monthly Account
                        Statements which shall replace written confirmation of
                        purchases and sales and account statements
                      </p>
                      <p className="pMarginsub">
                        3.2 AAA shall deem that the Client confirms the accuracy
                        of the Trade Confirmations and accepts the same if not
                        objected to in writing within forty-eight (48) hours
                        from date of transaction.
                      </p>
                      <p className="pMarginTitle">
                        4. PHILIPPINE STOCK EXCHANGE & GOVERNMENT REGULATIONS
                      </p>
                      <p className="pMarginsub">
                        All transactions for the AAA Margin Account shall be
                        subject to the Constitution, By-laws, rules and
                        regulations of the Philippine Stock Exchange (PSE) and
                        the Capital Markets Integrity Corporation (CMIC) and the
                        customs and usages of the market and its clearing house,
                        and to the Securities Regulation Code (Republic Act No.
                        8799), applicable laws and the pertinent rules and
                        regulations of the Securities and Exchange Commission
                        (SEC).
                      </p>
                      <p className="pMarginTitle">5. SECURITY</p>
                      <p className="pMarginsub">
                        As security for all obligations and liabilities under
                        the AAA Margin Account, the Client hereby constitutes
                        and creates a general lien and security interest in
                        favor of AAA over any and all of the Client’s securities
                        and contracts, papers, and documents pertaining thereto
                        belonging to the Client or in which the Client may have
                        an interest, which may now or hereafter be held or
                        carried by AAA for the Client (whether owned wholly or
                        jointly with others), including all dividends, cash,
                        stock or property, subscriptions, warrants, rights or
                        options, pertaining to said securities, which securities
                        may be held by AAA in its name, for the prompt and full
                        payment and performance of any and all of the Client’s
                        obligations and liabilities under and by virtue of the
                        Margin Facility regardless of whether or not AAA has
                        made advances in connection with such securities and/or
                        exercised at any time any of its rights and powers under
                        this AGREEMENT.
                      </p>
                      <p className="pMarginTitle">6. INTEREST RATE</p>
                      <p className="pMarginsub">
                        6.1 The Client agrees to be charged Interest computed
                        daily based on the AAA Margin Account daily adjusted
                        debit balances. Interest charges shall be computed at
                        the flexible margin rates as indicated in the AAA
                        website. Such rates are exclusive of Value Added Tax
                        (VAT) and are subject to change without prior notice at
                        AAA's sole and absolute discretion.
                      </p>
                      <p className="pMarginsub">
                        6.2 The daily Interest charge shall be calculated by
                        dividing the applicable interest charge by the actual
                        number of days in the given month. Interest shall be
                        debited from the AAA Margin Account daily. The Client’s
                        account statements shall calculate daily accruals of
                        interest at the base rate, as indicated in the AAA
                        website. However, adjustments to take into consideration
                        the daily flexible interest charges shall be made at the
                        end of the month.
                      </p>
                      <p className="pMarginTitle">7. TRADING RULES</p>
                      <p className="pMarginsub">
                        7.1 If this Margin Line is suspended or deemed
                        terminated at any time, the Client shall settle in full
                        all of the billings for the payment of any debit balance
                        and/or other obligations under the AAA Margin Account.
                      </p>
                      <p className="pMarginsub">
                        7.2 Upon receipt of notice of the suspension or
                        termination of the Margin Facility, the Client shall
                        discharge his obligations by infusing additional funds,
                        depositing Marginable Securities, or placing an order
                        with AAA to sell a sufficient amount of the indentured
                        securities to cover such obligations; provided, however,
                        that if such sale is not executed on the trading day
                        after termination of the Margin line, or when the net
                        proceeds of such sale are insufficient, then the Client
                        shall pay upon billing the entire remaining obligations.
                      </p>
                      <p className="pMarginsub">
                        7.3 The Client shall at all times trade within the
                        limits of the Margin Line, i.e. a two peso security
                        cover for every one peso exposure (debit balance) with
                        AAA. In the event the securities on the AAA Margin
                        Account fall by more than Twelve and one half percent
                        (12.5%) in market value, thereby reducing the account
                        position or margin cover to less than One hundred
                        seventy five percent (175%) of the debit balance, AAA
                        shall issue a margin call to the Client. The Client
                        shall have a period of five (5) calendar days within
                        which to increase the margin cover back to Two hundred
                        percent (200%), by infusing cash, depositing Marginable
                        Securities, or selling securities in the AAA Margin
                        Account.
                      </p>
                      <p className="pMarginsub">
                        7.5 If the Client is unable to increase the margin cover
                        as required by AAA, or the Client’s stock position
                        continues to decline or declines by more than Twenty
                        five percent (25%), thereby reducing the account
                        position or margin cover to less than One hundred fifty
                        percent (150%) of the debit balance, AAA shall issue a
                        notice of margin suspension and the following shall be
                        implemented and complied with:
                      </p>
                      <p className="pMarginsub">
                        7.5.1 Suspension of margin facility and conversion of
                        the AAA Margin Account to a cash account status;
                      </p>
                      <p className="pMarginsub">
                        7.5.2 The margin cover shall be raised back to Two
                        hundred percent (200%) by selling marginable or
                        nonmarginable securities or by remitting or depositing
                        with AAA within twenty-four (24) hours after the notice
                        is given by AAA, such additional funds or marketable
                        securities acceptable to AAA and indentured to it as may
                        be necessary to restore the AAA Margin Account within
                        the limits of the Margin Facility. Upon failure for any
                        reason whatsoever to deposit additional funds or
                        security to maintain the AAA Margin Account within the
                        limits of the Margin Line, in addition to the powers
                        under this agreement, the Client hereby confers upon AAA
                        the right to close out the whole or part of the Client’s
                        open transactions at any market price and at any time
                        AAA deems it proper. The Client understands that the
                        Client shall be liable for any losses or deficiencies
                        resulting therefrom plus interest charges. The
                        enforcement of any right hereunder shall not be
                        construed as a waiver, release, or discharge of any
                        deficit or debit balance which may occur in the AAA
                        Margin Account with AAA;
                      </p>
                      <p className="pMarginsub">
                        7.5.3 Compliance with paragraph 7.5.2 hereto shall not
                        restore the Client’s margin privilege and the Client
                        will have to re-apply for another margin facility
                        subject to the same rules and guidelines;
                      </p>
                      <p className="pMarginsub">
                        7.5.4 The Client further acknowledges that the Client
                        accepts full responsibility for the consequences of all
                        transactions executed by AAA for and on the Client’s
                        behalf and that under no circumstance shall the Client
                        hold AAA liable for any loss or damage suffered or
                        incurred thereby. The Client further confirms that in
                        the event AAA fails to execute the Client’s orders or
                        instructions expeditiously, if at all, the Client shall
                        not hold AAA liable for any loss or damage resulting
                        thereof; and
                      </p>
                      <p className="pMarginsub">
                        7.5.5 The Client acknowledges that AAA shall make the
                        margin call and notice of margin suspension by way of
                        email notification and/or notice in the AAA website. AAA
                        is not obligated to notify the Client of said events in
                        person, by telephone, or by any other means.
                      </p>
                      <p className="pMarginsub">
                        7.6 The suspension of margin privileges and/or the
                        conversion of the AAA Margin Account to a cash account
                        shall not in any way relieve the Client of any of his
                        obligations under this AGREEMENT.
                      </p>
                      <p className="pMarginTitle">8. POWER OF ATTORNEY</p>
                      <p className="pMarginsub">
                        If this agreement is terminated or deemed terminated, or
                        in case of death or incapacity or when a petition for
                        bankruptcy or for the appointment of a receiver or
                        conservator, or similar petition, is filed by or against
                        the Client (or any of the Clients, in case of a joint
                        account), or in the event the Client fails to deliver
                        the required margin cover or otherwise fail to comply
                        with this AGREEMENT, or whenever in its discretion, AAA
                        deems it necessary for its protection and notifies the
                        Client of such finding, all amounts owing to AAA under
                        this AGREEMENT or any margin credit hereunder shall be
                        immediately due and payable without demand or notice
                        other than as specified in this paragraph, and AAA shall
                        be deemed to have, and is hereby granted, an irrevocable
                        power of attorney (coupled with interest) to do the
                        following on the Client’s behalf:
                      </p>
                      <p className="pMarginsub">
                        a) To sell any or all of the indentured securities which
                        may be in AAA’s possession or which it may be carrying
                        for the Client, either individually or jointly with
                        others. AAA shall in case of any such sale, be entitled
                        to any deficiency in case the net proceeds of the sale
                        are less than the Client’s obligations which deficiency
                        the Client and the Client’s successors or assigns shall
                        remit to AAA upon demand, and the Client shall, at all
                        times, be liable for the payment of the full account of
                        any obligations owing under the Margin Line and for any
                        deficiency remaining thereunder in the event the
                        liquidation thereof in whole or in part by anyone of the
                        parties thereto;
                      </p>
                      <p className="pMarginsub">
                        b) To buy any or all securities of which the AAA Margin
                        Account may be short;
                      </p>
                      <p className="pMarginsub">
                        c) To cancel any outstanding orders in order to close
                        out the AAA Margin Account in whole or in part, or in
                        order to close out any commitments made in my/our
                        behalf; and
                      </p>
                      <p className="pMarginsub">
                        d) To apply to the payment of any of the obligations
                        under the Margin Line, any funds, securities, or things
                        of value belonging to the Client which may now or
                        hereafter be in AAA’s possession or control. Any such
                        sales or purchases provided in this paragraph may be
                        made at AAA's discretion at either trading floor of the
                        PSE or other markets where such business is usually
                        transacted, or at public auction or private sale.
                        Further, AAA has the discretion to choose which security
                        in the AAA Margin Account will be liquidated or sold
                        pursuant to this paragraph. c) To cancel any outstanding
                        orders in order to close out the AAA Margin Account in
                        whole or in part, or in order to close out any
                        commitments made in my/our behalf; and
                      </p>
                      <p className="pMarginTitle">
                        9. APPLICATION OF SALES PROCEEDS
                      </p>
                      <p className="pMarginsub">
                        Notwithstanding the extinguishment of the lien and
                        security interest created herein, the Client hereby
                        expressly authorizes AAA to apply in accordance with law
                        the proceeds of any sale of securities contemplated in
                        paragraph 7 hereof, in full or partial satisfaction as
                        the case may be, of the Client’s obligations under the
                        Margin Line.
                      </p>
                      <p className="pMarginTitle">10. MARGIN ACCOUNT</p>
                      <p className="pMarginsub">
                        Upon approval of the Client’s application for Margin
                        Facility, the Client’s cash account will be upgraded to
                        a AAA Margin Account. The Client acknowledges that
                        securities held in the AAA Margin Account may be
                        pledged, repledged, hypothecated, or rehypothecated for
                        any amount which AAA, in its sole discretion, may deem
                        necessary. The Client also acknowledges that the
                        Client’s securities may be loaned to AAA or loaned out
                        to others and that AAA may receive compensation in
                        connection with the lending of said securities.
                      </p>
                      <p className="pMarginTitle">11. ATTORNEY'S FEES, ETC.</p>
                      <p className="pMarginsub">
                        Should the AAA Margin Account be referred to a lawyer
                        for collection, the Client shall be further liable to
                        pay, by way of attorney's fees, a sum equivalent to Ten
                        percent (10%) of the total amount due but not less than
                        Thirty Thousand Pesos (PhP30,000.00), in addition to the
                        costs of suits and other litigation expenses. Venue of
                        all suits hereunder shall be in the proper courts of
                        Makati City, Philippines.
                      </p>
                      <p className="pMarginsub">
                        In all purchases and sales under this AGREEMENT,
                        including those made pursuant to the rights, powers and
                        remedies of AAA specified herein, the applicable
                        broker's commission shall be chargeable by AAA for its
                        own account or for the account of other brokers, and
                        shall be payable in accordance with the applicable rules
                        of the Exchange where the transaction was made and/or
                        terms of the relevant invoice. All incidental costs,
                        taxes and expenses in connection with such transactions,
                        or in connection with the administration of the Margin
                        Line or the securities purchased, sold and/or indentured
                        thereunder shall be for the Client’s account and shall
                        be payable to AAA upon the billing thereof
                      </p>
                      <p className="pMarginTitle">13. RIGHT TO TERMINATE</p>
                      <p className="pMarginsub">
                        Without prejudice to the rights and obligations created
                        and the powers and authorities granted under this
                        AGREEMENT, this AGREEMENT may be terminated by AAA
                        immediately by serving the Client a written notice of
                        such termination. AAA shall have the right at any time
                        not to grant margin or allow availments under the Margin
                        Line should AAA in its sole and absolute discretion so
                        decide.
                      </p>
                      <p className="pMarginTitle">
                        14. ENTIRE AGREEMENT, WAIVER, AND AMENDMENTS
                      </p>
                      <p className="pMarginsub">
                        This AGREEMENT contains the entire understanding and
                        agreement between the Client and AAA concerning the
                        subject matter hereof. All other terms and conditions of
                        the Online Trading Agreement which are not inconsistent
                        herewith shall remain in force and effect. The Client
                        may not assign his rights and obligations hereunder
                        without AAA’s prior written consent. The above
                        notwithstanding, AAA may modify the terms of this
                        Agreement upon notice. The continued use of AAA's
                        services following receipt of notice will constitute the
                        Client’s acceptance of the amendments. Should the Client
                        not accept the modification, the Client must notify AAA
                        in writing
                      </p>
                      <p className="pMarginTitle">15. SEVERABILITY</p>
                      <p className="pMarginsub">
                        If any provision(s) hereof should at any time become
                        inconsistent with any present or future law, rule or
                        regulations of the Government, the SEC, the PSE, or the
                        CMIC, said provision shall be deemed to be suspended,
                        modified or accordingly amended to conform to such law,
                        rule or regulations; but the remaining provisions of
                        this AGREEMENT shall not be affected, thereby and shall
                        continue and remain in full force and effect until the
                        obligations arising hereunder shall have been fully paid
                        and performed or until terminated in the manner stated
                        in this AGREEMENT.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "18px",marginBottom: "18px" }}>
                  <div className="col-lg-6">
                    <button className="btnDecline" onClick = {goDecline}>Decline</button>
                  </div>
                  <div className="col-lg-6">
                    <button className="btnAccept" onClick = {goAccept}>Accept</button>
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

export default form;
