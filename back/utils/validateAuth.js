const Joi = require ('joi'); 
const { Schema } = require('mongoose');

// Password and confirmPassword must be the same (the exact same string) : 

const registerValidation = (data) => {
    const schema = Joi.object({
        pseudo: Joi.string().required().min(3).max(30),
        email: Joi.string().required().email().max(255).lowercase(),
        password: Joi.string().required().min(8).max(1024).pattern(new RegExp(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)),
        confirmPassword: Joi.ref('password'),
    })

        // make confirmPassword required IF password is present : 
        .with('password', 'confirmPassword');

    return schema.validate(data, Schema);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email().max(255).lowercase(), 
        password: Joi.string().min(8).max(1024).required(),
    });

    return schema.validate(data, Schema);
};

module.exports = {
    registerValidation, 
    loginValidation
}; 