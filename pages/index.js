import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Head from "next/head";
import Select from "react-select";
function index() {
  const options_gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const options_civilstatus = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widowed", label: "Widowed" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      color: "white",
      border: "1px solid #cecece",
      boxShadow: "none",
      borderRadius: "10px",
      width: "100%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : "",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
  };

  function nextForm() {
    if ($(".divForm1").css("display") == "block") {
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "50%");
        $(".colImage").addClass("col-sm-4 col-4");
        $(".box").css("margin-top", "50px");
        $(".circle2").addClass("circleactivemobile");
        $(".circle1").addClass("circlenotactivemobile");
      } else {
        $(".imgRight").css("width", "auto");
        $(".imgCircle2").css("width", "25px");
        $(".imgCircle1").css("width", "15px");
        $(".circle2").removeClass("circlenotactive");
        $(".circle1").addClass("circlenotactive");
      }
      $(".colLeft").removeClass("col-lg-6");
      $(".colLeft").addClass("col-lg-8");
      $(".colRight").removeClass("col-lg-6");
      $(".colRight").addClass("col-lg-4");
      $(".divForm2").fadeIn(200);
      $(".divForm1").hide();
      $(".box").css("height", "500px");
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/form2.svg");
      $(".pForm1").fadeIn(200);

      $(window).scrollTop(0);
      $(".colBack").show();
    } else if ($(".divForm2").css("display") == "block") {
      $(".divForm3").fadeIn(200);
      $(".divForm2").hide();
      $(".box").css("height", "450px");
      $(".box").css("margin-top", "-40px");
      $(window).scrollTop(0);
    } else if ($(".divForm3").css("display") == "block") {
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "50%");
        $(".colImage").addClass("col-sm-4 col-4");
        $(".box").css("margin-top", "50px");
        $(".circle3").addClass("circleactivemobile");
        $(".circle2").addClass("circlenotactivemobile");
      } else {
        $(".imgCircle3").css("width", "25px");
        $(".imgCircle2").css("width", "15px");
        $(".imgRight").addClass("animate__animated animate__zoomIn");
        $(".imgRight").attr("src", "Image/form3.svg");
        $(".circle3").removeClass("circlenotactive");
        $(".circle2").addClass("circlenotactive");
      }
      $(".divForm4").fadeIn(200);
      $(".divForm3").hide();
      $(".box").css("height", "550px");

      $(".pForm").hide();
      $(".box").css("margin-top", "10px");
      $(window).scrollTop(0);
      $(".pForm2").fadeIn(200);
    } else if ($(".divForm4").css("display") == "block") {
      $(".divForm5").fadeIn(200);
      $(".divForm4").hide();
      $(".box").css("height", "550px");
      $(window).scrollTop(0);
    } else if ($(".divForm5").css("display") == "block") {
      $(".divForm6").fadeIn(200);
      $(".divForm5").hide();
      $(".box").css("height", "550px");
      $(window).scrollTop(0);
    } else if ($(".divForm6").css("display") == "block") {
      $(".colLeft").removeClass("col-lg-8");
      $(".colLeft").addClass("col-lg-6");
      $(".colRight").removeClass("col-lg-4");
      $(".colRight").addClass("col-lg-6");
      $(".divForm7").fadeIn(200);
      $(".divForm6").hide();
      $(".box").css("height", "450px");
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/form7.svg");
      $(".pForm").hide();
      $(".pForm7").fadeIn(200);
      $(window).scrollTop(0);
    } else if ($(".divForm7").css("display") == "block") {
      console.log("ito yon");
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "30%");
        $(".colImage").removeClass("col-sm-4 col-4");
        $(".pForm7").addClass("pImportant");
        $(".colText").removeClass("col-sm-8 col-8");
      } else {
        $(".imgRight").css("width", "auto");
      }
      $(".divForm8").fadeIn(200);
      $(".divForm7").hide();
      $(".box").css("height", "350px");
      $(window).scrollTop(0);
    } else if ($(".divForm8").css("display") == "block") {
      $(".divForm9").fadeIn(200);
      $(".divForm8").hide();
      $(".box").css("height", "350px");
      $(window).scrollTop(0);
    } else if ($(".divForm9").css("display") == "block") {
      $(".divForm10").fadeIn(200);
      $(".divForm9").hide();
      $(".box").css("height", "450px");
      $(window).scrollTop(0);
    } else if ($(".divForm10").css("display") == "block") {
      $(".divForm11").fadeIn(200);
      $(".divForm10").hide();
      $(".box").css("height", "300px");
      $(window).scrollTop(0);
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "70%");
        $(".colImage").removeClass("col-sm-4 col-4");
      } else {
        $(".imgRight").css("width", "auto");
      }
      $(".imgRight").css("width", "80%");
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/phone1.png");
      $(".pForm").hide();
    } else if ($(".divForm11").css("display") == "block") {
      $(".pBox").css("font-size", "2.2rem");
      $(".divForm12").fadeIn(200);
      $(".divForm11").hide();
      $(".box").css("height", "315px");
      $(window).scrollTop(0);
    }
  }
                                                                                                                                      
  function prevForm() {
    if ($(".divForm2").css("display") == "block") {
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "70%");
        $(".colImage").removeClass("col-sm-4 col-4");

        $(".circle1").addClass("circleactivemobile");

        $(".circle2").removeClass("circleactivemobile");
      } else {
        $(".imgRight").css("width", "auto");
      }
      $(".colLeft").removeClass("col-lg-8");
      $(".colLeft").addClass("col-lg-6");
      $(".colRight").removeClass("col-lg-4");
      $(".colRight").addClass("col-lg-6");
      $(".divForm1").fadeIn(200);
      $(".divForm2").hide();
      $(".box").css("height", "350px");
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/phone1.png");
      $(".pForm").hide();
      $(".imgCircle1").css("width", "25px");
      $(".imgCircle2").css("width", "15px");
      $(".circle1").removeClass("circlenotactive");
      $(".circle2").addClass("circlenotactive");
      $(".colBack").hide();
    } else if ($(".divForm3").css("display") == "block") {
      $(".divForm2").fadeIn(200);
      $(".divForm3").hide();
      $(".box").css("height", "500px");
      $(".box").css("margin-top", "30px");
    } else if ($(".divForm4").css("display") == "block") {
      if ($(window).width() < 501) {
        $(".circle2").addClass("circleactivemobile");

        $(".circle3").removeClass("circleactivemobile");
      } else {
        $(".imgCircle2").css("width", "25px");
        $(".imgCircle3").css("width", "15px");
        $(".imgRight").addClass("animate__animated animate__zoomIn");
        $(".imgRight").attr("src", "Image/form2.svg");
        $(".circle2").removeClass("circlenotactive");
        $(".circle3").addClass("circlenotactive");
      }
      $(".divForm3").fadeIn(200);
      $(".divForm4").hide();
      $(".box").css("height", "450px");

      $(".pForm2").hide();
      $(".pForm1").fadeIn(200);
    } else if ($(".divForm5").css("display") == "block") {
      $(".divForm4").fadeIn(200);
      $(".divForm5").hide();
    } else if ($(".divForm6").css("display") == "block") {
      $(".divForm5").fadeIn(200);
      $(".divForm6").hide();
    } else if ($(".divForm7").css("display") == "block") {
      console.log("naay");
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "50%");
        $(".colImage").addClass("col-sm-4 col-4");
        $(".colText").addClass("col-sm-8 col-8");
      } else {
        $(".imgRight").css("width", "auto");
      }
      $(".colLeft").removeClass("col-lg-6");
      $(".colLeft").addClass("col-lg-8");
      $(".colRight").removeClass("col-lg-6");
      $(".colRight").addClass("col-lg-4");
      $(".divForm6").fadeIn(200);
      $(".divForm7").hide();
      $(".box").css("height", "550px");
      $(".pForm7").hide();
      $(".pForm2").fadeIn(200);
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/form3.svg");
    } else if ($(".divForm8").css("display") == "block") {
      $(".divForm7").fadeIn(200);
      $(".divForm8").hide();
      $(".box").css("height", "450px");
    } else if ($(".divForm9").css("display") == "block") {
      $(".divForm8").fadeIn(200);
      $(".divForm9").hide();
      $(".box").css("height", "350px");
    } else if ($(".divForm10").css("display") == "block") {
      $(".divForm9").fadeIn(200);
      $(".divForm10").hide();
      $(".box").css("height", "350px");
    } else if ($(".divForm11").css("display") == "block") {
      if ($(window).width() < 501) {
        $(".imgRight").css("width", "50%");
      } else {
        $(".imgRight").css("width", "auto");
      }
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/form7.svg");
      $(".pForm7").show();
      $(".divForm10").fadeIn(200);
      $(".divForm11").hide();
      $(".box").css("height", "450px");
    } else if ($(".divForm12").css("display") == "block") {
      $(".divForm11").fadeIn(200);
      $(".divForm12").hide();
      $(".box").css("height", "300px");
    }
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="JGO Delivery Maasahan! Abangan!" />
        <title>Experience next level trading</title>
        <meta property="og:site_name" content="AAA Equities"></meta>
        <meta property="og:title" content="Experience next level trading" />
        <meta
          property="og:description"
          content="Experience next level trading"
        />
      </Head>
      <Header />
      <Navbar />
      <div className="container h-100 conMain">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 colLeft order-2 order-lg-1">
            <div className="box">
              <div className="boxLine"></div>
              <div className="boxCircle">
                <div className="circle circle1">
                  <img
                    src="Image/user.svg"
                    className="img-fluid mx-auto d-flex imgCircle1"
                    style={{ width: "25px", paddingTop: "15px" }}
                  ></img>
                </div>
                <div className="circle circle2 circlenotactive">
                  <img
                    src="Image/record.svg"
                    className="img-fluid mx-auto d-flex imgCircle2"
                    style={{ width: "15px", paddingTop: "15px" }}
                  ></img>
                </div>
                <div className="circle circle3 circlenotactive">
                  <img
                    src="Image/computer.svg"
                    className="img-fluid mx-auto d-flex imgCircle3"
                    style={{ width: "15px", paddingTop: "15px" }}
                  ></img>
                </div>
              </div>

              <div className="divForm1">
                <p className="pBox">Account Type</p>

                <div className="cntr">
                  <label htmlFor="rdo-1" className="btn-radio">
                    <input type="radio" id="rdo-1" name="radio-grp" />
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <circle cx={10} cy={10} r={9} />
                      <path
                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                        className="inner"
                      />
                      <path
                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                        className="outer"
                      />
                    </svg>
                    <span className="pRadio">Individual</span>
                  </label>
                  <label htmlFor="rdo-2" className="btn-radio">
                    <input type="radio" id="rdo-2" name="radio-grp" />
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <circle cx={10} cy={10} r={9} />
                      <path
                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                        className="inner"
                      />
                      <path
                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                        className="outer"
                      />
                    </svg>
                    <span className="pRadio">Joint</span>
                  </label>
                  <label htmlFor="rdo-3" className="btn-radio">
                    <input type="radio" id="rdo-3" name="radio-grp" />
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <circle cx={10} cy={10} r={9} />
                      <path
                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                        className="inner"
                      />
                      <path
                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                        className="outer"
                      />
                    </svg>
                    <span className="pRadio">Corporate</span>
                  </label>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <input
                    className="inp-cbx"
                    id="cbx"
                    type="checkbox"
                    style={{ display: "none" }}
                  />
                  <label className="cbx" htmlFor="cbx">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1" />
                      </svg>
                    </span>
                    <span className="pCheck">
                      I agree to the terms and conditions
                    </span>
                  </label>
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
                    <span className="pCheck">
                      I have read the privacy policy
                    </span>
                  </label>
                </div>
              </div>
              <div className="divForm2">
                <p className="pBox">Personal Information</p>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="First name"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Middle name"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Last name"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Telephone number"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Mobile number"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Birthplace"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Residential address"
                    ></input>
                  </div>
                </div>
                <div
                  className="row align-items-center"
                  style={{ marginTop: "15px" }}
                >
                  <div className="col-lg-12">
                    <div className="form-inline inlineDate">
                      <p className="pBoxTitle">Birth Date</p>
                      <input
                        type="text"
                        className="txtDate"
                        placeholder="MM"
                      ></input>
                      <input
                        type="text"
                        className="txtDate"
                        placeholder="DD"
                      ></input>
                      <input
                        type="text"
                        className="txtDate"
                        placeholder="YY"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divForm3">
                <p className="pBox">Personal Information</p>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="TIN"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Nationality"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "18px" }}>
                  <div className="col-lg-6">
                    <Select
                      options={options_gender}
                      styles={customStyles}
                      placeholder="Gender"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Select
                      options={options_civilstatus}
                      styles={customStyles}
                      placeholder="Civil Status"
                    />
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Employer"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Job title"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Business address"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="divForm4">
                <p className="pBox">Account Information</p>
                <p className="pBoxSub">Tell us where to send your money</p>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <Select
                      options={options_civilstatus}
                      styles={customStyles}
                      placeholder="Account type"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Bank"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Bank"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Bank"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Account number"
                    ></input>
                  </div>
                </div>
                <p className="pBoxSub" style={{ marginTop: "15px" }}>
                  Tell us how to help
                </p>
                <p className="pBoxSub1" style={{ marginTop: "10px" }}>
                  Investment Objective
                </p>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-4" className="btn-radio">
                      <input type="radio" id="rdo-4" name="radio-grp" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">Speculation</span>
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-5" className="btn-radio">
                      <input type="radio" id="rdo-5" name="radio-grp" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">Growth</span>
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-6" className="btn-radio">
                      <input type="radio" id="rdo-6" name="radio-grp" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">Long-Term</span>
                    </label>
                  </div>
                  <div className="col-lg-5">
                    <label htmlFor="rdo-7" className="btn-radio">
                      <input type="radio" id="rdo-7" name="radio-grp" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">Preservation of capital</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="divForm5">
                <p className="pBox">Account Information</p>
                <p className="pBoxSub">Tell us how to help</p>
                <div className="row">
                  <div className="col-lg-6">
                    <Select
                      options={options_gender}
                      styles={customStyles}
                      placeholder="Source of funds"
                    />
                  </div>
                </div>
                <p className="pBoxSub1" style={{ marginTop: "18px" }}>
                  Total Assets
                </p>
                <div className="row " style={{ marginTop: "10px" }}>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-8" className="btn-radio">
                      <input type="radio" id="rdo-8" name="radio-grpAssets" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">P50,000-500,000</span>
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-9" className="btn-radio">
                      <input type="radio" id="rdo-9" name="radio-grpAssets" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">P500,000-1,000,000</span>
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-10" className="btn-radio">
                      <input type="radio" id="rdo-10" name="radio-grpAssets" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">Over P1,000,000</span>
                    </label>
                  </div>
                </div>
                <p className="pBoxSub1" style={{ marginTop: "18px" }}>
                  Annaual Income
                </p>
                <div className="row " style={{ marginTop: "10px" }}>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-8" className="btn-radio">
                      <input type="radio" id="rdo-8" name="radio-grpAssets" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">P50,000-500,000</span>
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-9" className="btn-radio">
                      <input type="radio" id="rdo-9" name="radio-grpAssets" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">P500,000-1,000,000</span>
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-10" className="btn-radio">
                      <input type="radio" id="rdo-10" name="radio-grpAssets" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">Over P1,000,000</span>
                    </label>
                  </div>
                </div>
                <p className="pBoxSub1" style={{ marginTop: "18px" }}>
                  Net Worth
                </p>
                <div className="row " style={{ marginTop: "10px" }}>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-8" className="btn-radio">
                      <input type="radio" id="rdo-8" name="radio-grpAssets" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">P50,000-500,000</span>
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-9" className="btn-radio">
                      <input type="radio" id="rdo-9" name="radio-grpAssets" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">P500,000-1,000,000</span>
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="rdo-10" className="btn-radio">
                      <input type="radio" id="rdo-10" name="radio-grpAssets" />
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx={10} cy={10} r={9} />
                        <path
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        />
                        <path
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        />
                      </svg>
                      <span className="pRadio">Over P1,000,000</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="divForm6">
                <p className="pBox">Account Information</p>
                <p className="pBoxTitle" style={{ marginBottom: "18px" }}>
                  Are you associated with another broker or dealer?
                </p>
                <div className="radio">
                  <label htmlFor="rdo-11" className="btn-radio">
                    <input type="radio" id="rdo-11" name="radio-grpDealer" />
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <circle cx={10} cy={10} r={9} />
                      <path
                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                        className="inner"
                      />
                      <path
                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                        className="outer"
                      />
                    </svg>
                    <span className="pRadio">
                      Yes, if so state the name of the company
                    </span>
                  </label>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Company name"
                    ></input>
                  </div>
                </div>

                <label htmlFor="rdo-12" className="btn-radio">
                  <input type="radio" id="rdo-12" name="radio-grpDealer" />
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <circle cx={10} cy={10} r={9} />
                    <path
                      d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                      className="inner"
                    />
                    <path
                      d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                      className="outer"
                    />
                  </svg>
                  <span className="pRadio">No</span>
                </label>
                <p className="pBoxTitle" style={{ marginBottom: "20px" }}>
                  Are you an officer/director of a listed company?
                </p>
                <label htmlFor="rdo-12" className="btn-radio">
                  <input type="radio" id="rdo-12" name="radio-grpCompany" />
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <circle cx={10} cy={10} r={9} />
                    <path
                      d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                      className="inner"
                    />
                    <path
                      d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                      className="outer"
                    />
                  </svg>
                  <span className="pRadio">
                    Yes, if so state the name of the company
                  </span>
                </label>
                <div
                  className="row"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Company name"
                    ></input>
                  </div>
                </div>
                <label htmlFor="rdo-13" className="btn-radio">
                  <input type="radio" id="rdo-13" name="radio-grpCompany" />
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <circle cx={10} cy={10} r={9} />
                    <path
                      d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                      className="inner"
                    />
                    <path
                      d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                      className="outer"
                    />
                  </svg>
                  <span className="pRadio">No</span>
                </label>
              </div>
              <div className="divForm7">
                <p className="pBox">For Corporate Accounts</p>
                <p className="pBoxTitle" style={{ marginBottom: "20px" }}>
                  Indicate the names of personnel authorized to transact on
                  behalf of the company
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Position"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "18px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Position"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "18px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Position"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="divForm8">
                <p className="pBox">Upload signature</p>
                <div className="divUpload">
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload">
                    Client Signature over <br /> Printed Name
                  </p>
                </div>
              </div>
              <div className="divForm9">
                <p className="pBox">Upload signature</p>
                <div className="divUpload">
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload">
                    Joint Account Holder's
                    <br /> Siognature over Printed Name
                  </p>
                </div>
              </div>
              <div className="divForm10">
                <p className="pBox">Upload two valid IDs</p>
                <div className="divUpload">
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload">Upload first ID photo</p>
                </div>
                <div className="divUpload">
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload">Upload second ID photo</p>
                </div>
              </div>
              <div className="divForm11">
                <p className="pBox">Account Type</p>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Username"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10 px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox"
                      placeholder="Email address"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="divForm12">
                <p className="pBox">Upload a photo of your self</p>
                <div className="divUpload">
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload">Take a photo</p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "15px" }}>
                <div className="col-lg-4 colBack col-sm-6 col-6">
                  <button className="btnBack" onClick={prevForm}>
                    BACK
                  </button>
                </div>
                <div className="col-lg-4 col-sm-6 col-6">
                  <button className="btnNext" onClick={nextForm}>
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 colRight order-1 order-lg-2">
            <div className="row align-items-center">
              <div className="col-lg-12 colImage">
                <img
                  src="Image/phone1.png"
                  className="img-fluid imgRight mx-auto d-flex animate__faster"
                ></img>
              </div>
              <div className="col-lg-12 col-sm-8 col-8 colText">
                <p className="pForm pForm1">
                  When <b>resistance</b> levels are broken, a breakout may
                  occur. Buy breakouts automatically with Conditional Orders.
                </p>
                <p className="pForm pForm2">
                  When <b>support</b> levels are broken, a breakout may occur.
                  Set automatic stops with Conditional orders to protect your
                  capital.
                </p>
                <p className="pForm pForm7">
                  <b>Margin</b> increases your buying power by borrowing funds.
                  To use margin, upgrade your account to a AAA Turbo Margin
                  Account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
