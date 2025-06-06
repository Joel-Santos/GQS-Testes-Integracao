const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
db.serialize(()=>{
    db.run(
        `
        CREATE TABLE produtos(
        id INTEGER PRIMARY KEY,
        nome TEXT)      
        `
    );
});
module.exports = db;