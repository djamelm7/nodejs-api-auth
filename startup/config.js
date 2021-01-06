require("dotenv").config();
module.exports = function(){
    if(!process.env.JWT_KEY){
         throw new Error('Fatal Error : JwtPrivateKey is not define');
       /* console.error('Fatal error : JwtPrivateKey is not define');
        process.exit(1);*/
      }
}