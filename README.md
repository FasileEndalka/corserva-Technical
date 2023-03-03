# Corserva Technical Test

## Description

This is a web application that consists of a client and a server. The client is built with React and runs on port 3000 while the server runs on port 4000. The server uses a PostgreSQL database and sequelize, and the user needs to set environment variables before running the application.

## Prerequisites

Before running the application, you need to set the following environment variables in the .env file:

`  DB_NAME=yourDBName
    DB_USER=yourUserName
    DB_PASSWORD=yourPassword
    DB_HOST=localhost
    DB_PORT=5432
 `

## Getting Started

To run both the client and the server, navigate to the root folder and client/ folder of the project and run the following command:

`npm start`

## Docker setup for client-server application

This repository also contains the Docker setup for a client-server application with a React client and a Node.js server. The client runs on port 3000 and the server runs on port 4000.

To use this Docker setup, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the root directory of the cloned repository.
3. open `docker-compose.yml` file and configure
   - DB_NAME=yourDBName
   - DB_USERNAME=yourUserName
   - DB_PASSWORD= yourPassword
   - DB_HOST=db
   - DB_PORT=5432`
4. Run the following command to start the application:
   `docker-compose up`

5. Open a web browser and navigate to http://localhost:3000 to access the client application. You should see a welcome page for the React client.

## Postman Collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://github.com/FasileEndalka/corserva-Technical/blob/main/postman.json#?env%5Bmy-environment%5D=W10=)
