# MERN Blog Platform - Frontend

Frontend application for a full-stack blog platform built using React and Vite. The application provides a modern user interface for creating, browsing, and reading blog posts while communicating with a Node.js and MongoDB backend through REST APIs.

The project demonstrates frontend architecture, API integration, client-side routing, state management, and responsive web design principles using modern JavaScript frameworks.

* * *

## 🚀 Features

-   Create and publish blog posts
    
-   Browse all available blog articles
    
-   View detailed blog content
    
-   Responsive user interface
    
-   Client-side routing with React Router
    
-   Backend API integration using Axios
    
-   Environment-based API configuration
    
-   Clean and modular component structure
    

* * *

## 📸 User Workflow

1.  Create a new blog post
    
2.  Submit content through the frontend interface
    
3.  Store data through the backend API
    
4.  Retrieve and display blog posts
    
5.  View detailed blog information on dedicated pages
    

* * *

## 🏗 Architecture

    User Interface (React + Vite)
                │
                ▼
           Axios API Calls
                │
                ▼
         Express Backend API
                │
                ▼
           MongoDB Database
    

* * *

## 📂 Project Structure

    client/
    │
    ├── public/
    │
    ├── src/
    │   ├── components/
    │   │   ├── BlogForm.jsx
    │   │   ├── BlogList.jsx
    │   │   └── BlogDetails.jsx
    │   │
    │   ├── pages/
    │   │   ├── AddBlog.jsx
    │   │   └── Home.jsx
    │   │
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── .env
    ├── package.json
    └── vite.config.js
    

* * *

## 🛠 Technology Stack

| Technology | Purpose |
| --- | --- |
| React.js | Frontend Framework |
| Vite | Development & Build Tool |
| Axios | API Communication |
| React Router DOM | Client-Side Routing |
| CSS3 | Styling |
| JavaScript (ES6+) | Application Logic |

* * *

## ⚙️ Installation

### Clone Repository

    git clone https://github.com/your-username/mern-blog-app.git
    cd mern-blog-app/client
    

### Install Dependencies

    npm install
    

### Configure Environment Variables

Create a `.env` file:

    VITE_API_BASE_URL=https://mern-blog-app-backend-kog2.onrender.com
    

### Run Development Server

    npm run dev
    

Application will be available at:

    http://localhost:5173
    

* * *

## 🌐 Deployment

The frontend can be deployed using:

-   Vercel
    
-   Netlify
    
-   GitHub Pages
    
-   Firebase Hosting
    

Ensure the `VITE_API_BASE_URL` variable points to the deployed backend service.

* * *

## 🎯 Learning Outcomes

This project helped strengthen my understanding of:

-   React Component Architecture
    
-   REST API Integration
    
-   Frontend and Backend Communication
    
-   Client-Side Routing
    
-   Responsive Web Design
    
-   Modern JavaScript Development
    
-   Full-Stack Application Development
    

* * *

## 🔮 Future Enhancements

-   User Authentication
    
-   Rich Text Blog Editor
    
-   Image Upload Support
    
-   User Profiles
    
-   Blog Categories & Tags
    
-   Search Functionality
    
-   Dark Mode Support
    
-   Comment System
    

* * *

## 👨‍💻 Author

**Ahammed Salahuddeen N Y**

Electronics and Communication Engineering Graduate

Interests: Embedded Systems • Signal Processing • Full-Stack Development • Wireless Communications

* * *

## 📄 License

This project is available for educational and portfolio purposes.
