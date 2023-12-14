const ValueInvalid = require('../utils/errors/valuesInvalid');

const validFields = (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (password.length < 4) {
            const response = { 
                message: 'Passwords must be at least 4 characters long.',
                name,
                email,
                password,
            };
        throw new ValueInvalid(response);
        }
        next();
    } catch (error) {
        res.status(Number(error.stack)).json(error.message);
    }
}

module.exports = validFields;