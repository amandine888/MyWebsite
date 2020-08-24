const Joi = require ('joi'); 

// Password and confirmPassword must be the same (the exact same string) : 

const registerValidation = (data) => {
    const schema = Joi.object ({
        pseudo: Joi.string().required([true, 'Please add a pseudo']).min(3).max(30), 
        email: Joi.string().required().email().max(255).lowercase(), 
        password: Joi.string().required().min(8).max(1024).pattern(new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/)).error(new Error("Your password has to contain ")), 
        confirmPassword: Joi.ref('password'), 
    })

    // make confirmPassword required IF password is present : 
    .with('password', 'confirmPassword');


    return schema.validate(data);
};

module.exports = {registerValidation}; 