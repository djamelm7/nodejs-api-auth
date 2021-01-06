const express = require('express');
const auth = require('../middleware/auth')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const Joi = require("joi");
const { User } = require('./../models');
require("dotenv").config();
const router = express.Router();
router.get('/me',auth,async(req, res)=>{
 const user = await User.findByPk(req.body.id);
 res.send(user);
});
    router.post('/', async (req, res)=>{
        const schema = Joi.object ({
            name: Joi.string().min(4).required(),
            email:Joi.string().email(),
            password:Joi.string().min(5).required()
    }).unknown(true);
       const result = schema.validate(req.body);
       if(result.error)
       return res.status(400).send(result.error.details[0].message);
       
       let user = await User.findOne({where:{email:req.body.email}});
        if(user){
           return res.status(400).send('User already registred');
        };
      
    /*User.create(req.body).then(user =>{
        res.send(_.pick(user, ['id','name','email']))})
     .catch((err) => console.log(err.message))*/
      user =  new User(_.pick(req.body, ['name','email','password','isAdmin'])) //let body = req.body;
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt)
        await user.save()
      
        const token = jwt.sign({name: user.name,isAdmin: user.isAdmin},process.env.JWT_KEY);
       
        res.header('x-auth-token',token).status(201).json(_.pick(user, ['id','name','email','isAdmin']))
    });
    
module.exports = router;