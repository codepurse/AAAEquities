import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Head from "next/head";
import Select from "react-select";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getApi from "../services/api.service";
import swal from "@sweetalert/with-react";

function index() {
  const [accounttype, setAccounttype] = React.useState("");
  const [listaccounttype, setListaccounttype] = React.useState([]);
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [mname, setMname] = React.useState("");
  const [telnum, setTelnum] = React.useState("");
  const [mobilenum, setMobilenum] = React.useState("");
  const [birthplace, setBirthplace] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [birthtDate, setBirthdate] = React.useState("");
  const [tin, setTin] = React.useState("");
  const [nationality, setNationality] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [genderpick, setGenderpick] = React.useState([]);
  const [civilstatus, setCivilstatus] = React.useState("");
  const [civilstatuspick, setCivilstatuspick] = React.useState([]);
  const [employer, setEmployer] = React.useState("");
  const [jobtitle, setJobtitle] = React.useState("");
  const [busadd, setBusadd] = React.useState("");
  const [errorselectgender, setErrorselectgender] = React.useState("");
  const [errorselectcivil, setErrorselectcivil] = React.useState("");
  const [bank, setBank] = React.useState("");
  const [branch, setBrach] = React.useState("");
  const [accountname, setAccountname] = React.useState("");
  const [accountnumber, setAccountnumber] = React.useState("");
  const [investmentobjective, setInvestmentobjective] = React.useState("");
  const [sourceoffunds, setSourceoffunds] = React.useState("");
  const [sourceoffundspick, setSourceoffundspick] = React.useState("");
  const [totalassets, setTotalassets] = React.useState("");
  const [annualincome, setAnnualincome] = React.useState("");
  const [networth, setNetworth] = React.useState("");
  const [errorselectfunds, setErrorselectfunds] = React.useState("");
  const [associated, setAssociated] = React.useState("");
  const [associatedcompany, setAssociatedcompany] = React.useState("");
  const [officer, setOfficer] = React.useState("");
  const [officername, setOfficername] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [emailadd, setEmailadd] = React.useState("");
  const [corporatename1, setCorporatename1] = React.useState("");
  const [corporateposition1, setCorporateposition1] = React.useState("");
  const [corporatename2, setCorporatename2] = React.useState("");
  const [corporateposition2, setCorporateposition2] = React.useState("");
  const [corporatename3, setCorporatename3] = React.useState("");
  const [corporateposition3, setCorporateposition3] = React.useState("");

  const[newcorporate, setNewcorporate] = React.useState([]);
  const [error1, setError1] = React.useState("");
  const [error2, setError2] = React.useState("");
  const [error3, setError3] = React.useState("");
  const [error4, setError4] = React.useState("");
  const [error5, setError5] = React.useState("");
  const [error6, setError6] = React.useState("");
  const [error7, setError7] = React.useState("");
  const [
    listinvestmentobjectives,
    setListinvestmentobjectives,
  ] = React.useState([]);
  const [listtotalassets, setlistTotalassets] = React.useState([]);
  const [listannualincome, setListannualincome] = React.useState([]);
  const [listfunds, setListfunds] = React.useState([]);
  const [listnetworth, setListnetworth] = React.useState([]);

  const [client, setClient] = React.useState("");
  const [clientpic, setClientpic] = React.useState("");
  const [jointholder, setJointholder] = React.useState("");
  const [jointholderpic, setJointholderpic] = React.useState("");
  const [validid1, setValidid1] = React.useState("");
  const [validid1pic, setValidid1pic] = React.useState("");
  const [validid2, setValidid2] = React.useState("");
  const [validid2pic, setValidid2pic] = React.useState("");
  const [profile, setProfile] = React.useState("");
  const [profilepic, setProfilepic] = React.useState("");

  const inputFileRef = useRef(null);
  const inputFileRef1 = useRef(null);
  const inputFileRef2 = useRef(null);
  const inputFileRef3 = useRef(null);
  const inputFileRef4 = useRef(null);

  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  const onBtnClick1 = () => {
    inputFileRef1.current.click();
  };
  const onBtnClick2 = () => {
    inputFileRef2.current.click();
  };
  const onBtnClick3 = () => {
    inputFileRef3.current.click();
  };
  const onBtnClick4 = () => {
    inputFileRef4.current.click();
  };

  function trylang() {
    console.log(JSON.stringify(newcorporate));
  }


  function saveaccount() {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    let formdata = new FormData();

    formdata.append("email", emailadd);
    formdata.append("name", username);
    formdata.append("firstname", fname);
    formdata.append("lastname", lname);
    formdata.append("middlename", mname);
    formdata.append("telephone_no", telnum);
    formdata.append("mobile_no", mobilenum);
    formdata.append("address", address);
    formdata.append("birthdate", moment(birthtDate).format("YYYY-MM-DD"));
    formdata.append("tin_no", tin);
    formdata.append("nationality", nationality);
    formdata.append("gender", gender);
    formdata.append("civil_status", civilstatus);
    formdata.append("employer", employer);
    formdata.append("job_title", jobtitle);
    formdata.append("business_address", busadd);
    formdata.append("account_type", accounttype);
    formdata.append("bank_name", bank);
    formdata.append("branch_name", branch);
    formdata.append("account_name", accountname);
    formdata.append("account_number", accountnumber);
    formdata.append("investment_objective", investmentobjective);
    formdata.append("source_of_funds", sourceoffunds);
    formdata.append("total_assets", totalassets);
    formdata.append("annual_income", annualincome);
    formdata.append("net_worth", networth);
    formdata.append("is_associated", associated);
    if (associated == "1") {
      formdata.append("associate_company_name", associatedcompany);
    }
    formdata.append("is_officer_director", officer);
    if (officer == "1") {
      formdata.append("officer_director_company_name", officername);
    }

    if (accounttype == "3") {
      formdata.append("corporate_accounts", JSON.stringify(newcorporate));
    } else {
      formdata.append("corporate_accounts", "");
    }
    formdata.append("client_signature_image", client, client.name);
    formdata.append(
      "joint_account_signature_image",
      jointholder,
      jointholder.name
    );
    formdata.append("valid_id_one", validid1, validid1.name);
    formdata.append("valid_id_two", validid2, validid2.name);
    formdata.append("self_image", profile, profile.name);

    const apiUrl_add_account =
      appglobal.api.base_api + appglobal.api.add_account;

    axios
      .post(apiUrl_add_account, formdata, options)
      .then((result) => {
        for (var pair of formdata.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
        console.log(result);
        $("#modalVerify").modal("hide");
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/check.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 " style={{ padding: "0px" }}>
                  <p className="pError">Success</p>
                  <p className="pErrorSub">Account succesfully created.</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
      .catch((err) => {
        console.log(err);
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 " style={{ padding: "0px" }}>
                  <p className="pError">Something went wrong</p>
                  <p className="pErrorSub">Your profile cannot be saved.</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
  }

  function handleFile(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pUploadclient").text(file.name);
    setClientpic(file.name);
    setClient(file);
    $(".divClient").attr("style", "2px solid #9098A9");
  }

  function handleFile1(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pUploadjoint").text(file.name);
    setJointholderpic(file.name);
    setJointholder(file);
    $(".divJoint").attr("style", "2px solid #9098A9");
  }

  function handleFile2(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pUploadvalid1").text(file.name);
    setValidid1pic(file.name);
    setValidid1(file);
    $(".divValid1").attr("style", "2px solid #9098A9");
  }

  function handleFile3(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pUploadvalid2").text(file.name);
    setValidid2pic(file.name);
    setValidid2(file);
    $(".divValid2").attr("style", "2px solid #9098A9");
  }

  function handleFile4(e) {
    let file = e.target.files[0];
    console.log(file.name);
    $(".pProfilepic").text(file.name);
    setProfilepic(file.name);
    setProfile(file);
  }

  function setAccount(e) {
    setAccounttype(e.currentTarget.className);
    console.log(e.currentTarget.className);
  }

  function changeFname(e) {
    setFname(e.currentTarget.value);
    console.log(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeMname(e) {
    setMname(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeLname(e) {
    setLname(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeTelnum(e) {
    setTelnum(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeMobilenum(e) {
    setMobilenum(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBirthplace(e) {
    setBirthplace(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeAddress(e) {
    setAddress(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBirthdate(date) {
    console.log(moment(date).format("l"));
    var filter = (moment().diff(date,'years'));
    if (filter > 17) {
      setBirthdate(date);
    }else {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-2" style={{ padding: "0px" }}>
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div className="col-lg-10 " style={{ padding: "0px" }}>
                <p className="pError">Oooops!</p>
                <p className="pErrorSub">Must be 18yrs old above.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
    $(".react-datepicker__input-container").css("border", "1px solid #CECECE");
  }

  function changetin(e) {
    setTin(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeNationality(e) {
    setNationality(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeGender(e) {
    setGender(e.label);
    setGenderpick({ value: e.value, label: e.label });
    console.log(e.label);
    setErrorselectgender("");
  }

  function changeCivil(e) {
    setCivilstatus(e.label);
    setCivilstatuspick({ value: e.value, label: e.label });
    setErrorselectcivil("");
  }

  function changeEmployer(e) {
    setEmployer(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeJobtitle(e) {
    setJobtitle(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBusadd(e) {
    setBusadd(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBank(e) {
    setBank(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBranch(e) {
    setBrach(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeAccountname(e) {
    setAccountname(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeAccountnumber(e) {
    setAccountnumber(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeInvestmentobjective(e) {
    setInvestmentobjective(e.currentTarget.id);
    console.log(e.currentTarget.className);
  }

  function changeSourceoffunds(e) {
    setSourceoffunds(e.value);
    setSourceoffundspick({ value: e.value, label: e.label });
    setErrorselectfunds("");
  }

  function changeTotalassets(e) {
    setTotalassets(e.currentTarget.className);
  }

  function changeAnnualincome(e) {
    setAnnualincome(e.currentTarget.className);
  }

  function changeNetworth(e) {
    setNetworth(e.currentTarget.className);
  }

  function changeAss(e) {
    setAssociated(e.currentTarget.className);
    if (e.currentTarget.className == "0") {
      setAssociatedcompany("");
    }
  }

  function changeOfficer(e) {
    setOfficer(e.currentTarget.className);
    if (e.currentTarget.className == "0") {
      setOfficername("");
    }
  }

  function changeAsscompany(e) {
    setAssociatedcompany(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeOfficername(e) {
    setOfficername(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeUsername(e) {
    setUsername(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeEmailadd(e) {
    setEmailadd(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporatename1(e) {
    setCorporatename1(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporateposition1(e) {
    setCorporateposition1(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporatename2(e) {
    setCorporatename2(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporateposition2(e) {
    setCorporateposition2(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporatename3(e) {
    setCorporatename3(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeCorporateposition3(e) {
    setCorporateposition3(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  const listyear = [];
  const listsourcefunds = [];

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
      color: "#212121",
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
      color: "#212121",
    }),
  };

  const customStyles_error = {
    control: (base, state) => ({
      ...base,
      color: "#212121",
      border: "1px solid red",
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
      color: "#212121",
    }),
  };

  const customStyles_birth = {
    control: (base, state) => ({
      ...base,
      color: "#212121",
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
      color: "#212121",
    }),
  };

  function nextForm() {
    if ($(".divForm1").css("display") == "block") {
      if (!accounttype) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 " style={{ padding: "0px" }}>
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">Please select an account type.</p>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (!$("#cbx").is(":checked") || !$("#cbx1").is(":checked")) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 " style={{ padding: "0px" }}>
                  <p className="pError">Something went wrong</p>
                  <p className="pErrorSub">
                    Please aggree to our terms and conditions and privacy
                    policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
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
      }
    } else if ($(".divForm2").css("display") == "block") {
      if (
        !fname ||
        !mname ||
        !lname ||
        !telnum ||
        !mobilenum ||
        !birthplace ||
        !address ||
        !birthtDate
      ) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 " style={{ padding: "0px" }}>
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill up all the missing fields.
                  </p>
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
        if (!birthtDate) {
          $(".react-datepicker__input-container").css(
            "border",
            "1px solid red"
          );
        }
      } else {
        $(".divForm3").fadeIn(200);
        $(".divForm2").hide();
        $(".box").css("height", "450px");
        $(".box").css("margin-top", "-40px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm3").css("display") == "block") {
      if (
        !gender ||
        !tin ||
        !nationality ||
        !civilstatus ||
        !employer ||
        !jobtitle ||
        !busadd
      ) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 " style={{ padding: "0px" }}>
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill up all the missing fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        var empty = 0;
        $(".txtForm3").each(function () {
          if (this.value == "") {
            empty++;
            $(this).css("border", "1px solid red");
          }
        });

        if (!gender) {
          setErrorselectgender("1");
        }
        if (!civilstatus) {
          setErrorselectcivil("1");
        }
      } else {
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
        $(".box").css("height", "520px");

        $(".pForm").hide();
        $(".box").css("margin-top", "10px");
        $(window).scrollTop(0);
        $(".pForm2").fadeIn(200);
      }
    } else if ($(".divForm4").css("display") == "block") {
      if (
        !bank ||
        !branch ||
        !accountnumber ||
        !accountname ||
        !investmentobjective
      ) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 " style={{ padding: "0px" }}>
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill up all the missing fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        var empty = 0;
        $(".txtForm4").each(function () {
          if (this.value == "") {
            empty++;
            $(this).css("border", "1px solid red");
          }
        });
      } else {
        $(".divForm5").fadeIn(200);
        $(".divForm4").hide();
        $(".box").css("height", "550px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm5").css("display") == "block") {
      if (!sourceoffunds || !totalassets || !annualincome || !networth) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 " style={{ padding: "0px" }}>
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill up all the missing fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        if (!sourceoffunds) {
          setErrorselectfunds("1");
        }
      } else {
        $(".divForm6").fadeIn(200);
        $(".divForm5").hide();
        $(".box").css("height", "550px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm6").css("display") == "block") {
      console.log(associated);
      console.log(officer);
      if (!associated || !officer) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div className="col-lg-10 " style={{ padding: "0px" }}>
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill up all the missing fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (associated == "1" && !associatedcompany) {
        $(".txtass").css("border", "1px solid red");
      } else if (officer == "1" && !officername) {
        $(".txtofficername").css("border", "1px solid red");
      } else {
        if (accounttype == "3") {
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
        } else {
          if ($(window).width() < 501) {
            $(".imgRight").css("width", "30%");
            $(".colImage").removeClass("col-sm-4 col-4");
            $(".pForm7").addClass("pImportant");
            $(".colText").removeClass("col-sm-8 col-8");
          } else {
            $(".imgRight").css("width", "auto");
          }
          $(".colLeft").removeClass("col-lg-8");
          $(".colLeft").addClass("col-lg-6");
          $(".colRight").removeClass("col-lg-4");
          $(".colRight").addClass("col-lg-6");
          $(".divForm8").fadeIn(200);
          $(".divForm6").hide();
          $(".box").css("height", "350px");
          $(window).scrollTop(0);
        }
      }
    } else if ($(".divForm7").css("display") == "block") {
      var clear = 0;
      if (corporatename1 && !corporateposition1) {
        $(".txtposition1").css("border", "1px solid red");
        clear = 1;
      } else if (!corporatename1 && corporateposition1) {
        $(".txtname1").css("border", "1px solid red");
        clear = 1;
      }
      if (corporatename2 && !corporateposition2) {
        $(".txtposition2").css("border", "1px solid red");
        clear = 1;
      } else if (!corporatename2 && corporateposition2) {
        $(".txtname2").css("border", "1px solid red");
        clear = 1;
      }
      if (corporatename3 && !corporateposition3) {
        $(".txtposition3").css("border", "1px solid red");
        clear = 1;
      } else if (!corporatename3 && corporateposition3) {
        $(".txtname3").css("border", "1px solid red");
        clear = 1;
      }

      if (clear == 0) {
        if (corporatename1 && corporateposition1) {
          newcorporate.push({
            corporate_name: corporatename1,
            corporate_position: corporateposition1,
          });
        }

        if (corporatename2 && corporateposition2) {
          newcorporate.push({
            corporate_name: corporatename2,
            corporate_position: corporateposition2,
          });
        }
        if (corporatename3 && corporateposition3) {
          newcorporate.push({
            corporate_name: corporatename3,
            corporate_position: corporateposition3,
          });
        }

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
      }
    } else if ($(".divForm8").css("display") == "block") {
      if (!clientpic) {
        $(".divClient").attr("style", "border: 2px dashed red !important");
      } else {
        $(".divForm9").fadeIn(200);
        $(".divForm8").hide();
        $(".box").css("height", "350px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm9").css("display") == "block") {
      if (!jointholderpic) {
        $(".divJoint").attr("style", "border: 2px dashed red !important");
      } else {
        $(".divForm10").fadeIn(200);
        $(".divForm9").hide();
        $(".box").css("height", "450px");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm10").css("display") == "block") {
      if (!validid1pic || !validid2pic) {
        $(".divValid1, .divValid2").attr(
          "style",
          "border: 2px dashed red !important"
        );
      } else if (!validid1pic) {
        $(".divValid1").attr("style", "border: 2px dashed red !important");
      } else if (!validid2pic) {
        $(".divValid2").attr("style", "border: 2px dashed red !important");
      } else {
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
      }
    } else if ($(".divForm11").css("display") == "block") {
      if (!username || !emailadd) {
        var empty = 0;
        $(".txtForm11").each(function () {
          if (this.value == "") {
            empty++;
            $(this).css("border", "1px solid red");
          }
        });
      } else {
        const options = {
          headers: {
            Accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
          },
        };

        const apiUrl_check_user =
          appglobal.api.base_api + appglobal.api.check_user_exist;
        axios
          .get(
            apiUrl_check_user,
            { params: { name: username, email: emailadd } },
            options
          )
          .then((response) => {
            console.log(response);
            $(".pBox").css("font-size", "2.2rem");
            $(".divForm12").fadeIn(200);
            $(".divForm11").hide();
            $(".imgRight").css("width", "80%");
            $(".imgRight").addClass("animate__animated animate__zoomIn");
            $(".imgRight").attr("src", "Image/selfie.svg");
            $(".box").css("height", "315px");
            $(".pForm").hide();
            $(".pForm8").show();
            $(".btnNext").html("CREATE");
            $(window).scrollTop(0);
          })
          .catch((err) => {
            console.log(err.response);
            swal(
              <div style={{ width: "450px", padding: "20px 8px" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-2" style={{ padding: "0px" }}>
                      <img
                        src="Image/error.png"
                        style={{ width: "32px", marginTop: "0px" }}
                      ></img>
                    </div>
                    <div className="col-lg-10 " style={{ padding: "0px" }}>
                      <p className="pError">Oooops!</p>
                      <p className="pErrorSub">{err.response.data.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
      }
    } else if ($(".divForm12  ").css("display") == "block") {
      $("#modalVerify").modal("show");
      saveaccount();
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
      if (accounttype == "3") {
        newcorporate.length = 0;
        console.log("namo ka");
        $(".divForm7").fadeIn(200);
        $(".divForm8").hide();
        $(".box").css("height", "450px");
      } else {
        console.log(accounttype);
        console.log("pota lang");
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
        $(".divForm8").hide();
        $(".box").css("height", "550px");
        $(".pForm7").hide();
        $(".pForm2").fadeIn(200);
        $(".imgRight").addClass("animate__animated animate__zoomIn");
        $(".imgRight").attr("src", "Image/form3.svg");
      }
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
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/Phone.png");
      $(".pForm").hide();
      $(".pForm7").show();

      $(".btnNext").html("NEXT");
    }
  }

  if (process.browser) {
    let minOffset = 18,
      maxOffset = 100;
    let thisYear = new Date().getFullYear();
    let years = [];
    for (var i = minOffset; i <= maxOffset; i++) {
      let year = thisYear - i;

      listyear.push({ value: year, label: year });
    }
  }

  useEffect(() => {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    const apiUrl_fetch_accounts =
      appglobal.api.base_api + appglobal.api.account_types;
    const apiUrl_annual_income =
      appglobal.api.base_api + appglobal.api.annual_income;
    const apiUrl_investment_objectives =
      appglobal.api.base_api + appglobal.api.investment_objective;
    const apiUrl_source_of_funds =
      appglobal.api.base_api + appglobal.api.source_of_funds;
    const apiUrl_total_assets =
      appglobal.api.base_api + appglobal.api.total_assets;
    const apiUrl_net_worth = appglobal.api.base_api + appglobal.api.net_worth;

    axios
      .get(apiUrl_fetch_accounts, {}, options)
      .then((result) => {
        console.log(result);
        setListaccounttype(result.data.data);
        setError1("1");
      })
      .catch((err) => {
        setError1("2");
        console.log(err);
      });
    axios
      .get(apiUrl_investment_objectives, {}, options)
      .then((result) => {
        console.log(result);
        setError7("1");
        setListinvestmentobjectives(result.data.data);
      })
      .catch((err) => {
        setError1("2");
        console.log(err);
      });

    axios
      .get(apiUrl_source_of_funds, {}, options)
      .then((response) => {
        console.log(response.data.data.length);
        const funds = [];
        for (var i = 0; i < response.data.data.length; i++) {
          console.log(
            response.data.data[i].id + " " + response.data.data[i].name
          );
          funds.push({
            value: response.data.data[i].id,
            label: response.data.data[i].name,
          });
        }
        setListfunds(funds);
        setError2("1");
      })
      .catch((err) => {
        setError2("2");
      });

    axios
      .get(apiUrl_investment_objectives, {}, options)
      .then((result) => {
        console.log(result);
        setListinvestmentobjectives(result.data.data);
        setError3("1");
      })
      .catch((err) => {
        console.log(err);
        setError3("2");
      });

    axios
      .get(apiUrl_total_assets, {}, options)
      .then((result) => {
        console.log(result);
        setlistTotalassets(result.data.data);
        setError4("1");
      })
      .catch((err) => {
        console.log(err);
        setError4("2");
      });

    axios
      .get(apiUrl_annual_income, {}, options)
      .then((result) => {
        console.log(result);
        setListannualincome(result.data.data);
        setError5("1");
      })
      .catch((err) => {
        console.log(err);
        setError5("2");
      });

    axios
      .get(apiUrl_net_worth, {}, options)
      .then((result) => {
        console.log(result);
        setListnetworth(result.data.data);
        setError6("1");
      })
      .catch((err) => {
        console.log(err);
        setError6("2");
      });
  }, []);

  useEffect(() => {
    if (error1 && error2 && error3 && error4 && error5 && error6 && error7) {
      $(".conLoader")
        .show()
        .fadeOut(500, function () {
          $(".conMain").fadeIn(250);
        });
    }

    if(error1 == "2" || error2 == "2" || error3 == "2" || error4 == "2" || error5 == "2" || error6 == "2" || error7 == "2"){
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-2" style={{ padding: "0px" }}>
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div className="col-lg-10 " style={{ padding: "0px" }}>
                <p className="pError">Something went wrong</p>
                <p className="pErrorSub">Please refresh the website.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }, [error1, error2, error3, error4, error5, error6]);

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
      <div className="container conLoader  h-100">
        <div className="Box">
          <span>
            <span></span>
          </span>
        </div>
       
      </div>
      <div className="container h-100 conMain">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 colLeft order-2 order-lg-1">
            <div className="box">
              <div className="boxLine"></div>
              <div className="boxCircle">
                <div className="circle circle1" onClick={saveaccount}>
                  <img
                    src="Image/user.svg"
                    className="img-fluid mx-auto d-flex imgCircle1"
                    style={{ width: "25px", paddingTop: "15px" }}
                  ></img>
                </div>
                <div
                  className="circle circle2 circlenotactive"
                  onClick={trylang}
                >
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
                  {listaccounttype.map((item) => (
                    <label htmlFor={item.name} className="btn-radio">
                      <input
                        type="radio"
                        id={item.name}
                        className={item.id}
                        name="radio-grp"
                        onClick={setAccount}
                      />
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
                      <span className="pRadio">{item.name}</span>
                    </label>
                  ))}
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
                      className="txtBox txtForm2"
                      value={fname}
                      autocomplete="false"
                      onChange={changeFname}
                      placeholder="First name"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={mname}
                      autocomplete="false"
                      onChange={changeMname}
                      placeholder="Middle name"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={lname}
                      autocomplete="false"
                      onChange={changeLname}
                      placeholder="Last name"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={telnum}
                      autocomplete="false"
                      onChange={changeTelnum}
                      placeholder="Telephone number"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={mobilenum}
                      autocomplete="false"
                      onChange={changeMobilenum}
                      placeholder="Mobile number"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={birthplace}
                      autocomplete="false"
                      onChange={changeBirthplace}
                      placeholder="Birthplace"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={address}
                      autocomplete="false"
                      onChange={changeAddress}
                      placeholder="Residential address"
                    ></input>
                  </div>
                </div>
                <div
                  className="row align-items-center"
                  style={{ marginTop: "15px" }}
                >
                  <div className="col-lg-2">
                    <p className="pBoxTitle">Birth Date</p>
                  </div>
                  <div className="col-lg-4">
                    <DatePicker
                      placeholderText="Click to select a date"
                      dateFormat="yyyy/MM/dd"
                      selected={birthtDate}
                      onChange={changeBirthdate}
                    />
                  </div>
                </div>
              </div>
              <div className="divForm3">
                <p className="pBox">Personal Information</p>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm3"
                      placeholder="TIN"
                      value={tin}
                      autocomplete="false"
                      onChange={changetin}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm3"
                      placeholder="Nationality"
                      autocomplete="false"
                      value={nationality}
                      onChange={changeNationality}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "18px" }}>
                  <div className="col-lg-6">
                    <Select
                      options={options_gender}
                      styles={
                        errorselectgender ? customStyles_error : customStyles
                      }
                      value={genderpick}
                      onChange={changeGender}
                      placeholder="Gender"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Select
                      options={options_civilstatus}
                      styles={
                        errorselectcivil ? customStyles_error : customStyles
                      }
                      value={civilstatuspick}
                      onChange={changeCivil}
                      placeholder="Civil Status"
                    />
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm3"
                      placeholder="Employer"
                      autocomplete="false"
                      value={employer}
                      onChange={changeEmployer}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm3"
                      autocomplete="false"
                      placeholder="Job title"
                      value={jobtitle}
                      onChange={changeJobtitle}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      autocomplete="false"
                      className="txtBox txtForm3"
                      placeholder="Business address"
                      value={busadd}
                      onChange={changeBusadd}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="divForm4">
                <p className="pBox">Account Information</p>
                <p className="pBoxSub">Tell us where to send your money</p>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm4"
                      placeholder="Bank"
                      autocomplete="false"
                      value={bank}
                      onChange={changeBank}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm4"
                      placeholder="Branch"
                      autocomplete="false"
                      value={branch}
                      onChange={changeBranch}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm4"
                      placeholder="Account name"
                      autocomplete="false"
                      value={accountname}
                      onChange={changeAccountname}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm4"
                      placeholder="Account number"
                      autocomplete="false"
                      value={accountnumber}
                      onChange={changeAccountnumber}
                    ></input>
                  </div>
                </div>
                <p className="pBoxSub" style={{ marginTop: "15px" }}>
                  Tell us how to help
                </p>
                <p className="pBoxSub1" style={{ marginTop: "10px" }}>
                  Investment Objective
                </p>
                <div className="row flex" style={{ marginTop: "10px" }}>
                  {listinvestmentobjectives.map((item) => (
                    <div
                      className={
                        item.name.length > 20 ? "col-lg-5" : "col-lg-4"
                      }
                    >
                      <label htmlFor={item.id} className="btn-radio">
                        <input
                          type="radio"
                          id={item.id}
                          name="radio-investment"
                          className={item.id}
                          onChange={changeInvestmentobjective}
                        />
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
                        <span className="pRadio">{item.name}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="divForm5">
                <p className="pBox">Account Information</p>
                <p className="pBoxSub">Tell us how to help</p>
                <div className="row">
                  <div className="col-lg-6">
                    <Select
                      options={listfunds}
                      styles={
                        errorselectfunds ? customStyles_error : customStyles
                      }
                      placeholder="Source of funds"
                      value={sourceoffundspick}
                      onChange={changeSourceoffunds}
                    />
                  </div>
                </div>
                <p className="pBoxSub1" style={{ marginTop: "18px" }}>
                  Total Assets
                </p>
                <div className="row " style={{ marginTop: "10px" }}>
                  {listtotalassets.map((item) => (
                    <div className="col-lg-4">
                      <label htmlFor={item.name} className="btn-radio">
                        <input
                          type="radio"
                          id={item.name}
                          name="radio-grpAssets"
                          className={item.id}
                          onChange={changeTotalassets}
                        />
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
                        <span className="pRadio">{item.name}</span>
                      </label>
                    </div>
                  ))}
                </div>
                <p className="pBoxSub1" style={{ marginTop: "18px" }}>
                  Annaual Income
                </p>
                <div className="row " style={{ marginTop: "10px" }}>
                  {listannualincome.map((item) => (
                    <div className="col-lg-4">
                      <label
                        htmlFor={"annual" + item.name}
                        className="btn-radio"
                      >
                        <input
                          type="radio"
                          id={"annual" + item.name}
                          name="radio-grpAnnual"
                          className={item.id}
                          onChange={changeAnnualincome}
                        />
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
                        <span className="pRadio">{item.name}</span>
                      </label>
                    </div>
                  ))}
                </div>
                <p className="pBoxSub1" style={{ marginTop: "18px" }}>
                  Net Worth
                </p>
                <div className="row " style={{ marginTop: "10px" }}>
                  {listnetworth.map((item) => (
                    <div className="col-lg-4">
                      <label htmlFor={"net" + item.name} className="btn-radio">
                        <input
                          type="radio"
                          id={"net" + item.name}
                          name="radio-grpNet"
                          className={item.id}
                          onChange={changeNetworth}
                        />
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
                        <span className="pRadio">{item.name}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="divForm6">
                <p className="pBox">Account Information</p>
                <p className="pBoxTitle" style={{ marginBottom: "18px" }}>
                  Are you associated with another broker or dealer?
                </p>
                <div className="radio">
                  <label htmlFor="rdo-11" className="btn-radio">
                    <input
                      type="radio"
                      id="rdo-11"
                      className="1"
                      name="radio-grpAss"
                      onChange={changeAss}
                    />
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
                      className="txtBox txtass"
                      placeholder="Company name"
                      value={associatedcompany}
                      onChange={changeAsscompany}
                    ></input>
                  </div>
                </div>

                <label htmlFor="rdo-12" className="btn-radio">
                  <input
                    type="radio"
                    id="rdo-12"
                    className="0"
                    name="radio-grpAss"
                    onChange={changeAss}
                  />
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
                <label htmlFor="rdo-13" className="btn-radio">
                  <input
                    type="radio"
                    id="rdo-13"
                    className="1"
                    name="radio-grpCompany"
                    onChange={changeOfficer}
                  />
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
                      className="txtBox txtofficername"
                      placeholder="Company name"
                      value={officername}
                      onChange={changeOfficername}
                    ></input>
                  </div>
                </div>
                <label htmlFor="rdo-14" className="btn-radio">
                  <input
                    type="radio"
                    id="rdo-14"
                    className="0"
                    name="radio-grpCompany"
                    onChange={changeOfficer}
                  />
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
                      className="txtBox txtname1"
                      autocomplete="false"
                      placeholder="Name"
                      id="txtname1"
                      value={corporatename1}
                      onChange={changeCorporatename1}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtposition1"
                      id="txtposition1"
                      autocomplete="false"
                      placeholder="Position"
                      value={corporateposition1}
                      onChange={changeCorporateposition1}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "18px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtname2 txtBox"
                      placeholder="Name"
                      autocomplete="false"
                      value={corporatename2}
                      onChange={changeCorporatename2}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtposition2"
                      placeholder="Position"
                      autocomplete="false"
                      value={corporateposition2}
                      onChange={changeCorporateposition2}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "18px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtname3"
                      placeholder="Name"
                      autocomplete="false"
                      value={corporatename3}
                      onChange={changeCorporatename3}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtposition3"
                      placeholder="Position"
                      autocomplete="false"
                      value={corporateposition3}
                      onChange={changeCorporateposition3}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="divForm8">
                <p className="pBox">Upload signature</p>
                <input
                  onChange={(e) => handleFile(e)}
                  ref={inputFileRef}
                  id="file-upload"
                  type="file"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <div className="divUpload divClient" onClick={onBtnClick}>
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload pUploadclient">
                    Client Signature over <br /> Printed Name
                  </p>
                </div>
              </div>
              <div className="divForm9">
                <p className="pBox">Upload signature</p>
                <input
                  onChange={(e) => handleFile1(e)}
                  ref={inputFileRef1}
                  id="file-upload"
                  type="file"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <div className="divUpload divJoint" onClick={onBtnClick1}>
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload pUploadjoint">
                    Joint Account Holder's
                    <br /> Siognature over Printed Name
                  </p>
                </div>
              </div>
              <div className="divForm10">
                <p className="pBox">Upload two valid IDs</p>
                <input
                  onChange={(e) => handleFile2(e)}
                  ref={inputFileRef2}
                  id="file-upload"
                  type="file"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <div className="divUpload divValid1" onClick={onBtnClick2}>
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload pUploadvalid1">Upload first ID photo</p>
                </div>
                <input
                  onChange={(e) => handleFile3(e)}
                  ref={inputFileRef3}
                  id="file-upload"
                  type="file"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <div className="divUpload divValid2" onClick={onBtnClick3}>
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload pUploadvalid2">
                    Upload second ID photo
                  </p>
                </div>
              </div>
              <div className="divForm11">
                <p className="pBox">User Information</p>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm11"
                      placeholder="Username"
                      autocomplete="false"
                      value={username}
                      onChange={changeUsername}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10 px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm11"
                      placeholder="Email address"
                      autocomplete="false"
                      value={emailadd}
                      style={{ marginTop: "5px" }}
                      onChange={changeEmailadd}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="divForm12">
                <input
                  onChange={(e) => handleFile4(e)}
                  ref={inputFileRef4}
                  id="file-upload"
                  type="file"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <p className="pBox">Upload a photo of your self</p>
                <div className="divUpload" onClick={onBtnClick4}>
                  <img
                    src="Image/upload.png"
                    className="img-fluid mx-auto d-flex"
                  ></img>
                  <p className="pUpload pProfilepic">Take a photo</p>
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
                <p className="pForm pForm8">
                  Put your valid ID below your chin as shown above and take a
                  photo of yourself!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalVerify"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
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
                    <p className = "pModal">Please wait while we verify your account</p>
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

export default index;
