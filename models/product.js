const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        
        name: {
          type:String,
          
        },
        image: {
          type:String,
          
        },
        mobile: {
          type:Number,
          
        },
        amount: {
          type:Number,
        },
        
        items: {
          type:Array,
        },
        
        featured:{
          type:Boolean,
          default:false,
        },
        
        
        createdAt:{
          type:Date,
          default:Date.now(),
        },
        company:{
          type:String,
        },
        table: {
          type:String,
          
        },
        orderid:{
          type:String,
        },
        details: {
          type:String,
          
        }
      
    
});


module.exports = mongoose.model("Order", productSchema);