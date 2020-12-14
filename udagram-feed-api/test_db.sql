CREATE TABLE "FeedItem" (
  id SERIAL PRIMARY KEY,
  caption TEXT,
  url TEXT,
  createdAt Date,
  updatedAt Date
);

INSERT INTO "FeedItem" ("caption", "url") VALUES 
	('sedan', 'onePhoto.jpg'),
	('here', 'photo.png'),
	('here', 'photo.jpg'),
	('Ne-Yo', 'NeYo.jpg'),
  ('last', 'last.png');