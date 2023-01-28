# Real-Time-Chatapp

## Description: 
A web application for real-time chat communication built with React and Socket.IO, which allows users to sign up, add friends, and talk with them in real-time.

- client - React.js Chakra UI as frontend
- server - Node.js-Express as backend

## Technologies used:
* Front-End: React.js and Chakra UI
* Back-End: Node.js / Express.js / Socket.io
* Authenticaion: JWT
* Database: PostgreSQL and Redis

## Installation:
* Clone the repository
* CD into the repository and run ```npm install```
* Make sure redis is installed in your system ```redis-cli``` functions properly
* Create a postgres database and a table called users.
* Create a file named ```.env``` in ```./packages/server``` and make sure it has the following variables defined:
<br/>DATABASE_NAME=
<br/>DATABASE_HOST=
<br/>DATABASE_USER=
<br/>DATABASE_PASSWORD=
<br/>DATABASE_PORT=
<br/>JWT_SECRET=
* Run ```npm start``` for frontend and ```npm run dev``` for backend
