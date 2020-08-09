const Joi = require('joi');
const registerValidator = (user) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(255).required(),
        email: Joi.string().min(3).max(255).email().required(),
        password: Joi.string().min(8).max(1024).required(),
    });
    return schema.validate(user);
};

//۱۱۱۱
module.exports = {
    registerValidator,
};
