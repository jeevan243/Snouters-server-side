const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Users Schema
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        userType: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);


// hashing password using bcryptjs package
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next()
    }
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
});

//checking Credintials while login\
userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};
const User = mongoose.model("user", userSchema);

module.exports = User;