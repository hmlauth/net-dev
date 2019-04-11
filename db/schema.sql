DROP DATABASE IF EXISTS potluck_db;
CREATE DATABASE potluck_db;
USE potluck_db;
CREATE TABLE attendees (
    id int NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    item VARCHAR(20),
    PRIMARY KEY (id)
)
