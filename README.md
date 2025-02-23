# Express-React Project

This project consists of an Express.js backend and a React frontend.

## Setup Instructions

### 1. Clone the Repository
```sh
git clone <repository_url>
cd express-react-project
```

### 2. Configure Environment Variables
Create a .env file inside the server directory with the following contents:

```sh
PORT=5000
DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=sample_db
DB_PORT=32768
```

### 3. Install Dependencies
Navigate to each directory (server and client) and install dependencies:

```sh
cd server
npm install

cd ../client
npm install
```

### 4. Running the Application
- Start the backend server:
```sh
npm run dev
```

- Start the frontend:
```sh
npm start
```

### 5. API Endpoints
Get Users

```sh
GET /users
```

Fetches all users from the database.

Create User
```sh
POST /users
```

Request Body:
```sh
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "city": "New York"
}
```

Folder Structure
```sh
express-react-project/
│── client/      # React Frontend
│── server/      # Express Backend
│── README.md    # Project Documentation
```

Technologies Used
- Node.js
- Express.js
- MySQL
- React.js
- Tailwind CSS

## 🎯 Notes
Ensure MySQL is running before starting the backend.
Update .env variables based on your local setup. </br>
#### Happy Coding! 🚀




