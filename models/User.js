const  mongoose= require("mongoose")

const schema = mongoose.Schema

const UserSchema= new schema({
    name : {
        type: String ,
        required: true
    },
    phone : {
        type: Number ,
        required: true
    },
    email : {
        type: String ,
        required: true
    },
    password :{
        type : String ,
        required: true
    }

})

module.exports = connect = mongoose.model('User', UserSchema)