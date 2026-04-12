import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    bangleCategory : {
        type : String
    },
    productCategory : {
        type : String
    },
    productFrontImageLink : {
        type : String
    },
    productImageLinks : {
        type : [String]
    },
    
    productMrpPrice : {
        type : String
    },
    productPrice : {
        type : String
    },
    productStatus : {
        type : String
    },
    productTitle : {
        type : String
    },
    productType : {
        type : [mongoose.Schema.Types.Mixed]
    }
})

const productModel = mongoose.model('product', productSchema)

export default productModel