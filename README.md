# Real-Time-Chatapp

## Description
A real-time chat web app built using Socket.IO, where users can log in, add friends and communicate with them in real time.

## Packages
- client - react.js frontend
- server - node.js backend

## How it works
* Front-End: React.js
* Back-End: Node.js / Express.js / Socket.io
* Authenticaion: JWT
* Database: PostgreSQL and Redis

## Installation
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
