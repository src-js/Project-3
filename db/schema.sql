DROP TABLE IF EXISTS visited;

CREATE TABLE visited (
  visit_id SERIAL PRIMARY KEY NOT NULL,
  address VARCHAR NOT NULL,
  borough VARCHAR NOT NULL,
  category VARCHAR,
  subcategoryname VARCHAR
);
