module.exports = (db, type) => {
    return  db.define('Customers',{
        id: {
            type: type.INTEGER,
            autoIncrement: true , 
            primaryKey:true ,
        },
        name: {
         type: type.STRING,
         allowNull: false,
         validate:{
         is: /^[a-z]+$/i, 
         }  
        }, 
        phonenum:{
            type: type.INTEGER,
            allowNumm: false,
        }
    });
 }