# BeyondMD-Tasks
## Task 1:
Make a simple page using HTML, CSS, and/or javascript that displays “Hello BeyondMD!“, and then dockerize it. It must run using docker-compose.

### Details
Simply displays Hello World

### To Run
#### `cd Task 1`
#### `docker-compose up`

## Task 2:
Make a simple page using React that says “Hello BeyondMD!”, displays your resume pdf, and displays data from a free API using MUI.

### Details
Uses COVID-19 Statistics Data from RapidAPI
Includes my resume pdf
Utilizes Material UI in React

### To Run
#### `cd Task 2`
#### `docker-compose up`

## Task 3:
Make a basic CRUD Django-Postgres App that uses data from a free API in some way. 

### Details
Make REST API requests to Create, Read, Update, or Delete tutorials table in PostgreSQL database. Each tutorial has
* ID
* Title
* Description
* Published status


### To Run
#### `cd Task 3`
#### `docker-compose up -d --build`
Starts up two containers in detached mode
(1) Django backend server
(2) Postgres db
