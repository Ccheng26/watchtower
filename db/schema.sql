DROP TABLE IF EXISTS date_group CASCADE;
DROP TABLE IF EXISTS protected_class CASCADE;
DROP TABLE IF EXISTS tweet_collection CASCADE;

CREATE TABLE date_group(
  id SERIAL PRIMARY KEY,
  day VARCHAR (10) NOT NULL,
  hour VARCHAR (8) NOT NULL
);

CREATE TABLE protected_class(
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  group_name VARCHAR (50) NOT NULL
);

CREATE TABLE tweet_collection(
  id SERIAL PRIMARY KEY,
  score INTEGER NOT NULL,
  tweet_frequency INTEGER NOT NULL,
  group_reference INTEGER REFERENCES protected_class(id),
  tweet_interval INTEGER REFERENCES date_group(id)
);
