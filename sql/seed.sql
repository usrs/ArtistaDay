USE artistaday_db;

INSERT INTO event (startDate, endDate, title, artistId, discount)
VALUES ('2020-12-07 00:00:00','2020-13-07 00:00:00', 'ArtistADay', 1, 40);

INSERT INTO artist (category, item1, item2, item3, item4, item5, itemsPrice, eventId)
VALUES ('Digital Photography', 'Bottomless Hole', 'Mermaids', 'Giant Squid', 'Predator', 'Alien', '100,000', 45);
