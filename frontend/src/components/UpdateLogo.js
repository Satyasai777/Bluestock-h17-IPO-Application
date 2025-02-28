import React, { useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { CompanyDataContext } from './CompanyDataContext'; // Correct import path
import './UpdateLogo.css';

function UpdateLogo() {
  const { companyData, setCompanyData } = useContext(CompanyDataContext); // Use context
  const [formData, setFormData] = useState({
    name: companyData?.name || '',
    type: companyData?.type || '',
    location: companyData?.location || '',
    logo: companyData?.logo || null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanyData(formData);
  };

  return (
    <div className='container5'>
      <div className='box5'>
        <h1>Company Logo</h1>
        <form className='form5' onSubmit={handleSubmit}>
          <div className='input5_1'>
            <label className='label5'>Company :</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Company name..'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='input5_2'>
            <label className='label5'>Type Of Company :</label>
            <select name='type' value={formData.type} onChange={handleChange}>
              <option value=''>Select Type</option>
              <option value='Tech Lead'>Tech Lead</option>
              <option value='Bio Tech'>Bio Tech</option>
            </select>
          </div>
          <div className='input5_3'>
            <label className='label5'>Location :</label>
            <input
              type='text'
              name='location'
              placeholder='Location'
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className='input5_4'>
            <label className='label5'>Upload Company Logo :</label>
            <input type='file' accept='image/*' onChange={handleFileChange} />
          </div>
          <button type='submit' className='submitBtn5'onClick={()=> navigate('/home/register/ipoInformation')}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateLogo;
