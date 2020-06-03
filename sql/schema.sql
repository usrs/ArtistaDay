DROP DATABASE IF EXISTS artistaday_db;

CREATE DATABASE artistaday_db;

USE artistaday_db;

CREATE TABLE artists (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
bio VARCHAR(30) NOT NULL,
artistPhoto VARCHAR(30)
);

CREATE TABLE events(
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 startDate DATETIME NOT NULL,
 endDate DATETIME NOT NULL,
 title VARCHAR(30) NOT NULL,
 artistId INTEGER(10) NOT NULL,
 discount INTEGER(10) NOT NULL,
 FOREIGN KEY (artistId) REFERENCES artists(id)
);

CREATE TABLE items(
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 name VARCHAR(30) NOT NULL,
 category VARCHAR(30) NOT NULL,
 price DECIMAL(10, 2) NOT NULL,
 artistId INTEGER(10) NOT NULL,
 eventId INTEGER(10),
 FOREIGN KEY (eventId) REFERENCES events(id)
);

CREATE TABLE usercart(
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 item VARCHAR(30) NOT NULL,
 price DECIMAL(10, 2) NOT NULL,
 discount INTEGER(10) NOT NULL,
 eventId INTEGER(10),
 FOREIGN KEY (eventId) REFERENCES events(id)
);

INSERT INTO artists (name)
VALUES ('Annie Leibovitz'), ('Henri Matisse'), ('Sebastian Delgado');

INSERT INTO items (name)
VALUES('Queen Elizabeth II Buckingham Palace London 2007');
