import sqlite3 from "sqlite3";

const db = new sqlite3.Database("/Users/slava/tasks.db3", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err: any) => {
        console.log(err);
    });
const query = 'CREATE TABLE task ( id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100), priority VARCHAR(100) );';
db.run(query, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Table Created');
    }
});