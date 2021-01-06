module.exports = (db, type) => {
    return  db.define('Users',{
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
         min:4,
         max:25,
         }  

        }, 
        email:{
            type: type.STRING,
            allowNull: false,
            unique:true,
            validate:{
            isEmail: true
            }
        },
        password:{
            type: type.STRING,
            allowNull: false,
           /* validate:{
             min:4,
             max:1024,
            }*/
        },
        isAdmin:{
            type: type.BOOLEAN,
            defaultValue: 0,
        }  
    },);
}