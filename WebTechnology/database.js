const { createPool } = require('mysql');

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "college",
  connectionLimit: 10
});

const sql = `INSERT INTO student (id, name, age) VALUES (?, ?, ?)`;

const values = [4, 'John Doe', 20];

pool.query(sql, values, (err, result) => {
  if (err) {
    return console.error('Error inserting data:', err);
  }
  console.log('Data inserted successfully!', result);
});

pool.query(`select * from college.student`,(err,res)=>{
    if(err){
        return console.log(err);
    }
    console.log(res);
})
