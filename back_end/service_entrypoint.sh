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
# insert into rol values (1, 'ADMIN');
# insert into usuario values ('305430692', 'Gabriel', 'Sanchez', 'Olveira', 'gso2090@gmail.com', '6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090', 1);

sleep 10
flask --app index.py db migrate
flask --app index.py db upgrade 
python index.py

tail -f /dev/null
