import React, { useEffect, useState } from 'react'
import './ManageIPO.css';
import { Link } from 'react-router-dom';
function ManageIPO() {


  const [data, setData] = useState([]); // Store backend data
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;

   // Simulating backend data fetch
   useEffect(() => {
    fetch("http://localhost:5000/api/ipo-data") // Replace with your backend API
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate the current page rows
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleUpdate = (row) => {
    console.log("Updating:", row);
  };
  const handleDelete = (id) => {
    console.log("Deleting IPO with ID:", id);
  };


  return (
    <div className='main8'>
      <div className='main8header'>
        <h3>Upcoming IPO | Dashboard</h3>
        <div className='main8Btn1'>
        <Link to="/home/register">
                <button className="main8RegisterBtn">Register IPO</button>
        </Link>
        </div>
      </div>


      <div className='main8body'>
        <div className='main8table'>
          <table className='table8'>
            <thead>
              <tr>
                <th>Campany</th>
                <th>Price Band</th>
                <th>Open</th>
                <th>Close</th>
                <th>ISSUE SIZE</th>
                <th>ISSUE Type</th>
                <th>Listing Date</th>
                <th>Status</th>
                <th>Action</th>
                <th>Delete/View</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.companyName}</td>
                  <td>{row.priceBand}</td>
                  <td>{row.open}</td>
                  <td>{row.close}</td>
                  <td>{row.issueSize}</td>
                  <td>{row.issueType}</td>
                  <td>{row.listingDate}</td>
                  <td><div className='status8'>{row.status}</div></td>
                  <td>
                    <button className='main8UpdateBtn' onClick={() => handleUpdate(row)}>Update</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(row.id)}>Delete</button>
                  </td>
                  

                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination Numbers */}
            <div className="pagination-container">
              <button 
                className="pagination-btn1" 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1}
              >
                &larr;
              </button>

              {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, i) => (
                <button 
                  key={i} 
                  onClick={() => paginate(i + 1)} 
                  className={`pagination-btn2 ${currentPage === i + 1 ? "active" : ""}`}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                className="pagination-btn1" 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
              >
                &rarr;
              </button>
            </div>

     </div>

    </div>
  )
}

export default ManageIPO
