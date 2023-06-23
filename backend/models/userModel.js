const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},  

    token: {type: String, required: true}

})

userSchema.pre("save", async function (next) {
    const user = this
    if(user.isModified('password')){
        user.password= await bcrypt.hash(user.password, 9);
    }
})

userSchema.methods.generateAuthTokens = async function(){
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, "someSikretKij")
    user.token = token;
    await user.save()
    return token;

}

userSchema.statics.loginUser = async function(username, password){

    const user = await userModel.findOne({username})
    if(!user){
        throw new Error("Cannot Login")
    }
    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword){
        throw new Error("Wrong Password")
    }
    return user
}


const userModel = new mongoose.model('user', userSchema)

module.exports = userModel