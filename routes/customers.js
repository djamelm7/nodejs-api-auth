const express = require('express');
const Joi = require("joi");
const { Customer } = require('../models/index');

const router = express.Router();

    router.get('/customer', (req, res)=>{
        Customer.findAll().then(customer => {
          res.json(customer);
      })
    });
    router.post('/customer', (req, res)=>{
        let body = req.body ;
        Customer.create(body).then(customer => {
            res.json(customer);
        })
        .catch((err) => console.log(err.message))
      });
      router.get('/customer/:id', (req, res)=> {
        Customer.findAll({
              where: {id: req.params.id}
          })
          .then( result => {
              res.json(result);
          })
      })
      router.put('/customer/:id',(req, res) =>{
        Genere.update(
         { name: req.body.name ,
           phonenum: req.body.phonenum
         },
         {where: {id: req.params.id}}
         )
         .then( result => {
            res.json(result);
        });
       })
       router.delete('/customer/:id',(req, res) =>{
           Genere.destroy({
               where: {
                   id: req.params.id
               }
           }).then(()=> res.send("customer deleted "));
       })
      module.exports = router;