DROP DATABASE IF EXISTS artistaday_db;

CREATE DATABASE artistaday_db;

USE artistaday_db;

CREATE TABLE event {
  startDate DATETIME NOT NULL,
  endDate DATETIME NOT NULL,
  title VARCHAR (30),
  artistId INTEGER(10),
  discount INTEGER(10)
};

CREATE TABLE artist (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  category VARCHAR(30),
  item1 VARCHAR(30),
  item2 VARCHAR(30),
  item3 VARCHAR(30),
  item4 VARCHAR(30),
  itemsPrice INTEGER(10),
  eventId INTEGER(10)
);
