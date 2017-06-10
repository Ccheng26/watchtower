DROP TABLE IF EXISTS date_group CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS tweet_bucket CASCADE;

CREATE TABLE date_group(
  id SERIAL PRIMARY KEY,
  day VARCHAR (10) NOT NULL,
  hour VARCHAR (8) NOT NULL
);

CREATE TABLE groups(
  id SERIAL PRIMARY KEY,
  group_name VARCHAR (20) NOT NULL
);

CREATE TABLE tweet_bucket(
  id SERIAL PRIMARY KEY,
  score INTEGER NOT NULL,
  tweet_frequency INTEGER NOT NULL,
  group_reference INTEGER REFERENCES groups(id),
  tweet_interval INTEGER REFERENCES date_group(id)
);
