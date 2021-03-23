import React, { Component } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import axios from "axios";
import swal from "@sweetalert/with-react";
export class navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };

    this.verifyEmail = this.verifyEmail.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }

  changeEmail(e) {
    $(".pErroremail").hide();
    this.setState({email: e.target.value})
  }

  verifyEmail() {
    if (this.state.email == "") {
      $(".pErroremail").show();
    } else {
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
        },
      };
      let formdata = new FormData();
      formdata.append("email", this.state.email);

      const api_upgrade = appglobal.api.base_api + appglobal.api.upgrade_request;

      axios
      .post(api_upgrade, formdata, options)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
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
                  <p className="pErrorSub">This email doesn't exist.</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    
  }

  showModal() {
    $("#exampleModalCenter").modal("show");
  }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-md fixed-top"
          style={{ padding: "20px 20px" }}
        >
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="navbar-brand" href="#">
            <Link href="/">
              <a>
                <img
                  src="Image/imglogo.png"
                  className="img-fluid imglogo"
                  style={{ width: "130px", marginLeft: "20px" }}
                />
              </a>
            </Link>
          </nav>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="col2 ml-auto">
              <ul className="nav navbar-nav" style={{ marginRight: "15px" }}>
                <li>
                  <button className="btnUpgrade" onClick={this.showModal}>
                    Upgrade account
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <nav
            className="navbar navbar-expand-md fixed-top"
            style={{ padding: "20px 20px" }}
          >
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#collapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <nav className="navbar-brand" href="#">
              <Link href="/">
                <a>
                  <img
                    src="Image/imglogo.png"
                    className="img-fluid imglogo"
                    style={{ width: "130px", marginLeft: "20px" }}
                  />
                </a>
              </Link>
            </nav>
            <div className="collapse navbar-collapse" id="collapse">
              <div className="col2 ml-auto">
                <ul className="nav navbar-nav" style={{ marginRight: "15px" }}>
                  <li>
                    <button className="btnUpgrade" onClick={this.showModal}>
                      Upgrade account
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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
                        We will send a email verification link in your given
                        email address.
                      </p>
                      <input
                        type="email"
                        className="txtEmailverify"
                        placeholder="Ex. sample@gmail.com"
                        onChange={this.changeEmail}
                      ></input>
                      <p className="pErroremail">
                        Email address cannot be blank.
                      </p>
                      <button className="btnVerify" onClick={this.verifyEmail}>
                        Verify email
                      </button>
                      <p className="pQuestions">
                        Questions? Email us at{" "}
                        <span className="spanEmail">
                          sample@aaaequities.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;
