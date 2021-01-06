module.exports = (db, type) => {
   return db.define('Genres',{
       id: {
           type: type.INTEGER,
           autoIncrement: true , 
           primaryKey:true ,
       },
       name: {
        type: type.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "foo is required" },
            max: 20,
            min: 4, 
          }
       }
   });
}
