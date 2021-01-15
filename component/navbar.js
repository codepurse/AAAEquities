import React, { Component } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export class navbar extends Component {
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
        </nav>
      </div>
    );
  }
}

export default navbar;
