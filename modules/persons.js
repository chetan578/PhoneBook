const mongoose =require('mongoose')
const url=`mongodb+srv://chetan578:chetan@1998@cluster0-ylv4t.mongodb.net/phonebook-app?retryWrites=true&w=majority`
console.log('connecting with server')
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    console.log('connecting with mongo')
})
.catch(result=>{
    console.log('error connecting with mongodb',error.message)
})

const PersonSchema =new mongoose.Schema({
    name: {
     type: String,
     minlength:3,
     required:true 
     },
    number :{
      type:String,
      minlength:10,
      required:true
    }
})

PersonSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports=mongoose.model('Person',PersonSchema)