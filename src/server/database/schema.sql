-- Schema for sql table

CREATE TABLE IF NOT EXISTS races (
id SERIAL PRIMARY KEY,
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
run_seconds INTEGER
)
