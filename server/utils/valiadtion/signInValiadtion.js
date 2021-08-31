const Joi = require('joi');


const signinValiadtion = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
 module.exports=signinValiadtion;