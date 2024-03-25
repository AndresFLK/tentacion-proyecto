#!/bin/bash


# CREATE 'DB' on container - create user "cool-app", grant login, create cool_db, grant privileges to cool-app

# CREATE DATABASE db;
# CREATE USER "cool-app";
# ALTER ROLE "cool-app" WITH LOGIN;
# GRANT ALL PRIVILEGES ON DATABASE db TO "cool-app";
# GRANT CONNECT ON DATABASE db TO "cool-app";
# CREATE DATABASE "cool_db";
# GRANT ALL PRIVILEGES ON DATABASE cool_db TO "cool-app";
# GRANT CONNECT ON DATABASE cool_db TO "cool-app";
# GRANT USAGE, CREATE ON SCHEMA public TO "cool-app";

sleep 10
flask --app index.py db migrate
flask --app index.py db upgrade 
python index.py

tail -f /dev/null
