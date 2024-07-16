const mongoose=require('mongoose')
const shortid=require('shortid');
const Schema=mongoose.Schema;
const urlSchema=new Schema({
    originalUrl:{type:String,required:true,},
    shortUrl:{type:String,required:true,unique:true,default:shortid.generate},
});
module.exports=mongoose.model('url',urlSchema);