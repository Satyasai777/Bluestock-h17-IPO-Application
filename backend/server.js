const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const mongoose=require("mongoose");
const dotEnv=require('dotenv');
const IpoData= require('./models/IpoDataSchema');
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Enable CORS
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended : true}))
dotEnv.config();  



// 🔹 Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🔹 Configure Multer with Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "company_logos", // Folder in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"],
    public_id: (req, file) => file.originalname.split(".")[0],
  },
});

const upload = multer({ storage });


//connection to mongoDB
mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log('succesfully connected to MongoDB')
})
.catch((err)=>{
    console.log(err)
})

// Serve static assets from 'public/assets' directory
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

// Sample FAQ data
const faqData = [
  {
    question: "How many lots should I apply for IPO?",
    answer: "The number of lots depends on your investment goals and the IPO's price band."
  },
  {
    question: "What is IPO GMP?",
    answer: "IPO GMP stands for Grey Market Premium, which indicates the expected listing price of an IPO."
  },
  {
    question: "Who decides the IPO price band?",
    answer: "The IPO price band is decided by the company in consultation with its lead managers and underwriters."
  },
  {
    question: "How is the lot size calculated?",
    answer: "Lot size is determined by the company and SEBI, usually based on the face value of the shares."
  }
  // Add more FAQs here...
];



// 🔹 Route to Register IPO with Image Upload
app.post("/registerIpoData", upload.single("companyLogo"), async (req, res) => {
  try {
    console.log("Data coming from frontend:", req.body);
    console.log("Uploaded File:", req.file);

    const {
      companyName,
      priceBand,
      open,
      close,
      issueSize,
      issueType,
      listingDate,
      status,
      ipoPrice,
      listingPrice,
      listingGain,
      cmp,
      currentReturn,
      rhp,
      drhp,
    } = req.body;

    // Basic validation of required fields
    if (!companyName || !priceBand || !open || !close || !issueSize || !issueType || !listingDate || !status) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if a file was uploaded
    let uploadedImageUrl = "";
    if (req.file) {
      uploadedImageUrl = req.file.path; // Cloudinary URL
    }

    console.log("Cloudinary Image URL:", uploadedImageUrl);

    // Create a new IPO data entry
    const ipoData = new IpoData({
      companyName,
      priceBand,
      open,
      close,
      issueSize,
      issueType,
      listingDate,
      status,
      ipoPrice,
      listingPrice,
      listingGain,
      cmp,
      currentReturn,
      rhp,
      drhp,
      companyLogo: uploadedImageUrl,
    });

    console.log("Saving data in MongoDB:", ipoData);
    await ipoData.save();

    res.status(201).json({ message: "IPO Data saved successfully", ipoData });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Serve IPO data
app.get('/api/ipo-data', async(req, res) => {
  // console.log('Fetching IPO data');
  // res.json(ipoData);

  try {
    const ipos = await IpoData.find();
    console.log(ipos)
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Serve IPO data
app.get('/api/ipo-data', async(req, res) => {
  // console.log('Fetching IPO data');
  // res.json(ipoData);

  try {
    const ipos = await IpoData.find();
    console.log(ipos)
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve FAQ data
app.get('/api/faqs', (req, res) => {
  console.log('Fetching FAQ data');
  res.json(faqData);

});



// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
