const winston = require('winston');
require('winston-mysql');
require('express-async-errors')

module.exports=function(){
    winston.ExceptionHandler(
        new winston.transport.File({ filename: 'uncaughtexceptions.log'})
      )
      process.on('uncaughtException',(ex)=>{
        winston.error(ex.message, ex);
        process.exit(1)
      })
      process.on('unhandledRejection', (ex)=>{
        throw ex;
      })
      winston.add(new winston.transports.File({ filename: 'logfile.log' }));
}