import React, { Component, useState, useEffect, useRef, useMemo } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import Select from "react-select";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getApi from "../services/api.service";
import swal from "@sweetalert/with-react";
import Webcam from "react-webcam";
import ReCAPTCHA from "react-google-recaptcha";
import countryList from "react-select-country-list";
function index() {
  const router = useRouter();

  const [sitekey, setSitekey] = React.useState("123");
  const [accounttype, setAccounttype] = React.useState("");
  const [listaccounttype, setListaccounttype] = React.useState([]);
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [mname, setMname] = React.useState("");
  const [telnum, setTelnum] = React.useState("");
  const [mobilenum, setMobilenum] = React.useState("");
  const [birthplace, setBirthplace] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [birthtDate, setBirthdate] = React.useState("");
  const [tin, setTin] = React.useState("");
  const [nationality, setNationality] = React.useState("Philippines");
  const [gender, setGender] = React.useState("");
  const [genderpick, setGenderpick] = React.useState([]);
  const [nationalitypick, setNationalitypick] = React.useState([]);
  const [civilstatus, setCivilstatus] = React.useState("");
  const [civilstatuspick, setCivilstatuspick] = React.useState([]);
  const [employer, setEmployer] = React.useState("");
  const [jobtitle, setJobtitle] = React.useState("");
  const [busadd, setBusadd] = React.useState("");
  const [busadd1, setBusadd1] = React.useState("");
  const [busadd2, setBusadd2] = React.useState("");
  const [errorselectgender, setErrorselectgender] = React.useState("");
  const [errorselectcivil, setErrorselectcivil] = React.useState("");

  const options_country = useMemo(() => countryList().getData(), []);

  const [errorselectnationality, setErrorselectnationality] = React.useState(
    ""
  );
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
  const [accounttypetext, setAccounttypetext] = React.useState("");

  var resizewindows = 0;

  const [filterdate, setFilterdate] = React.useState("");

  const [newcorporate, setNewcorporate] = React.useState([]);
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

  const [webimg, setWebimg] = React.useState("");

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

  const [srclient, setSrcclient] = React.useState("");

  const inputFileRef = useRef(null);
  const inputFileRef1 = useRef(null);
  const inputFileRef2 = useRef(null);
  const inputFileRef3 = useRef(null);
  const inputFileRef4 = useRef(null);

  const [captchaverified, setCaptchaverified] = React.useState("");
  const [errorcamera, setErrorcamera] = React.useState("");

  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  const onBtnClick1 = (event) => {
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

  const webcamRef = React.useRef(null);

  function handleOnUserMedia() {
    webcamRef.current.stream.addEventListener("inactive", (target) => {
      console.log("Webcam was stopped");
      console.log({ target });
    });
  }

  function alphaOnly(event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  }

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
   console.log(imageSrc);
    $(".imgProfile").attr("src", imageSrc);
    swal(
      <div style={{ width: "450px", padding: "20px 8px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2" style={{ padding: "0px" }}>
              <img
                src="Image/check.png"
                style={{ width: "32px", marginTop: "0px" }}
              ></img>
            </div>
            <div className="col-lg-10 " style={{ padding: "0px" }}>
              <p className="pError">Camera captured</p>
              <p className="pErrorSub">Successfuly captured.</p>
            </div>
          </div>
        </div>
      </div>
    );

    var url = imageSrc;

    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        setWebimg(blob);
        console.log(blob);
      });
    setProfile("");
    setProfilepic("");
    $(".divUploadyourself").show();
    $(".box").css("height", "auto");
    $(".divUploadprofile").attr("style", "2px solid #9098A9");
    $(".pUploadyourself").text("capture_webcam.jpg");
  }, [webcamRef]);

  function errorWebcam(err) {
    console.log;
    console.log("error loading webcam");
    setErrorcamera("true");
  }

  function trylang() {
    if (errorcamera == "true") {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-sm-2 col-2 col-md-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-sm-10 col-10 col-md-10"
                style={{ padding: "0px" }}
              >
                <p className="pError">Something went wrong</p>
                <p className="pErrorSub">
                  Please allow the website to access your camera.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      $("#modalWebcam").modal("show");
    }
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
    formdata.append("address1", address);
    formdata.append("address2", address1);
    formdata.append("address3", address2);
    formdata.append("birthplace", birthplace);
    formdata.append("birthdate", moment(birthtDate).format("YYYY-MM-DD"));
    formdata.append("tin_no", tin);
    formdata.append("nationality", nationality);
    formdata.append("gender", gender);
    formdata.append("civil_status", civilstatus);
    formdata.append("employer", employer);
    formdata.append("job_title", jobtitle);
    formdata.append("business_address1", busadd);
    formdata.append("business_address2", busadd1);
    formdata.append("business_address3", busadd2);
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
    if (!jointholder) {
    } else {
      formdata.append(
        "joint_account_signature_image",
        jointholder,
        jointholder.name
      );
    }
    formdata.append("valid_id_one", validid1, validid1.name);
    formdata.append("valid_id_two", validid2, validid2.name);

    if (webimg) {
      formdata.append("self_image", webimg, "capture.png");
    } else {
      formdata.append("self_image", profile, profile.name);
    }

    const apiUrl_add_account =
      appglobal.api.base_api + appglobal.api.add_account;

    axios
      .post(apiUrl_add_account, formdata, options)
      .then((result) => {
        $("#modalVerify").modal("hide");
        router.push("/success");
      })
      .catch((err) => {
        console.log(err);
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
                  style={{ padding: "0px" }}
                >
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div
                  className="col-lg-10 col-sm-10 col-10 col-md-10"
                  style={{ padding: "0px" }}
                >
                  <p className="pError">Something went wrong</p>
                  <p className="pErrorSub">Your profile cannot be saved.</p>
                </div>
              </div>
            </div>
          </div>
        );
        $("#modalVerify").modal("hide");
      });
  }

  function handleFile(e) {
    var reader = new FileReader();
    let file = e.target.files[0];
    let size = (file.size / 1024 / 1024).toFixed(2);

    console.log(file.name)
    if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-md-10 col-sm-10 col-10"
                style={{ padding: "0px" }}
              >
                <p className="pError">Something went wrong</p>
                <p className="pErrorSub">Invalid file type.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }else if (size > 4.0) {
      setClient("");
      setClientpic("");
      $(".inputFile1").val("");
      $(".divUploadclient").hide();
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
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
      $(".pUploadclient").text(file.name);
      setClientpic(file.name);
      setClient(file);
      reader.onloadend = function () {
        $(".imgClientpic").attr("src", reader.result);
      };
      reader.readAsDataURL(file);

      $(".divClient").attr("style", "2px solid #9098A9");
      $(".divUploadclient").show();
      $(".box").css("height", "auto");
    }
   


    
  }

  function handleFile1(e) {
    var reader = new FileReader();
    let file = e.target.files[0];
    let size = (file.size / 1024 / 1024).toFixed(2);

    if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-md-10 col-sm-10 col-10"
                style={{ padding: "0px" }}
              >
                <p className="pError">Warning</p>
                <p className="pErrorSub">System only accepts JPG, JPEG and PNG image formats. Please try again.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }else if (size > 4.0) {
      setProfile("");
      setProfilepic("");
      $(".inputFile4").val("");
      $(".divUploadjoint").hide();
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-sm-10 col-md-10 col-10"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
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
      let file = e.target.files[0];

      $(".pUploadjoint").text(file.name);
      setJointholderpic(file.name);
      setJointholder(file);
      $(".divJoint").attr("style", "2px solid #9098A9");
      reader.onloadend = function () {
        $(".imgJoint").attr("src", reader.result);
      };
      reader.readAsDataURL(file);
      $(".divUploadjoint").show();
      $(".box").css("height", "auto");
    }
  }

  function handleFile2(e) {
    var reader = new FileReader();
    let file = e.target.files[0];
    let size = (file.size / 1024 / 1024).toFixed(2);

    if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-md-10 col-sm-10 col-10"
                style={{ padding: "0px" }}
              >
                     <p className="pError">Warning</p>
                <p className="pErrorSub">System only accepts JPG, JPEG and PNG image formats. Please try again.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }else if (size > 4) {
      setValidid1("");
      setValidid1pic("");
      $(".inputFile3").val("");
      $(".divUploadvalid1").hide();
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
      let file = e.target.files[0];

      $(".pUploadvalid1").text(file.name);
      setValidid1pic(file.name);
      setValidid1(file);
      reader.onloadend = function () {
        $(".imgValid1").attr("src", reader.result);
      };
      reader.readAsDataURL(file);
      $(".divValid1").attr("style", "2px solid #9098A9");
      $(".divUploadvalid1").show();
      $(".box").css("height", "auto");

      var div = $(".conMain").height();
      var win = $(window).height();
      if (div > win) {
        var resize = 1;
        $(".conMain").removeClass("h-100");
        $(".conMain").css("margin-top", "130px");
      } else {
        var resize = 0;
        $(".conMain").addClass("h-100");
        $(".conMain").css("margin-top", "0px");
      }
    }
  }

  function handleFile3(e) {
    var reader = new FileReader();
    let file = e.target.files[0];
    let size = (file.size / 1024 / 1024).toFixed(2);

    if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-md-10 col-sm-10 col-10"
                style={{ padding: "0px" }}
              >
                    <p className="pError">Warning</p>
                <p className="pErrorSub">System only accepts JPG, JPEG and PNG image formats. Please try again.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }else if (size > 4.0) {
      setValidid2("");
      setValidid2pic("");
      $(".inputFile5").val("");
      $(".divUploadvalid2").hide();
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
      let file = e.target.files[0];

      $(".pUploadvalid2").text(file.name);
      setValidid2pic(file.name);
      setValidid2(file);
      reader.onloadend = function () {
        $(".imgValid2").attr("src", reader.result);
      };
      reader.readAsDataURL(file);
      $(".divValid2").attr("style", "2px solid #9098A9");
      $(".divUploadvalid2").show();
      $(".box").css("height", "auto");

      var div = $(".conMain").height();
      var win = $(window).height();
      if (div > win) {
        var resize = 1;
        $(".conMain").removeClass("h-100");
        $(".conMain").css("margin-top", "130px");
      } else {
        var resize = 0;
        $(".conMain").addClass("h-100");
        $(".conMain").css("margin-top", "0px");
      }
    }
  }

  function handleFile4(e) {
    var reader = new FileReader();
    let file = e.target.files[0];
    let size = (file.size / 1024 / 1024).toFixed(2);

    if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-md-10 col-sm-10 col-10"
                style={{ padding: "0px" }}
              >
                    <p className="pError">Warning</p>
                <p className="pErrorSub">System only accepts JPG, JPEG and PNG image formats. Please try again.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }else if (size > 4.0) {
      setProfile("");
      setProfilepic("");
      setWebimg("");
      $(".inputFile4").val("");
      $(".divUploadyourself").hide();
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
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
                <p className="pError">Something went wrong</p>
                <p className="pErrorSub">Invalid! Maximum size is 4mb.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      let file = e.target.files[0];
      setWebimg("");
      $(".pUploadyourself").text(file.name);
      setProfilepic(file.name);
      setProfile(file);
      reader.onloadend = function () {
        $(".imgProfile").attr("src", reader.result);
      };
      reader.readAsDataURL(file);
      $(".divUploadyourself").show();
      $(".box").css("height", "auto");
      $(".divUploadprofile").attr("style", "2px solid #9098A9");
    }
  }

  function setAccount(e) {
    setAccounttypetext(e.currentTarget.id);
    setAccounttype(e.currentTarget.className);
  }

  function changeFname(e) {
    setFname(e.currentTarget.value);

    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function alphaInput(event) {
    var self = this;
    setTimeout(function() {
        if(!/^[a-zA-Z]+$/.test($(self).val()))
            $(self).val('');
    }, 0);
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

  function disableEnye (event) {
    let value = event.currentTarget.value;
    let numbers = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, ' ')
    event.currentTarget.value = numbers;
  }

  function disableChar (event) {
    let value = event.currentTarget.value;
    let numbers = value.replace("Ñ", "").replace("ñ","").replace("~","").replace("!","").replace("#","").replace("$","").replace("%","").replace("^","").replace("&","").replace("*","").replace("(","").replace(")","").replace("_","").replace("+","").replace("`","").replace("=","").replace("[","").replace("]","").replace("{","").replace("}","").replace("|","").replace('/',"").replace(/\\/gi,"").replace(";","").replace(":","").replace(",","").replace(">","").replace("<","").replace("?","");
    event.currentTarget.value = numbers;
  }


  function numOnly(event) {
    let value = event.currentTarget.value;
    let numbers = value.replace(/[^0-9]/g, "");
    event.currentTarget.value = numbers;
  }

  function changeBirthplace(e) {
    setBirthplace(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeAddress(e) {
    setAddress(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeAddress1(e) {
    setAddress1(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeAddress2(e) {
    setAddress2(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBirthdate(date) {
    var filter = moment().diff(date, "years");
    setFilterdate(filter);

    setBirthdate(date);
  }

  function changetin(e) {
    setTin(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeNationality(e) {
    setNationality(e.label);
    setNationalitypick({ value: e.value, label: e.label });

    setErrorselectnationality("");
  }

  function changeGender(e) {
    setGender(e.label);
    setGenderpick({ value: e.value, label: e.label });

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

  function changeBusadd1(e) {
    setBusadd1(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function changeBusadd2(e) {
    setBusadd2(e.currentTarget.value);
    $(e.currentTarget).css("border", "1px solid #CECECE");
  }

  function bankKey(e) {}

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
    let regSpace = new RegExp(/\s/);
    if (regSpace.test(e.currentTarget.value)) {
      return false;
    } else {
      setUsername(e.currentTarget.value);
      $(e.currentTarget).css("border", "1px solid #CECECE");
    }
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

  function removeClientpic(event) {
    event.stopPropagation();
    setClient("");
    setClientpic("");
    $(".inputFile1").val("");
    $(".divUploadclient").hide();
  }

  function removeValidpic1(event) {
    event.stopPropagation();
    setValidid1("");
    setValidid1pic("");
    $(".inputFile3").val("");
    $(".divUploadvalid1").hide();

    var div = $(".conMain").height();
    var win = $(window).height();
    if (div > win) {
      $(".conMain").removeClass("h-100");
      $(".conMain").css("margin-top", "130px");
    } else {
      $(".conMain").addClass("h-100");
      $(".conMain").css("margin-top", "0px");
    }
  }

  function removeValidpic2(event) {
    event.stopPropagation();
    setValidid2("");
    setValidid2pic("");
    $(".inputFile5").val("");
    $(".divUploadvalid2").hide();

    var div = $(".conMain").height();
    var win = $(window).height();
    if (div > win) {
      $(".conMain").removeClass("h-100");
      $(".conMain").css("margin-top", "130px");
    } else {
      $(".conMain").addClass("h-100");
      $(".conMain").css("margin-top", "0px");
    }
  }

  function removeYourself(event) {
    event.stopPropagation();
    setProfile("");
    setProfilepic("");
    setWebimg("");
    $(".inputFile4").val("");
    $(".divUploadyourself").hide();
  }

  function removeJoint(event) {
    event.stopPropagation();
    setProfile("");
    setProfilepic("");
    $(".inputFile4").val("");
    $(".divUploadjoint").hide();
  }

  function viewClient(event) {
    event.stopPropagation();
    $("#exampleModalCenter1").modal("show");
    $(".imgHide").removeClass("d-flex");
    $(".imgHide").hide();
    $(".imgClientpic").addClass("d-flex");
    $(".imgClientpic").show();
  }

  function viewValid1(event) {
    event.stopPropagation();
    $("#exampleModalCenter1").modal("show");
    $(".imgHide").removeClass("d-flex");
    $(".imgHide").hide();
    $(".imgValid1").addClass("d-flex");
    $(".imgValid1").show();
  }

  function viewValid2(event) {
    event.stopPropagation();
    $("#exampleModalCenter1").modal("show");
    $(".imgHide").removeClass("d-flex");
    $(".imgHide").hide();
    $(".imgValid2").addClass("d-flex");
    $(".imgValid2").show();
  }

  function viewJoint(event) {
    event.stopPropagation();
    $("#exampleModalCenter1").modal("show");
    $(".imgHide").removeClass("d-flex");
    $(".imgHide").hide();
    $(".imgJoint").addClass("d-flex");
    $(".imgJoint").show();
  }

  function viewProfile(event) {
    event.stopPropagation();
    $("#exampleModalCenter1").modal("show");
    $(".imgHide").removeClass("d-flex");
    $(".imgHide").hide();
    $(".imgProfile").addClass("d-flex");
    $(".imgProfile").show();
  }

  function verifyCaptcha(resonse) {
    setCaptchaverified("true");
  }

  function testlang() {
    console.log(captchaverified);
  }

  const listyear = [];
  const listsourcefunds = [];

  const options_nationality = [
    { value: "Filipino", label: "Filipino" },
    { value: "Afghan", label: "Afghan" },
    { value: "Albanian", label: "Albanian" },
    { value: "Algerian", label: "Algerian" },
    { value: "Albanian", label: "Albanian" },
    { value: "American", label: "American" },
    { value: "Andorran", label: "Andorran" },
    { value: "Angolan", label: "Angolan" },
    { value: "Antiguans", label: "Antiguans" },
    { value: "Argentinean", label: "Argentinean" },
    { value: "Armenian", label: "Armenian" },
    { value: "Australian", label: "Australian" },
    { value: "Azerbaijani", label: "Azerbaijani" },
    { value: "Bahamian", label: "Bahamian" },

    { value: "Bahraini", label: "Bahraini" },
    { value: "Bangladeshi", label: "Bangladeshi" },
    { value: "Barbadian", label: "Barbadian" },
    { value: "Bahraini", label: "Bahraini" },
    { value: "Batswana", label: "Batswana" },
    { value: "Belarusian", label: "Belarusian" },
    { value: "Belgian", label: "Belgian" },
    { value: "Belizean", label: "Belizean" },
    { value: "Beninese", label: "Beninese" },
    { value: "Bhutanese", label: "Bhutanese" },
    { value: "Bolivian", label: "Bolivian" },
    { value: "Bosnian", label: "Bosnian" },
    { value: "Brazilian", label: "Brazilian" },
    { value: "British", label: "British" },
    { value: "Bruneian", label: "Bruneian" },
    { value: "Bulgarian", label: "Bulgarian" },
    { value: "Burkinabe", label: "Burkinabe" },
    { value: "Burmese", label: "Burmese" },
    { value: "Burundian", label: "Burundian" },
    { value: "Cambodian", label: "Cambodian" },
    { value: "Cameroonian", label: "Cameroonian" },
    { value: "Canadian", label: "Canadian" },
    { value: "Cape Verdean", label: "Cape Verdean" },
    { value: "Central African", label: "Central African" },
    { value: "Chadian", label: "Chadian" },
    { value: "Chilean", label: "Chilean" },
    { value: "Chinese", label: "Chinese" },
    { value: "Colombian", label: "Colombian" },
    { value: "Comoran", label: "Comoran" },
    { value: "Congolese", label: "Congolese" },
    { value: "Costa Rican", label: "Costa Rican" },
    { value: "Croatian", label: "Croatian" },
    { value: "Cuban", label: "Cuban" },
    { value: "Cypriot", label: "Cypriot" },
    { value: "Czech", label: "Czech" },
    { value: "Danish", label: "Danish" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominican", label: "Dominican" },
    { value: "Dutch", label: "Dutch" },
    { value: "East Timorese", label: "East Timorese" },
    { value: "Ecuadorean", label: "Ecuadorean" },
    { value: "Egyptian", label: "Egyptian" },
    { value: "Emirian", label: "Emirian" },
    { value: "Equatorial Guinean", label: "Equatorial Guinean" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonian", label: "Estonian" },
    { value: "Ethiopian", label: "Ethiopian" },
    { value: "Fijian", label: "Fijian" },
    { value: "Filipino", label: "Filipino" },
    { value: "Finnish", label: "Finnish" },
    { value: "French", label: "French" },
    { value: "Gabonese", label: "Gabonese" },
    { value: "Gambian", label: "Gambian" },
    { value: "Georgian", label: "Georgian" },
    { value: "German", label: "German" },
    { value: "Ghanaian", label: "Ghanaian" },
    { value: "Greek", label: "Greek" },
    { value: "Grenadian", label: "Grenadian" },
    { value: "Guatemalan", label: "Guatemalan" },
    { value: "Guinea-Bissauan", label: "Guinea-Bissauan" },
    { value: "Guinean", label: "Guinean" },
    { value: "Guyanese", label: "Guyanese" },
    { value: "Haitian", label: "Haitian" },
    { value: "Herzegovinian", label: "Herzegovinian" },
    { value: "Honduran", label: "Honduran" },
    { value: "Hungarian", label: "Hungarian" },
    { value: "Icelander", label: "Icelander" },
    { value: "Indian", label: "Indian" },
    { value: "Indonesian", label: "Indonesian" },
    { value: "Iranian", label: "Iranian" },
    { value: "Iraqi", label: "Iraqi" },
    { value: "Irish", label: "Irish" },
    { value: "Israeli", label: "Israeli" },
    { value: "Italian", label: "Italian" },
    { value: "Ivorian", label: "Ivorian" },
    { value: "Jamaican", label: "Jamaican" },
    { value: "Japanese", label: "Japanese" },
    { value: "Jordanian", label: "Jordanian" },
    { value: "Kazakhstani", label: "Kazakhstani" },
    { value: "Kenyan", label: "Kenyan" },
    { value: "Kittian and Nevisian", label: "Kittian and Nevisian" },
    { value: "Kuwaiti", label: "Kuwaiti" },
    { value: "Kyrgyz", label: "Kyrgyz" },
    { value: "Laotian", label: "Laotian" },
    { value: "Latvian", label: "Latvian" },
    { value: "Lebanese", label: "Lebanese" },
    { value: "Liberian", label: "Liberian" },
    { value: "Libyan", label: "Libyan" },
    { value: "Liechtensteiner", label: "Liechtensteiner" },
    { value: "Lithuanian", label: "Lithuanian" },
    { value: "Luxembourger", label: "Luxembourger" },
    { value: "Macedonian", label: "Macedonian" },
    { value: "Malagasy", label: "Malagasy" },
    { value: "Malawian", label: "Malawian" },
    { value: "Malaysian", label: "Malaysian" },
    { value: "Maldivan", label: "Maldivan" },
    { value: "Malian", label: "Malian" },
    { value: "Maltese", label: "Maltese" },
    { value: "Marshallese", label: "Marshallese" },
    { value: "Mauritanian", label: "Mauritanian" },
    { value: "Mauritian", label: "Mauritian" },
    { value: "Mexican", label: "Mexican" },
    { value: "Micronesian", label: "Micronesian" },
    { value: "Moldovan", label: "Moldovan" },
    { value: "Monacan", label: "Monacan" },
    { value: "Mongolian", label: "Mongolian" },
    { value: "Moroccan", label: "Moroccan" },
    { value: "Mosotho", label: "Mosotho" },
    { value: "Motswana", label: "Motswana" },
    { value: "Mozambican", label: "Mozambican" },
    { value: "Namibian", label: "Namibian" },
    { value: "Nauruan", label: "Nauruan" },
    { value: "Nepalese", label: "Nepalese" },
    { value: "New Zealander", label: "New Zealander" },
    { value: "Ni-Vanuatu", label: "Ni-Vanuatu" },
    { value: "Nicaraguan", label: "Nicaraguan" },
    { value: "North Korean", label: "North Korean" },
    { value: "Northern Irish", label: "Northern Irish" },
    { value: "Norwegian", label: "Norwegian" },
    { value: "Omani", label: "Omani" },
    { value: "Pakistani", label: "Pakistani" },
    { value: "Palauan", label: "Palauan" },
    { value: "Panamanian", label: "Panamanian" },
    { value: "Papua New Guinean", label: "Papua New Guinean" },
    { value: "Paraguayan", label: "Paraguayan" },
    { value: "Peruvian", label: "Peruvian" },
    { value: "Polish", label: "Polish" },
    { value: "Portuguese", label: "Portuguese" },
    { value: "Qatari", label: "Qatari" },
    { value: "Romanian", label: "Romanian" },
    { value: "Russian", label: "Russian" },
    { value: "Rwandan", label: "Rwandan" },
    { value: "Saint Lucian", label: "Saint Lucian" },
    { value: "Salvadoran", label: "Salvadoran" },
    { value: "Samoan", label: "Samoan" },
    { value: "San Marinese", label: "San Marinese" },
    { value: "Sao Tomean", label: "Sao Tomean" },
    { value: "Saudi", label: "Saudi" },
    { value: "Scottish", label: "Scottish" },
    { value: "Senegalese", label: "Senegalese" },
    { value: "Serbian", label: "Serbian" },
    { value: "Seychellois", label: "Seychellois" },
    { value: "Sierra Leonean", label: "Sierra Leonean" },
    { value: "Singaporean", label: "Singaporean" },
    { value: "Slovakian", label: "Slovakian" },
    { value: "Slovenian", label: "Slovenian" },
    { value: "Solomon Islander", label: "Solomon Islander" },
    { value: "Somali", label: "Somali" },
    { value: "South African", label: "South African" },
    { value: "South Korean", label: "South Korean" },
    { value: "Spanish", label: "Spanish" },
    { value: "Sri Lankan", label: "Sri Lankan" },
    { value: "Sudanese", label: "Sudanese" },
    { value: "Surinamer", label: "Surinamer" },
    { value: "Swazi", label: "Swazi" },
    { value: "Swedish", label: "Swedish" },
    { value: "Swiss", label: "Swiss" },
    { value: "Syrian", label: "Syrian" },
    { value: "Taiwanese", label: "Taiwanese" },
    { value: "Tajik", label: "Tajik" },
    { value: "Tanzanian", label: "Tanzanian" },
    { value: "Thai", label: "Thai" },
    { value: "Togolese", label: "Togolese" },
    { value: "Tongan", label: "Tongan" },
    { value: "Trinidadian or Tobagonian", label: "Trinidadian or Tobagonian" },
    { value: "Tunisian", label: "Tunisian" },
    { value: "Turkish", label: "Turkish" },
    { value: "Tuvaluan", label: "Tuvaluan" },
    { value: "Ugandan", label: "Ugandan" },
    { value: "Ukrainian", label: "Ukrainian" },
    { value: "Uruguayan", label: "Uruguayan" },
    { value: "Uzbekistani", label: "Uzbekistani" },
    { value: "Venezuelan", label: "Venezuelan" },
    { value: "Vietnamese", label: "Vietnamese" },
    { value: "Welsh", label: "Welsh" },
    { value: "Yemenite", label: "Yemenite" },
    { value: "Zambian", label: "Zambian" },
    { value: "Zimbabwean", label: "Zimbabwean" },
  ];

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
    if (resizewindows == 1) {
      $(".conMain").removeClass("h-100");
      $(".conMain").css("margin-top", "130px");
    } else {
      $(".conMain").addClass("h-100");
      $(".conMain").css("margin-top", "0px");
    }

    if ($(".divForm1").css("display") == "block") {
      if (!accounttype) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
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
                <div
                  className="col-lg-2 col-md-2 col-sm-2 col-2"
                  style={{ padding: "0px" }}
                >
                  <img
                    src="Image/error.png"
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
        $(".divForm11").fadeIn(200);
        $(".divForm1").hide();
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
        !birthtDate ||
        !address1 ||
        !address2
      ) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
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
                  <p className="pErrorSub">
                    Please fill out all the missing fields.
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
      } else if (filterdate < 18) {
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
                  <p className="pErrorSub">Must be 18 years old above.</p>
                </div>
              </div>
            </div>
          </div>
        );
        $(".react-datepicker__input-container").css(
          "border",
          "1px solid #CECECE"
        );
      } else if (filterdate > 100) {
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
                    Age should not be over 100 years old.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        $(".react-datepicker__input-container").css(
          "border",
          "1px solid #CECECE"
        );
      } else {
        $(".divForm3").fadeIn(200);
        $(".divForm2").hide();
        $(".box").css("height", "auto");
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
        !busadd ||
        !busadd1 ||
        !busadd2
      ) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
                  style={{ padding: "0px" }}
                >
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div
                  className="col-lg-10 col-md-10 col-sm-10 col-10"
                  style={{ padding: "0px" }}
                >
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill out all the missing fields.
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
        if (!nationality) {
          setErrorselectnationality("1");
        }
      }else if (tin.length < 9) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
                  style={{ padding: "0px" }}
                >
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div
                  className="col-lg-10 col-sm-10 col-10 col-md-10"
                  style={{ padding: "0px" }}
                >
                  <p className="pError">Something went wrong</p>
                  <p className="pErrorSub">Invalid tin number format.</p>
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
        $(".box").css("height", "auto");

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
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
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
                  <p className="pErrorSub">
                    Please fill out all the missing fields.
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
        $(".box").css("height", "auto");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm5").css("display") == "block") {
      if (!sourceoffunds || !totalassets || !annualincome || !networth) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
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
                  <p className="pErrorSub">
                    Please fill out all the missing fields.
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
      if (!associated || !officer) {
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
                  style={{ padding: "0px" }}
                >
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div
                  className="col-lg-10 col-md-10 col-sm-10 col-10"
                  style={{ padding: "0px" }}
                >
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill out all the missing fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (associated == "1" && !associatedcompany) {
        $(".txtass").css("border", "1px solid red");
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
                  style={{ padding: "0px" }}
                >
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div
                  className="col-lg-10 col-md-10 col-sm-10 col-10"
                  style={{ padding: "0px" }}
                >
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill out all the missing fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (officer == "1" && !officername) {
        $(".txtofficername").css("border", "1px solid red");
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
                  style={{ padding: "0px" }}
                >
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div
                  className="col-lg-10 col-md-10 col-sm-10 col-10"
                  style={{ padding: "0px" }}
                >
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill out all the missing fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
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
          $(".box").css("height", "auto");
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
        $(".box").css("height", "auto");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm8").css("display") == "block") {
      if (!clientpic) {
        $(".divClient").attr("style", "border: 2px dashed red !important");
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
                  <p className="pError">Something went wrong</p>
                  <p className="pErrorSub">
                    Please upload a file with extension Jpg and Png.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        if (accounttypetext == "Joint") {
          $(".divForm9").fadeIn(200);
          $(".divForm8").hide();
          $(".box").css("height", "auto");
          $(window).scrollTop(0);
        } else {
          $(".divForm10").fadeIn(200);
          $(".divForm8").hide();
          $(".box").css("height", "auto");
          $(window).scrollTop(0);
        }
      }
    } else if ($(".divForm9").css("display") == "block") {
      if (!jointholderpic) {
        $(".divJoint").attr("style", "border: 2px dashed red !important");
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
                  className="col-lg-10 col-sm-10 col-md-10 col-10"
                  style={{ padding: "0px" }}
                >
                  <p className="pError">Something went wrong</p>
                  <p className="pErrorSub">
                    Please upload a file with extension Jpg and Png.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        $(".divForm10").fadeIn(200);
        $(".divForm9").hide();
        $(".box").css("height", "auto");
        $(window).scrollTop(0);
      }
    } else if ($(".divForm10").css("display") == "block") {
      if (!validid1pic || !validid2pic) {
        if (!validid1pic) {
          $(".divValid1").attr("style", "border: 2px dashed red !important");
        }
        if (!validid2pic) {
          $(".divValid2").attr("style", "border: 2px dashed red !important");
        }
        if (!validid1pic && !validid2pic) {
          $(".divValid1, .divValid2").attr(
            "style",
            "border: 2px dashed red !important"
          );
        }
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-md-2 col-sm-2 col-2"
                  style={{ padding: "0px" }}
                >
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div
                  className="col-lg-10 col-md-10 col-sm-10 col-10"
                  style={{ padding: "0px" }}
                >
                  <p className="pError">Something went wrong</p>
                  <p className="pErrorSub">
                    Please upload a file with extension Jpg and Png.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (!validid1pic) {
        $(".divValid1").attr("style", "border: 2px dashed red !important");
      } else if (!validid2pic) {
        $(".divValid2").attr("style", "border: 2px dashed red !important");
      } else {
        $(".pBox").css("font-size", "2.2rem");
        $(".divForm12").fadeIn(200);
        $(".divForm10").hide();
        $(".imgRight").css("width", "80%");
        $(".imgRight").addClass("animate__animated animate__zoomIn");
        $(".imgRight").attr("src", "Image/selfie.svg");
        $(".box").css("height", "auto");
        $(".pForm").hide();
        $(".pForm8").show();
        $(".btnNext").html("CREATE");
        $(window).scrollTop(0);
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
        swal(
          <div style={{ width: "450px", padding: "20px 8px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-sm-2 col-2 col-md-2"
                  style={{ padding: "0px" }}
                >
                  <img
                    src="Image/error.png"
                    style={{ width: "32px", marginTop: "0px" }}
                  ></img>
                </div>
                <div
                  className="col-lg-10  col-md-10 col-sm-10 col-10"
                  style={{ padding: "0px" }}
                >
                  <p className="pError">Oooops!</p>
                  <p className="pErrorSub">
                    Please fill out all the missing fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (username.length > 9 || username.length < 3) {
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
                    Username must contain 3 - 8 Characters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (!isEmail(emailadd)) {
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
                  <p className="pErrorSub">
                    Please input a valid email format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        $(".txtEmail").css("border", "1px solid red");
        return false;
      } else {
        $("#modalVerify").modal("show");
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
            $("#close-modal").click();
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
            $(".divForm11").hide();
            $(".box").css("height", "auto");
            $(".imgRight").addClass("animate__animated animate__zoomIn");
            $(".imgRight").attr("src", "Image/form2.svg");
            $(".pForm1").fadeIn(200);

            $(window).scrollTop(0);
            $(".colBack").show();
          })
          .catch((err) => {
            $("#close-modal").click();
            swal(
              <div style={{ width: "450px", padding: "20px 8px" }}>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-lg-2 col-sm-2 col-2"
                      style={{ padding: "0px" }}
                    >
                      <img
                        src="Image/error.png"
                        style={{ width: "32px", marginTop: "0px" }}
                      ></img>
                    </div>
                    <div
                      className="col-lg-10 col-sm-10 col-10"
                      style={{ padding: "0px" }}
                    >
                      <p className="pError">Oooops!</p>
                      <p className="pErrorSub">{err.response.data.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
      }
    } else if ($(".divForm12").css("display") == "block") {
      if (!profile && !webimg) {
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
                  <p className="pErrorSub">Upload a photo of yourself</p>
                </div>
              </div>
            </div>
          </div>
        );
        $(".divUploadprofile").attr(
          "style",
          "border: 2px dashed red !important"
        );
      } else if (!captchaverified) {
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
                  <p className="pErrorSub">Invalid captcha response.</p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        $("#modalVerify").modal("show");
        saveaccount();
      }
    }
  }

  function expiredCaptcha(response) {
    setCaptchaverified("false");
  }

  function prevForm() {
    if (resizewindows == 1) {
      $(".conMain").removeClass("h-100");
      $(".conMain").css("margin-top", "130px");
    } else {
      $(".conMain").addClass("h-100");
      $(".conMain").css("margin-top", "0px");
    }
    if ($(".divForm2").css("display") == "block") {
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
      $(".colLeft").removeClass("col-lg-8");
      $(".colLeft").addClass("col-lg-6");
      $(".colRight").removeClass("col-lg-4");
      $(".colRight").addClass("col-lg-6");
      $(".divForm11").fadeIn(200);
      $(".divForm2").hide();
      $(".box").css("height", "auto");
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/form2.svg");
      $(".pForm1").fadeIn(200);
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

        $(".divForm7").fadeIn(200);
        $(".divForm8").hide();
        $(".box").css("height", "450px");
      } else {
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
      $(".box").css("height", "auto");
    } else if ($(".divForm10").css("display") == "block") {
      if (accounttypetext == "Joint") {
        $(".divForm9").fadeIn(200);
        $(".divForm10").hide();
        $(".box").css("height", "auto");
      } else {
        $(".divForm8").fadeIn(200);
        $(".divForm10").hide();
        $(".box").css("height", "auto");
      }
    } else if ($(".divForm11").css("display") == "block") {
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
      $(".divForm11").hide();
      $(".box").css("height", "350px");
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/phone1.png");
      $(".pForm").hide();
      $(".imgCircle1").css("width", "25px");
      $(".imgCircle2").css("width", "15px");
      $(".circle1").removeClass("circlenotactive");
      $(".circle2").addClass("circlenotactive");
      $(".colBack").hide();
    } else if ($(".divForm12").css("display") == "block") {
      $(".divForm10").fadeIn(200);
      $(".imgRight").css("width", "auto");
      $(".divForm12").hide();
      $(".box").css("height", "auto");
      $(".imgRight").addClass("animate__animated animate__zoomIn");
      $(".imgRight").attr("src", "Image/form3.svg");
      $(".pForm").hide();
      $(".pForm7").show();
      $(".pForm").hide();
      $(".pForm2").fadeIn(200);
     
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
    const constraints = {
      video: true,
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        
      })
      .catch(function (err) {
        console.log(err);
        setErrorcamera("true");
      });

    console.log(window.location.hostname);

    if (window.location.host == "signup.aaa-equities.com.ph") {
      setSitekey("6Lc7hMUZAAAAAEfjt0AFO4cEncTzW741a8mP9xHi");
    } else {
      setSitekey("6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI");
    }

    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    const getcountry = "https://restcountries.eu/rest/v2/all";

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
      .get(getcountry, {}, options)
      .then((result) => {
        
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(apiUrl_fetch_accounts, {}, options)
      .then((result) => {
        setListaccounttype(result.data.data);
        setError1("1");
      })
      .catch((err) => {
        setError1("2");
      });
    axios
      .get(apiUrl_investment_objectives, {}, options)
      .then((result) => {
        setError7("1");
        setListinvestmentobjectives(result.data.data);
      })
      .catch((err) => {
        setError1("2");
      });

    axios
      .get(apiUrl_source_of_funds, {}, options)
      .then((response) => {
        const funds = [];
        for (var i = 0; i < response.data.data.length; i++) {
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
        setListinvestmentobjectives(result.data.data);
        setError3("1");
      })
      .catch((err) => {
        setError3("2");
      });

    axios
      .get(apiUrl_total_assets, {}, options)
      .then((result) => {
        setlistTotalassets(result.data.data);
        setError4("1");
      })
      .catch((err) => {
        setError4("2");
      });

    axios
      .get(apiUrl_annual_income, {}, options)
      .then((result) => {
        setListannualincome(result.data.data);
        setError5("1");
      })
      .catch((err) => {
        setError5("2");
      });

    axios
      .get(apiUrl_net_worth, {}, options)
      .then((result) => {
        setListnetworth(result.data.data);
        setError6("1");
      })
      .catch((err) => {
        setError6("2");
      });
  }, []);
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  useEffect(() => {
    $('#alphaPaste').bind('paste', function(){
      var self = this;
      setTimeout(function() {
          if(!/^[a-zA-Z ]+$/.test($(self).val()))
              $(self).val('');
      }, 0);    
  });
    console.log(
      "%cStop!",
      "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;"
    );
  }, []);

  useEffect(() => {
    if (error1 && error2 && error3 && error4 && error5 && error6 && error7) {
      $(".conLoader")
        .show()
        .fadeOut(500, function () {
          $(".conMain").fadeIn(500);
        });
    }

    if (
      error1 == "2" ||
      error2 == "2" ||
      error3 == "2" ||
      error4 == "2" ||
      error5 == "2" ||
      error6 == "2" ||
      error7 == "2"
    ) {
      swal(
        <div style={{ width: "450px", padding: "20px 8px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-sm-2 col-2 col-md-2"
                style={{ padding: "0px" }}
              >
                <img
                  src="Image/error.png"
                  style={{ width: "32px", marginTop: "0px" }}
                ></img>
              </div>
              <div
                className="col-lg-10 col-10 col-sm-10 col-md-10"
                style={{ padding: "0px" }}
              >
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
                <p className="pBox" onClick={testlang}>
                  Account Type
                </p>

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
                  </label>
                  <a
                    target="_blank"
                    href="https://aaa-equities.com.ph/terms-conditions/"
                  >
                    <span className="pCheck">
                      I agree to the terms and conditions
                    </span>
                  </a>
                  <br></br>
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
                  <a
                    target="_blank"
                    href="https://aaa-equities.com.ph/privacy-policy/"
                  >
                    <span className="pCheck">
                      I have read the privacy policy
                    </span>
                  </a>
                </div>
              </div>
              <div className="divForm2">
                <p className="pBox">Personal Information</p>
                <p
                  className="pBoxSub1"
                  style={{ fontWeight: "normal", color: "black" }}
                >
                  Fields marked with "*" are mandatory
                </p>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={fname}
                      autoComplete="false"
                      onChange={changeFname}
                      placeholder="First name *"
                      onInput = {disableEnye}
                      id = "alphaPaste"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={mname}
                      autoComplete="false"
                      onChange={changeMname}
                      placeholder="Middle name *"
                      onInput = {disableEnye}
                      id = "alphaPaste"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={lname}
                      autoComplete="false"
                      onChange={changeLname}
                      placeholder="Last name *"
                      onInput = {disableEnye}
                      id = "alphaPaste"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={telnum}
                      autoComplete="false"
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onInput={numOnly}
                      onChange={changeTelnum}
                      placeholder="Telephone number *"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={mobilenum}
                      autoComplete="false"
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onInput={numOnly}
                      onChange={changeMobilenum}
                      placeholder="Mobile number *"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={birthplace}
                      autoComplete="false"
                      onChange={changeBirthplace}
                      onInput = {disableEnye}
                      placeholder="Birthplace *"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={address}
                      autoComplete="false"
                      onChange={changeAddress}
                      placeholder="Home address *"
                      onInput = {disableEnye}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={address1}
                      autoComplete="false"
                      onChange={changeAddress1}
                      placeholder="Subdivision/Barangay *"
                      onInput = {disableEnye}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="txtBox txtForm2"
                      value={address2}
                      autoComplete="false"
                      onChange={changeAddress2}
                      placeholder="City/Province *"
                      onInput = {disableEnye}
                    ></input>
                  </div>
                </div>
                <div
                  className="row align-items-center"
                  style={{ marginTop: "15px" }}
                >
                  <div className="col-lg-3 col-md-3">
                    <p className="pBoxTitle pbox" style={{ color: "black" }}>
                      Birth Date
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <DatePicker
                      placeholderText="YYYY/MM/DD *"
                      dateFormat="yyyy/MM/dd"
                      selected={birthtDate}
                      onChange={changeBirthdate}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                    />
                  </div>
                </div>
              </div>
              <div className="divForm3">
                <p className="pBox">Personal Information</p>
                <p
                  className="pBoxSub1"
                  style={{ fontWeight: "normal", color: "black" }}
                >
                  Fields marked with "*" are mandatory
                </p>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm3"
                      placeholder="TIN *"
                      value={tin}
                      autoComplete="false"
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      maxLength="9"
                      onInput={numOnly}
                      onChange={changetin}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <Select
                      options={options_country}
                      styles={
                        errorselectnationality
                          ? customStyles_error
                          : customStyles
                      }
                      value={nationalitypick}
                      onChange={changeNationality}
                      placeholder="Philippines"
                    />
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
                      placeholder="Gender *"
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
                      placeholder="Civil Status *"
                    />
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm3"
                      placeholder="Employer *"
                      autoComplete="false"
                      value={employer}
                      onChange={changeEmployer}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm3"
                      autoComplete="false"
                      placeholder="Job title *"
                      value={jobtitle}
                      onChange={changeJobtitle}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      autoComplete="false"
                      className="txtBox txtForm3"
                      placeholder="Business address *"
                      value={busadd}
                      onChange={changeBusadd}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      autoComplete="false"
                      className="txtBox txtForm3"
                      placeholder="Subdivision/Barangay *"
                      value={busadd1}
                      onChange={changeBusadd1}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      autoComplete="false"
                      className="txtBox txtForm3"
                      placeholder="City/Province *"
                      value={busadd2}
                      onChange={changeBusadd2}
                      onInput = {disableEnye}
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
                      placeholder="Bank *"
                      autoComplete="false"
                      value={bank}
                      onInput = {disableEnye}
                      onChange={changeBank}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm4"
                      placeholder="Branch *"
                      autoComplete="false"
                      value={branch}
                      onChange={changeBranch}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm4"
                      placeholder="Account name *"
                      autoComplete="false"
                      value={accountname}
                      onChange={changeAccountname}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm4"
                      placeholder="Account number *"
                      autoComplete="false"
                      value={accountnumber}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onInput={numOnly}
                      onChange={changeAccountnumber}
                      
                    ></input>
                  </div>
                </div>
                <p className="pBoxSub" style={{ marginTop: "15px" }}>
                  Tell us how to help
                </p>
                <p
                  className="pBoxSub1"
                  style={{ marginTop: "10px", color: "#212121" }}
                >
                  Investment Objective *
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
                      placeholder="Source of funds *"
                      value={sourceoffundspick}
                      onChange={changeSourceoffunds}
                    />
                  </div>
                </div>
                <p
                  className="pBoxSub1"
                  style={{ marginTop: "18px", color: "#212121" }}
                >
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
                <p
                  className="pBoxSub1"
                  style={{ marginTop: "18px", color: "#212121" }}
                >
                  Annual Income
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
                <p
                  className="pBoxSub1"
                  style={{ marginTop: "18px", color: "#212121" }}
                >
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
                <p
                  className="pBoxTitle"
                  style={{ marginBottom: "18px", color: "#212121" }}
                >
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
                      onInput = {disableEnye}
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
                <p
                  className="pBoxTitle"
                  style={{ marginBottom: "20px", color: "#212121" }}
                >
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
                      onInput = {disableEnye}
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
                      autoComplete="false"
                      placeholder="Name"
                      id="txtname1"
                      value={corporatename1}
                      onChange={changeCorporatename1}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtposition1"
                      id="txtposition1"
                      autoComplete="false"
                      placeholder="Position"
                      value={corporateposition1}
                      onChange={changeCorporateposition1}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "18px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtname2 txtBox"
                      placeholder="Name"
                      autoComplete="false"
                      value={corporatename2}
                      onChange={changeCorporatename2}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtposition2"
                      placeholder="Position"
                      autoComplete="false"
                      value={corporateposition2}
                      onChange={changeCorporateposition2}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "18px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtname3"
                      placeholder="Name"
                      autoComplete="false"
                      value={corporatename3}
                      onChange={changeCorporatename3}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtposition3"
                      placeholder="Position"
                      autoComplete="false"
                      value={corporateposition3}
                      onChange={changeCorporateposition3}
                      onInput = {disableEnye}
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
                  className="inputFile1"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <div className="divUpload divClient" onClick={onBtnClick}>
                  <p className="pUpload">
                    <b style={{ color: "#00634A" }}>Browse</b> client signature
                    over printed Name
                  </p>
                  <p className="pUpload">Max file size: 4mb</p>
                  <p className="pUpload">Accepted file type: Jpg and Png</p>
                  <div className="container divUploadclient">
                    <div className="row">
                      <div className="col-lg-2 col-sm-2 col-2">
                        <img
                          src="Image/jpg.png"
                          className="img-fluid mx-auto d-flex"
                          style={{ width: "45px" }}
                        ></img>
                      </div>
                      <div
                        className="col-lg-10 col-sm-10 col-10"
                        style={{ position: "relative" }}
                      >
                        <img
                          src="Image/trash-can.png"
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
                          onClick={viewClient}
                        >
                          View image
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divForm9">
                <p className="pBox">Upload signature</p>
                <input
                  onChange={(e) => handleFile1(e)}
                  ref={inputFileRef1}
                  id="file-upload"
                  type="file"
                  className="inputFile2"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <div className="divUpload divJoint" onClick={onBtnClick1}>
                  <p className="pUpload">
                    <b style={{ color: "#00634A" }}>Browse</b> joint account
                    holder's signature <br></br>over printed name{" "}
                  </p>
                  <p className="pUpload">Max file size: 4mb</p>
                  <p className="pUpload">Accepted file type: Jpg and Png</p>
                  <div className="container divUploadjoint">
                    <div className="row">
                      <div className="col-lg-2 col-sm-2 col-2">
                        <img
                          src="Image/jpg.png"
                          className="img-fluid mx-auto d-flex"
                          style={{ width: "45px" }}
                        ></img>
                      </div>
                      <div
                        className="col-lg-10 col-sm-10 col-10"
                        style={{ position: "relative" }}
                      >
                        <img
                          src="Image/trash-can.png"
                          className="imgTrash"
                          onClick={removeJoint}
                        ></img>
                        <p className="pUploadname pUploadvalid1">
                          Sample file.png
                        </p>
                        <p
                          className="pView"
                          data-toggle="modal"
                          data-target="#exampleModalCenter1"
                          onClick={viewJoint}
                        >
                          View image
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divForm10">
                <p className="pBox">Upload two valid IDs</p>
                <input
                  onChange={(e) => handleFile2(e)}
                  ref={inputFileRef2}
                  id="file-upload"
                  className="inputFile3"
                  type="file"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <input
                  onChange={(e) => handleFile3(e)}
                  ref={inputFileRef3}
                  id="file-upload"
                  className="inputFile5"
                  type="file"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <div className="divUpload divValid1" onClick={onBtnClick2}>
                  <p className="pUpload">
                    <b style={{ color: "#00634A" }}>Browse</b> one valid ID
                  </p>
                  <p className="pUpload">Max file size: 4mb</p>
                  <p className="pUpload">Accepted file type: Jpg and Png</p>
                  <div className="container divUploadvalid1">
                    <div className="row">
                      <div className="col-lg-2 col-sm-2 col-2">
                        <img
                          src="Image/jpg.png"
                          className="img-fluid mx-auto d-flex"
                          style={{ width: "45px" }}
                        ></img>
                      </div>
                      <div
                        className="col-lg-10 col-sm-10 col-10"
                        style={{ position: "relative" }}
                      >
                        <img
                          src="Image/trash-can.png"
                          className="imgTrash"
                          onClick={removeValidpic1}
                        ></img>
                        <p className="pUploadname pUploadvalid1">
                          Sample file.png
                        </p>
                        <p
                          className="pView"
                          data-toggle="modal"
                          data-target="#exampleModalCenter1"
                          onClick={viewValid1}
                        >
                          View image
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divUpload divValid2" onClick={onBtnClick3}>
                  <p className="pUpload">
                    <b style={{ color: "#00634A" }}>Browse</b> one valid ID
                  </p>
                  <p className="pUpload">Max file size: 4mb</p>
                  <p className="pUpload">Accepted file type: Jpg and Png</p>
                  <div className="container divUploadvalid2">
                    <div className="row">
                      <div className="col-lg-2 col-sm-2 col-2">
                        <img
                          src="Image/jpg.png"
                          className="img-fluid mx-auto d-flex"
                          style={{ width: "45px" }}
                        ></img>
                      </div>
                      <div
                        className="col-lg-10 col-sm-10 col-10"
                        style={{ position: "relative" }}
                      >
                        <img
                          src="Image/trash-can.png"
                          className="imgTrash"
                          onClick={removeValidpic2}
                        ></img>
                        <p className="pUploadname pUploadvalid2">
                          Sample file.png
                        </p>
                        <p
                          className="pView"
                          data-toggle="modal"
                          data-target="#exampleModalCenter1"
                          onClick={viewValid2}
                        >
                          View image
                        </p>
                      </div>
                    </div>
                  </div>
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
                      autoComplete="false"
                      maxLength="8"
                      pattern="[^\s]+"
                      value={username}
                      onKeyPress={(event) => {
                        if (/^[0-9a-zA-Z \b]+$/.test(event.key)) {
                        } else if (event === 32) {
                        } else {
                          event.preventDefault();
                        }
                      }}
                      onPaste={(event) => {
                        event.preventDefault();
                      }}
                      onChange={changeUsername}
                      onInput = {disableEnye}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10 px" }}>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="txtBox txtForm11 txtEmail"
                      placeholder="Email address"
                      autoComplete="false"
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
                  className="inputFile4"
                  type="file"
                  accept=".jpg, .png, .jpeg|image"
                  style={{ display: "none" }}
                />
                <p className="pBox">Selfie with your ID</p>
                <div
                  className="divUpload divUploadprofile"
                  onClick={onBtnClick4}
                >
                  <p className="pUpload">
                    <b style={{ color: "#00634A" }}>Browse</b> a selfie with your ID
                   
                  </p>
                  <p className="pUpload">Max file size: 4mb</p>
                  <p className="pUpload">Accepted file type: Jpg and Png</p>
                  <div className="container divUploadyourself">
                    <div className="row">
                      <div className="col-lg-2 col-sm-2 col-2">
                        <img
                          src="Image/jpg.png"
                          className="img-fluid mx-auto d-flex"
                          style={{ width: "45px" }}
                        ></img>
                      </div>
                      <div
                        className="col-lg-10 col-sm-10 col-10"
                        style={{ position: "relative" }}
                      >
                        <img
                          src="Image/trash-can.png"
                          className="imgTrash"
                          onClick={removeYourself}
                        ></img>
                        <p className="pUploadname pUploadyourself">
                          Sample file.png
                        </p>
                        <p
                          className="pView"
                          data-toggle="modal"
                          data-target="#exampleModalCenter1"
                          onClick={viewProfile}
                        >
                          View image
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-inline">
                  <img
                    src="Image/webcam.png"
                    className="img-fluid"
                    style={{ width: "18px", marginRight: "8px" }}
                  ></img>
                  <p className="pWebcam" onClick={trylang}>
                    Open webcam
                  </p>
                </div>

                <div style={{ marginTop: "12px" }}>
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={verifyCaptcha}
                    onBtnClick={expiredCaptcha}
                  />
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
                  When <b>support</b> levels are broken, a breakdown may occur.
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
        className="modal "
        id="modalTerms"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modalAgreement modal-lg">
            <div className="modal-body">
              <div className="container">
                <div className="row  ">
                  <div className="col-lg-12 ">
                    <p className="pMargin">Margin Facility Agreement</p>
                    <p className="PMarginsub">
                      I/We (Client) are applying for AAA Southeast Equities
                      Inc.’s (AAA) Margin Facility and agree to be bound by the
                      terms and conditions below. The Client undertakes to
                      notify AAA of any material changes in the Client’s
                      information as disclosed in the Customer Account
                      Information Form (CAIF), including the Client’s financial
                      circumstances or investments objectives. Any information
                      given to AAA on this Margin Facility Agreement (AGREEMENT)
                      is subject to verification with the Client’s express
                      authorization.
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
        id="modalWebcam"
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
          <div
            className="modal-content"
            style={{
              padding: "0px",
              overflow: "hidden",
              backgroundColor: "transparent",
              border: "0px",
            }}
          >
            <div
              className="modal-body"
              style={{ padding: "0px", overflow: "hidden" }}
            >
              <div
                className="container"
                style={{ padding: "0px", overflow: "hidden" }}
              >
                <div className="row  " style={{ padding: "0px" }}>
                  <div
                    className="col-lg-12 "
                    style={{ padding: "0px", position: "relative" }}
                  >
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      height="100%"
                      width="100%"
                      screenshotFormat="image/jpeg"
                      onUserMedia={handleOnUserMedia}
                      onUserMediaError={errorWebcam}
                      screenshotQuality="1"
                    />

                    <div className="divCam">
                      <img
                        src="Image/camera.png"
                        onClick={capture}
                        className="imgCamera img-fluid"
                      ></img>
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
                  <img
                    src=""
                    className="img-fluid mx-auto d-flex  imgHide imgJoint"
                  ></img>
                  <img
                    src=""
                    className="img-fluid mx-auto d-flex imgHide imgValid1"
                  ></img>
                  <img
                    src=""
                    className="img-fluid mx-auto d-flex imgHide imgValid2"
                  ></img>
                  <img
                    src=""
                    className="img-fluid mx-auto d-flex imgHide imgProfile"
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

export default index;
