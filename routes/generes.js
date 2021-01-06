const express = require('express');
//const asyncMiddlware = require('../middleware/async');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const Joi = require("joi");
const { Genere } = require('./../models/index');

const router = express.Router();

    router.get('/genres',async(req, res,next)=>{
       // throw new Error('Could not get the geners.');
        generes= await Genere.findAll()
          res.json(generes);
      //.catch(ex => {next(ex)});
})
    router.post('/genres',auth,(req, res)=>{
        const schema = Joi.object ({
            name: Joi.string().min(4).required(),
    });
       const result = schema.validate(req.body);
       if(result.error)
       return res.status(400).send(result.error.details[0].message);
        let body = req.body ;
        Genere.create(body).then(generes => {
            res.json(generes);
        })
        .catch((err) => console.log(err.message))
      });
      router.get('/genres/:id', (req, res)=> {
          Genere.findAll({
              where: {id: req.params.id}
          })
          .then( result => {
              res.json(result);
          })
      })
      router.put('/genres/:id',auth,(req, res) =>{
        const schema = Joi.object ({
            name: Joi.string().min(4).required(),
    });
       const result = schema.validate(req.body);
       if(result.error)
       return res.status(400).send(result.error.details[0].message);
        Genere.update(
         { name: req.body.name 
         },
         {where: {id: req.params.id}}
         ).then(result => {
            res.json(result);
        });
       })
       router.delete('/genres/:id',[auth,admin],(req, res) =>{
           Genere.destroy({
               where: {
                   id: req.params.id
               }
           }).then(()=> res.send("genres deleted "));
       })
module.exports = router;

      /*router
 .route('/genres')
 .get((req, res)=>{
    Genere.findAll().then(generes => {
        res.json(generes);
 })
})*/
   /* router.get('/:id',(req, res)=>{
               let sql = `SELECT * FROM genre where id= ${req.params.id}`;
               db.con.query(sql, (err, data, fields)=>{
                   if(err) throw err;
                   res.json({
                       data ,
                       message: "genre lists retrieved by id successfully",
                   })
               })
    });
    router.post('/add', (req, res)=> {
        const schema = Joi.object ({
            name: Joi.string().min(4).required()
    });
       const result = schema.validate(req.body);
       if(result.error)
       return res.status(400).send(result.error.details[0].message);
    let sql = `INSERT INTO genre(name) VALUES (?)`;
    db.con.query(sql,  req.body.name , function(err, data, fields){
        if (err) throw err;
        res.json({
          status: 200,
          message: "New gener added successfully",
        })
    })
    });
    router.put('/update/:id', (req, res)=> {
    const schema = Joi.object ({
            name: Joi.string().min(4).required()
    });
       const result = schema.validate(req.body);
       if(result.error)
       return res.status(400).send(result.error.details[0].message);
       let sql = `UPDATE genre SET name =? WHERE id = ${req.params.id}`;
       db.con.query(sql,req.body.name, function(err, data, fields){
        if (err) throw err;
        res.json({
          status: 200,
          message: " gener updated successfully",
        })
    })
    });
router.delete('/:id', (req, res)=> {
    let sql = `DELETE FROM genre WHERE id = '${req.params.id}' `;
    db.con.query(sql, (err, result)=> {
 if(err) throw err ; 
 res.json({
    status: 200,
    message: `deleted gener num: ${req.params.id} successfully`,
  })
    });
});*/
    
