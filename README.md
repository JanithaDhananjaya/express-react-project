Express-React Project

Setup Instructions

1. Clone the Project

git clone <repository_url>
cd express-react-project

2. Configure Environment Variables

Navigate to the server directory and create a .env file with the following configuration:

PORT=5000
DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=sample_db
DB_PORT=32768

3. Install Dependencies

Run the following commands inside both server and client directories:

cd server
npm install
cd ../client
npm install

4. Run the Application

Start the server:

cd server
npm run dev

Start the client:

cd client
npm start

5. Access the Application

The server will run on: http://localhost:5000

The client will run on: http://localhost:3000

Notes

Ensure that you have Node.js and npm installed.

The .env file is required for the server to connect to the database.

The server runs using nodemon for auto-restarts during development.

Happy Coding! 🚀

