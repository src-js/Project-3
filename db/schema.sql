DROP TABLE IF EXISTS visited;

CREATE TABLE visited (
  visit_id SERIAL PRIMARY KEY NOT NULL,
  address VARCHAR NOT NULL,
  borough VARCHAR NOT NULL,
  category VARCHAR,
  subcategoryname VARCHAR
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  user_id serial unique primary key,
  name VARCHAR(50) unique,
  email VARCHAR(255) unique not null,
  password_digest TEXT not null,
  user_created timestamp not null default now()
);
CREATE INDEX on users (username) ;
CREATE INDEX on users (email) ;
