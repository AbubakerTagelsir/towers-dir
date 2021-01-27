# Towers Directory

## REST APIs with nodejs, express, sequelize, postreSql


## Notes on installation
- clone the git module

- setup the database [server](https://www.postgresql.org/docs/9.3/tutorial-install.html)

- set enviroment variables to connect your DB server *DB_PORT,DB_HOST,DB_USERNAME,DB_PASSWORD*

- install the project dependencies

$ cd project/folder
$ npm install

- migrate the database and if you need demo data run the seeds *scripts for migrations and seeding are provided in the package.json*

$ npm run db:create

$ npm run db:migrate

$ npm run db:seeds

*OR you can install sequelize-cli and use it for more advanced commands*

- run *$ npm start* script to run the server
