import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./Dashboard.css";

const ipoStats = [
  { name: "Total IPO", value: 30, color: "#FFA726" },
  { name: "IPO in Gain", value: 20, color: "#29B6F6" },
  { name: "IPO in Loss", value: 9, color: "#9575CD" }
];

const mainBoardData = [
  { name: "Upcoming", value: 15, color: "#5C6BC0" },
  { name: "New Listed", value: 25, color: "#7986CB" },
  { name: "Ongoing", value: 2, color: "#9FA8DA" }
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="dashboard-content">
        {/* IPO Statistics Section */}
        <div className="ipo-stats">
          <h3>IPO Dashboard India</h3>
          <p><span style={{ color: "green" }}>↑ 20 </span> IPO in Gain </p>
          <div className="bubble-chart">
            {ipoStats.map((stat, index) => (
              <div
                key={index}
                className="bubble"
                style={{
                  backgroundColor: stat.color,
                  width: `${stat.value * 5}px`,
                  height: `${stat.value * 5}px`
                }}
              >
                <span>{stat.value}</span>
                <p>{stat.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">

          <h3>Quick Links</h3>
          <p>Adipiscing elit, sed do eiusmod tempor</p>
          <ul>
            <li>
              <img src="https://www.nseindia.com/assets/images/market_stat.png" alt="NSE India" />
              <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer">NSE India</a>
              <span><a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer">Visit Now</a></span>
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Bombay_Stock_Exchange_logo.svg/2560px-Bombay_Stock_Exchange_logo.svg.png" alt="BSE India" />
              <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer">BSE India</a>
              <span><a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer">Visit Now</a></span>
            </li>
            <li>
              <img src="https://seeklogo.com/images/S/sebi-logo-5C8DB419F5-seeklogo.com.png" alt="SEBI" />
              <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer">SEBI</a>
              <span><a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer">Visit Now</a></span>
            </li>
            <li>
              <img src="https://content.jdmagicbox.com/v2/comp/mumbai/99/022p150099/catalogue/moneycontrol-com-matunga-east-mumbai-share-brokers-4affv32.jpg" alt="Money Control" />
              <a href="https://www.moneycontrol.com" target="_blank" rel="noopener noreferrer">Money Control</a>
              <span><a href="https://www.moneycontrol.com" target="_blank" rel="noopener noreferrer">Visit Now</a></span>
            </li>
          </ul>
        </div>

        {/* Main Board IPO Donut Chart */}
        <div className="main-board-ipo">
          <h3>Main Board IPO</h3>
          <p>From 01 Jan 2024</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={mainBoardData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {mainBoardData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <button className="view-report">View Report</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
