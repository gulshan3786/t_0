import mysql from "mysql2";
const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"db_26"
});
db.connect((err)=>{
  if(err)throw err;
  console.log("connection successfull");
});
export default db;