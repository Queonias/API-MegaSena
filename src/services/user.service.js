const User = require('../models/user');
const ValueInvalid = require('../errors/valuesInvalid')

const signup = async ({ name, email, password }) => {
    const emailUser = await User.findOne({email: email});
    if (emailUser) {
        const response = { message: 'The email you entered is already in use.' };
        throw new ValueInvalid(response);
    } else {
        const newUser = new User({ name, email, password });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        return { message: 'You are registered' };
    }
    
};

module.exports = {
    signup,
};