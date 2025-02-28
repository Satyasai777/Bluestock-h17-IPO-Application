const mongoose=require("mongoose");

const ipoDataSchema=new mongoose.Schema({
    
    companyName:{
        type:String,
        required:true
    },
    priceBand:{
        type:String,
        required:true
    },
    open: {
        type:String,
        required:true
    },
    close:{
        type:String,
        required:true
    },
    issueSize:{
        type:String,
        required:true
    },
    issueType: {
        type:String,
        required:true
    },
    listingDate:{
        type:String,
        required:true
    },
    status: {
        type:String,
        required:true
    },
    ipoPrice: {
        type:String,
        required:true
    },
    listingPrice: {
        type:String,
        required:true
    },
    listingGain: {
        type:String,
        required:true
    },
    cmp: {
        type:String,
        required:true
    },
    currentReturn:{
        type:String,
        required:true
    },
    rhp: {
        type:String,
        required:true
    },
    drhp: {
        type:String,
        required:true
    },
    companyLogo: { type: String },
})

module.exports=mongoose.model('IpoDataSchema',ipoDataSchema);