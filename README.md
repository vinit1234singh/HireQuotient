# Real-Time Chat Application Backend

## Overview

This project is a backend for a real-time chat application built using the MERN stack. It features user authentication, real-time messaging, message storage, user status management, and integration with a language model API.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/vinit1234singh/HireQuotient.git
   cd <git clone directory>
   ```
2. Install dependencies:
   ```bash
   npm install express mongoose dotenv bcryptjs jsonwebtoken socket.io cors axios
   npm install --save-dev nodemon
   ```
3.Set up environment variables:
  Update the .env file in the root directory and add the following:
  ```bash
   MONGO_URI=<your_mongo_uri>
   JWT_SECRET=<your_jwt_secret>
   ```


