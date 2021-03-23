import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Head from "next/head";

function success() {
  useEffect(() => {
    var animateButton = function (e) {
      e.preventDefault;
      //reset animation
      e.target.classList.remove("animate");

      e.target.classList.add("animate");
      setTimeout(function () {
        e.target.classList.remove("animate");
      }, 700);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (var i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener("mouseover", animateButton, false);
    }
  }, []);

  return (
    <>
      <Header></Header>
      <div className="container-fluid conSuccess h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <img
                src="Image/gif.gif"
                className="img-fluid mx-auto d-flex"
              ></img>
              <p className="pReady">Ready to Liftoff!</p>
              <p className="pYour">Your account application is under review</p>

              <p className="pCheck">
                <span>
                  <img
                    src="Image/check.png"
                    style={{ width: "15px", marginRight: "10px" }}
                  ></img>
                </span>
                If approved, you will receive your account password via email.
              </p>

              <p className="pCheck">
                <span>
                  <img
                    src="Image/check.png"
                    style={{ width: "15px", marginRight: "10px" }}
                  ></img>
                </span>
                If we need more information prior to account approval, our team
                will be in touch with you via email
              </p>

              <p className="pCheck">
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
                .
              </p>

              <a href="https://trade.aaa-equities.com.ph" style = {{textDecoration: "none"}}>
                <button className="bubbly-button">Go login</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default success;
