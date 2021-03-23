import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
function margin_agreement() {
    return(
        <>
        <Header></Header>
         <div className = "container-fluid h-100">
             <div className = "row h-100">
                 <div className = "col-lg-12">
                 <iframe  src="https://docs.google.com/viewer?url=https://aaaequities.vercel.app/others/margin_agreement.pdf&embedded=true" style={{border: 0, width: '100%', height: '100%'}}></iframe>
                 </div>
             </div>
         </div>
        </>
    )
}

export default margin_agreement;