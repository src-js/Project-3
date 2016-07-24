DROP TABLE IF EXISTS visited;

CREATE TABLE visited (
  visit_id SERIAL PRIMARY KEY NOT NULL,
  zipcode INT,
  address VARCHAR,
  borough VARCHAR,
  category VARCHAR,
  subcategoryname VARCHAR
);
