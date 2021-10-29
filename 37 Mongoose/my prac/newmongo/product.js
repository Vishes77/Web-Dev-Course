const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SjopApp')
    .then(()=>{
        console.log("Connection Open");
    })
    .catch(err =>{
        console.log("Error Occured");
        // console.log(err);
    }) // Till here connection is established.

const productSchema = new mongoose.Schema({
    name : {
        type: String, 
        default:'This is Default Value', //Kind of Validation we Created over here
        maxlength:20, //Kind of Validation we Created over here
        required : true  //Kind of Validation we Created over here.
    },
    onSale : {
        type:Boolean,
        default:false
    },
    price : {
        type:Number,
        min:[0 ,'This is the error msg niggas'], // second permaters of this array is the message that we want to pass.
        max:30,
        default:0,
        required:true
    },
    categories : [String],
    size : {
        type : String,
        enum : ['S','M','L']
    }
});    

// const product = mongoose.model('Product',productSchema);

// const bike = new product({name :'Bisu Bike',price : 300})
// const bike =  new product({name : 'Bishu' , price : 25 , categories : ['abc']})
// bike.save()
//     .then(data => {
//         console.log("Data Saved");
//     })
//     .catch((err)=>{
//         console.log('Some Error has been Occcured');
//     })



// const getdata = product.findOne({name : 'Bishu'}, function(err,docs){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(docs);
//     }
// });

// product.findOneAndUpdate({name:'Bishu'} , {price : -25} , {new :true , runValidators : true})
//     .then(data => {
//         console.log("Data Saved");
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log('Some Error has been Occcured');
//         console.log(err);
//     })

// const bike = new product({name:'Vishes' , price:20 , categories:["walia"],size:'S'})
// bike.save()
// .then(data =>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// })

// Intantace methods works intance of each intances.

productSchema.methods.greet = function(){
    console.log("Hello");
    console.log(`-from ${this.name}`); // this.name === methods.name
}

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}
productSchema.methods.AddCategory = function(cate){
    this.categories.push(cate);
    return this.save();
}

const product = mongoose.model('Product',productSchema)

//async function is just used to return promise.

const findProduct = async () => {
    const foundProduct = await product.findOne({name:'Bishu'});  //awiat generally wait till the complete execution of the Promise.
    // foundProduct.onSale = !foundProduct.onSale;
    // foundProduct.save();
    await foundProduct.toggleOnSale();
    await foundProduct.AddCategory('Next Cate');
    console.log(foundProduct);
}

findProduct()

//--------------------------------------------------------------------------------------------------------//
//static method are the methods which live inside the main schema not in the instance of schema.
// not act upon individual instances.
// inshort it is simply to add directly main function of the schema.

productSchema.statics.firesale = function(){
    return this.upadateMany({},{onSale:true , price: 0})
}
//Applied in all.
product.firesale().then(res => console.log(res));

