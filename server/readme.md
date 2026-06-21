# MERN Blog Platform - Backend

Backend service for a full-stack blog platform built using Node.js, Express.js, and MongoDB. This RESTful API handles blog post management, database operations, and communication with the React frontend.

The application demonstrates full-stack web development concepts including API design, database integration, CRUD operations, and deployment of modern web applications.

* * *

## 🚀 Live API

Backend Deployment:

[https://mern-blog-app-backend-kog2.onrender.com](https://mern-blog-app-backend-kog2.onrender.com)

* * *

## ✨ Features

-   Create new blog posts
    
-   Retrieve all published posts
    
-   Update existing blog content
    
-   Delete blog entries
    
-   MongoDB database integration using Mongoose
    
-   RESTful API architecture
    
-   Environment-based configuration
    
-   Cross-Origin Resource Sharing (CORS) support
    
-   Cloud deployment support
    

* * *

## 🏗️ Architecture

    React Frontend
           │
           ▼
    Express REST API
           │
           ▼
    Mongoose ODM
           │
           ▼
    MongoDB Database
    

* * *

## 📂 Project Structure

    server/
    │
    ├── models/
    │   └── Blog.js
    │
    ├── routes/
    │   └── blogs.js
    │
    ├── .env
    ├── index.js
    ├── package.json
    └── README.md
    

* * *

## 🛠️ Technology Stack

| Technology | Purpose |
| --- | --- |
| Node.js | Backend Runtime |
| Express.js | API Framework |
| MongoDB | Database |
| Mongoose | Database Modeling |
| dotenv | Environment Configuration |
| CORS | Cross-Origin Communication |

* * *

## ⚙️ Installation

### Clone Repository

    git clone https://github.com/technoas123/MERN_blog_app_assignment.git
    cd MERN_blog_app_assignment/server
    

### Install Dependencies

    npm install
    

### Configure Environment Variables

Create a `.env` file:

    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    

### Run Development Server

    node index.js
    

The API will be available at:

    http://localhost:5000
    

* * *

## 📌 API Capabilities

### Blog Management

-   Create Blog Posts
    
-   View Blog Posts
    
-   Edit Blog Posts
    
-   Delete Blog Posts
    

Example Blog Object:

    {
      "title": "Getting Started with MERN",
      "content": "This is a sample blog post.",
      "author": "Ahammed Sala"
    }
    

* * *

## 🌐 Deployment

The backend can be deployed to:

-   Render
    
-   Railway
    
-   Heroku
    
-   DigitalOcean
    
-   AWS EC2
    

When deploying, ensure all required environment variables are configured securely.

* * *

## 🎯 Learning Outcomes

Through this project, I gained hands-on experience in:

-   REST API Development
    
-   Backend Architecture Design
    
-   MongoDB Database Management
    
-   Mongoose Data Modeling
    
-   Full-Stack Application Integration
    
-   Cloud Deployment Workflows
    

* * *

## 🔮 Future Enhancements

-   JWT Authentication
    
-   User Roles and Authorization
    
-   Image Upload Support
    
-   Rich Text Editor Integration
    
-   Comment System
    
-   Search and Filtering
    
-   API Documentation with Swagger
    

* * *

## 👨‍💻 Author

**Ahammed Salahuddeen N Y**

Electronics and Communication Engineering Graduate

Interests: Embedded Systems • Signal Processing • Full-Stack Development • Wireless Communications

* * *

## 📄 License

This project is available for educational and portfolio purposes.
