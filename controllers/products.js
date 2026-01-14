
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const {company, name, featured} = req.query;
  const queryObject = {};
  
  if (company){
    queryObject.company = company;
  }
  
  if (featured){
    queryObject.featured = featured;
  }
  
  if (name){
    queryObject.name = { $regex: name, $optiins: "i"};
  }
  
  const myData = await Product.find(queryObject);
  res.status(200).json(myData);
};


const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json(myData);
};

const postProducts = async (req,res) => {
  try {
    //start
    
    //end 
    console.log("Request Body:", req.body);
    const product = await Product.create(req.body);
    
    res.status(200).json(product);
    //console.log(code);
  } catch (error){
    res.status(500).json({message :error.message});
  }
};
//findById
const FindByIdProducts = async (req, res) => {
  const {id} = req.params;
  const myData = await Product.findById(id);
  if (!myData){
      return res.status(404).json({message: "product not found"});
    }
  res.status(200).json(myData);
};
//end

//deleteProducts

const deleteProducts = async (req,res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    
    if (!product){
      return res.status(404).json({message: "product not found"});
    }
    
    res.status(200).json({message: "product deleted successfully"});
    
  } catch (error){
    res.status(500).json({message: error.message});
  }
};

//end


const putProducts = async (req,res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    
    if (!product){
      return res.status(404).json({message: "product not found"});
    }
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
    
  } catch (error){
    res.status(500).json({message: error.message});
  }
};

//put 

module.exports = {getAllProducts, getAllProductsTesting, postProducts, deleteProducts, putProducts, FindByIdProducts};