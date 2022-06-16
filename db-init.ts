import sqlite3 from "sqlite3";

const db = new sqlite3.Database("apps/api/data/tasks.db3", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err: any) => {
        console.log(err);
    });
db.run(`
CREATE TABLE task ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title VARCHAR(100), 
    priority VARCHAR(100)
);
    `, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Table `task` Created');
    }
});
db.run(`
CREATE TABLE todo ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    task_id INTEGER, 
    title VARCHAR(100), 
    content TEXT, 
    status VARCHAR(100),
    FOREIGN KEY(task_id) REFERENCES task(id) 
);`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Table `todo` Created');
    }
});
