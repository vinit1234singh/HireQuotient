# HireQuotient Assesment

## Overview

This project is a backend for a real-time chat application built using the MERN stack. It features user authentication, real-time messaging, message storage, user status management, and integration with a language model API.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/vinit1234singh/HireQuotient-chatApp.git
   cd <git clone directory>
   ```
2. Install dependencies:
   ```bash
   npm install express mongoose dotenv bcryptjs jsonwebtoken socket.io cors axios
   npm install --save-dev nodemon
   ```
3. Set up environment variables:

   Update the .env file in the root directory and add the following:
  
  ```bash
   MONGO_URI=<your_mongo_uri>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Run the server:
   ```bash
   node app.js
   ```
## Routes

   ### POST /api/auth/register

   Request: { "email": "example@example.com", "password": "password123" }
   Response: { "token": "<jwt_token>" }
   
   ### POST /api/auth/login
   Request: { "email": "example@example.com", "password": "password123" }
   Response: { "token": "<jwt_token>" }

## Chat Routes

   ### POST /api/chat/send

   Request: { "recipient": "<recipient_id>", "message": "Hello!" }
   Response: { "message": "<message_object>" }

   ### GET /api/chat/messages/:userId
   Request: Bearer <jwt_token>
   Response: [ { "message": "<message_object>" }, ... ]

## Status Routes

   ### POST /api/status
   Request: { "status": "AVAILABLE" | "BUSY" }
   Response: { "user": "<user_object>" }

   


