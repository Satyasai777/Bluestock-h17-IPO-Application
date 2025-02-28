import React, { useState } from "react";
import "./RegisterIPO.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterIPO() {
  const navigate = useNavigate();
  const [ipoData, setIpoData] = useState({
    companyName: "",
    priceBand: "",
    open: "",
    close: "",
    issueSize: "",
    issueType: "",
    listingDate: "",
    status: "",
    ipoPrice: "",
    listingPrice: "",
    listingGain: "",
    cmp: "",
    currentReturn: "",
    rhp: "",
    drhp: "",
    companyLogo: "", // Store Base64 initially
  });

  // Convert Base64 to File
  const base64ToFile = (base64String, fileName) => {
    let arr = base64String.split(",");
    let mime = arr[0].match(/:(.*?);/)[1]; // Extract MIME type
    let bstr = atob(arr[1]); // Decode Base64
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIpoData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Receive Base64 from IPOInformation.js and store it
  const handleLogoChange = (logo) => {
    if (logo) {
      setIpoData((prev) => ({
        ...prev,
        companyLogo: logo, // Store Base64 first
      }));
    } else {
      console.error("No logo URL provided");
    }
  };

  async function handleSubmit() {
    console.log("Submitted IPO Data:", ipoData);

    const formData = new FormData();

    // Append text fields
    Object.keys(ipoData).forEach((key) => {
      if (key !== "companyLogo") {
        formData.append(key, ipoData[key]);
      }
    });

    // Convert Base64 to File and append to FormData
    if (ipoData.companyLogo.startsWith("data:image")) {
      const uniqueFileName = `${Date.now()}_company_logo.png`; // Unique file name based on timestamp
      const logoFile = base64ToFile(ipoData.companyLogo, uniqueFileName);
      formData.append("companyLogo", logoFile);
    }

    console.log("FormData before sending:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await axios.post("http://localhost:8000/registerIpoData", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Success:", res);

      setIpoData({
        companyName: "",
        priceBand: "",
        open: "",
        close: "",
        issueSize: "",
        issueType: "",
        listingDate: "",
        status: "",
        ipoPrice: "",
        listingPrice: "",
        listingGain: "",
        cmp: "",
        currentReturn: "",
        rhp: "",
        drhp: "",
        companyLogo: "",
      });

      window.location.reload();
    } catch (e) {
      console.log("Error:", e);
    }
  }
  return (
    <div className="container">
      <div className="headerSection1">
        <div className="headerSection1_1">
          <h1>Upcoming IPO Information</h1>
          <p>Manage your IPO Details</p>
        </div>
        <div className="headerSection1_2">
          <button className="registerBtn" onClick={handleSubmit}>Register</button>
          <button className="cancelBtn" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </div>
      <div className="bodySection1">
        <div className="bodySection1_1">
          <Link className="link1" to="ipoInformation">
            IPO Information
          </Link>
          <Link className="link1" to="">
            IPO Info
          </Link>
        </div>
        <div className="bodySection1_2"></div>
        <div className="bodySection1_3">
          <Outlet context={{ ipoData, handleInputChange, handleLogoChange }} />
        </div>
      </div>
    </div>
  );
}

export default RegisterIPO;
