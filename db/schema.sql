DROP TABLE IF EXISTS time_group;
CREATE TABLE date_group(
  id SERIAL PRIMARY KEY,
  day VARCHAR (10) NOT NULL,
  hour VARCHAR (8) NOT NULL,
);

DROP TABLE IF EXISTS tweet_bucket;
CREATE TABLE tweets(
  id SERIAL PRIMARY KEY,
  group_reference INTEGER REFERENCES group(id),
  score INTEGER NOT NULL,
  tweet_frequency INTEGER NOT NULL,
  tweet_interval INTEGER REFERENCES date_group(id)
);

DROP TABLE IF EXISTS group;
CREATE TABLE group(
  id SERIAL PRIMARY KEY,
  group_name VARCHAR (20) NOT NULL
);
