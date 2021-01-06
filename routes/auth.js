const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const _ = require('lodash');
const Joi = require("joi");
const { User } = require('./../models');
const router = express.Router();
require("dotenv").config();

router.post('/', async (req, res)=>{
   /* const schema = Joi.object ({
        name: Joi.string().min(4).required(),
        email:Joi.string().email(),
        password:Joi.string().min(5).required()
}).unknown(true);*/
   const { error } = validate(req.body);
   if(error)
   return res.status(400).send(error.details[0].message);
   
   let user = await User.findOne({where:{email:req.body.email}});
    if(!user){
       return res.status(400).send('invalid email or password ');
    };
  
const passwordvalidation = await bcrypt.compare(req.body.password,user.password);
if(!passwordvalidation) return res.status(400).send('invalid email or password');
const token = jwt.sign({name: user.name,isAdmin: user.isAdmin},process.env.JWT_KEY);
res.send(token);
});
function validate(req){
    const schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(5).required()
    })
  return   schema.validate(req);
    }
module.exports = router;
