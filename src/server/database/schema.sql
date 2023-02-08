-- Schema for sql table
DROP TABLE IF EXISTS races
DROP TABLE IF EXISTS users

CREATE TABLE IF NOT EXISTS races (
race_id SERIAL PRIMARY KEY,
race_year TEXT,
race_name TEXT,
race_distance TEXT,
swim_distance TEXT,
swim_time TEXT,
swim_seconds INTEGER,
bike_distance TEXT,
bike_time TEXT,
bike_seconds INTEGER,
run_distance TEXT,
run_time TEXT,
run_seconds INTEGER,
user_id INTEGER,
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS users (
user_id INT GENERATED ALWAYS AS IDENTITY,
user_name TEXT,
password TEXT,
PRIMARY KEY(user_id)
)
