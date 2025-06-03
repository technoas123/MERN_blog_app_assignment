🖥️ MERN Blog App -- Backend

This is the backend of the MERN (MongoDB, Express, React, Node.js) Blog Application. It serves as the RESTful API for handling blog post data and communicates with a MongoDB database.

🚀 Live API

Backend API: https://mern-blog-app-backend-kog2.onrender.com

📁 Project Structure

server/

├── models/

│ └── Blog.js

├── routes/

│ └── blogs.js

├── .env

├── index.js

├── package.json

└── README.md

⚙️ Features

✅ Create a new blog post (title, content, author)

📄 Retrieve all blog posts

💾 Connects to MongoDB using Mongoose

🔐 Environment-based configuration

🔁 CORS enabled for cross-origin requests

🔧 Getting Started

1\. Clone the Repository

git clone https://github.com/your-username/mern-blog-app.git

cd mern-blog-app/server

2\. Install Dependencies

bash

Copy code

npm install

3\. Set Up Environment Variables

Create a .env file in the server/ folder:

env

Copy code

MONGO_URI=your_mongodb_connection_string

PORT=5000

4\. Run the Server

bash

Copy code

node index.js

The server should now be running on http://localhost:5000.

🛠 Built With

Node.js -- JavaScript runtime

Express.js -- Web framework for Node.js

MongoDB -- NoSQL database

Mongoose -- ODM for MongoDB

dotenv -- Manage environment variables

🌐 Deployment

You can deploy the backend to:

Render

Heroku

Railway

VPS (like DigitalOcean)

Make sure to update the environment variables when deploying.

👤 Author

Ahammed Salahuddeen N Y

GitHub | LinkedIn

📄 License

This project is licensed under the MIT License. Feel free to use and modify as needed.

yaml

Copy code
