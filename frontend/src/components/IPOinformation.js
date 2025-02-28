import React, { useContext, useEffect, useState } from 'react'; 
import './IPOinformation.css';
import { CompanyDataContext } from './CompanyDataContext'; // Correct import path
import { Link, useOutletContext } from 'react-router-dom';

function IPOinformation() {

  const { ipoData, handleInputChange,handleLogoChange} = useOutletContext();
  const { companyData } = useContext(CompanyDataContext); // Use context
  
  const [prevLogo, setPrevLogo] = useState(null);
  useEffect(() => {
    if (companyData?.logo && companyData.logo !== prevLogo) {
      // Make sure the logo has actually changed
      handleLogoChange(companyData.logo);
      setPrevLogo(companyData.logo); // Save the logo as "prevLogo" to prevent future unnecessary updates
    }
  }, [companyData, handleLogoChange, prevLogo]);

  return (
    <div className='container3'>
      <div className='container3_1'>
        <h2>IPO Information</h2>
        <p>Enter IPO Details</p>
      </div>
      <div className='container3_2'></div>
      <div className='container3_3'>
        <div className='container3_3_1'>
          <h5>Company Logo</h5>
        </div>
        <div className='container3_3_2'>
          <div className='container3_3_2_1'>
          {companyData?.logo ? (
                <img src={companyData.logo} alt='Company Logo' className='logoImage123' />
              ) : (
                <p>No Logo Uploaded</p>
              )}
          </div>
          <div className='container3_3_2_2'>
            <p><strong> {companyData?.name || 'N/A'}</strong></p>
            <p>{companyData?.type || 'N/A'}</p>
            <p> {companyData?.location || 'N/A'}</p>
          </div>
          <div className='container3_3_2_3'>
            <Link to="/updateLogo">
                <button className="updateBtn1">Update Logo</button>
            </Link>
            <button className='deleteBtn1' onClick={() => window.location.reload()}>Delete</button>
          </div>
        </div>
          {/* <div className='companyLogo123'>
              {companyData?.logo ? (
                <img src={companyData.logo} alt='Company Logo' className='logoImage123' />
              ) : (
                <p>No Logo Uploaded</p>
              )}
          </div> */}

          {/* <div className='companyInfo'>
            <p><strong> {companyData?.name || 'N/A'}</strong></p>
            <p>{companyData?.type || 'N/A'}</p>
            <p> {companyData?.location || 'N/A'}</p>
          </div> */}
          {/* <div className='companyBtns123'>
            <Link to="/updateLogo">
                <button className="companyBtn155">Update Logo</button>
            </Link>
            <button className='companyBtn255' onClick={() => window.location.reload()}>Delete</button>
          </div> */}
      </div>
      <div className='container3_4'>
        <form className='form1'>
              <div className='formRow'>
                <div className='col1'>
                <label htmlFor="companyName">Company Name</label>
                  <input className='formInputs' required type='text' name='companyName' value={ipoData.companyName} onChange={handleInputChange}/>
                </div>
                <div className='col2'>
                  <label htmlFor="priceBand">Price Band</label>
                  <input className='formInputs' required type='text' name='priceBand' value={ipoData.priceBand} onChange={handleInputChange}/>
                </div>
              </div>
              <div className='formRow'>
                <div className='col1'>
                  <label htmlFor='open'>Open</label>
                  <input className='formInputs' required type='date' name='open' value={ipoData.open} onChange={handleInputChange}/>
                </div>
                <div className='col2'>
                  <label htmlFor='close'>Close</label>
                  <input className='formInputs' required type='date' name='close' value={ipoData.close} onChange={handleInputChange}/>
                </div>
              </div>
              <div className='formRow'>
                <div className='col1'>
                  <label htmlFor='issueSize'>Issue Size</label>
                  <input className='formInputs' required type='text' name='issueSize' value={ipoData.issueSize} onChange={handleInputChange}/>
                </div>
                <div className='col2'>
                  <label htmlFor='issueType'>Issue Type</label>
                  <select className='formInputs' required name='issueType' value={ipoData.issueType} onChange={handleInputChange}>
                    <option>Type1</option>
                    <option>Type2</option>
                    <option>Type3</option>
                    <option>Type4</option>
                    <option>Type5</option>
                  </select>
                  {/* <input className='formInputs' type='select' name='issueType' value={ipoData.issueType} onChange={handleInputChange}/> */}
                </div>
              </div>
              <div className='formRow'>
                <div className='col1'>
                  <label htmlFor='listingDate'>LISTING DATE</label>
                  <input className='formInputs' required type='date'name='listingDate' value={ipoData.listingDate} onChange={handleInputChange}/>
                </div>
                <div className='col2'>
                  <label htmlFor='status'>Status</label>
                  <select className='formInputs' required name='status' value={ipoData.status}  onChange={handleInputChange}>
                    <option>Ongoing</option>
                    <option>Comming</option>
                    <option>New Listed</option>
                  </select>
                  {/* <input className='formInputs' type='text'name='status' value={ipoData.status} onChange={handleInputChange}/> */}
                </div>
              </div>
        </form>
        <h5>NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)</h5>
        <form className='form1'>
              <div className='formRow'>
                <div className='col1'>
                  <label htmlFor='ipoPrice'>IPO PRICE</label>
                  <input className='formInputs' required type='text' name='ipoPrice' value={ipoData.ipoPrice} onChange={handleInputChange}/>
                </div>
                <div className='col2'>
                  <label htmlFor='listingPrice'>LISTING PRICE</label>
                  <input className='formInputs' required type='text' name='listingPrice' value={ipoData.listingPrice} onChange={handleInputChange}/>
                </div>
              </div>
              <div className='formRow'>
                <div className='col1'>
                  <label htmlFor='listingGain'>LISTING GAIN</label>
                  <input className='formInputs' required type='text' name='listingGain' value={ipoData.listingGain} onChange={handleInputChange}/>
                </div>
                <div className='col2'>
                  <label htmlFor='listingDate'>LISTING DATE</label>
                  <input className='formInputs' required type='date' name='listingDate' value={ipoData.listingDate} onChange={handleInputChange}/>
                </div>
              </div>
              <div className='formRow'>
                <div className='col1'>
                  <label htmlFor='cmp'>CMP</label>
                  <input className='formInputs' required type='text' name='cmp' value={ipoData.cmp} onChange={handleInputChange}/>
                </div>
                <div className='col2'>
                  <label htmlFor='currentReturn'>CURRENT RETURN</label>
                  <input className='formInputs' required type='text' name='currentReturn' value={ipoData.currentReturn} onChange={handleInputChange}/>
                </div>
              </div>
              <div className='formRow'>
                <div className='col1'>
                  <label htmlFor='rhp'>RHP</label>
                  <input className='formInputs' required type='text' name='rhp' value={ipoData.rhp} onChange={handleInputChange}/>
                </div>
                <div className='col2'>
                  <label htmlFor='drhp'>DRHP</label>
                  <input className='formInputs' required type='text' name='drhp' value={ipoData.drhp} onChange={handleInputChange}/>
                </div>
              </div>
        </form>
      </div>
      <div className='container3_5'></div>
    </div>
  )
}

export default IPOinformation
