# 📝 MERN Blog App – Frontend

This is the frontend of the MERN (MongoDB, Express, React, Node.js) Blog Application. It allows users to create and view blog posts in a clean and professional interface.


---

## 📂 Project Structure

```
client/
│
├── public/
├── src/
│   ├── components/
│   │   ├── BlogForm.jsx
│   │   ├── BlogList.jsx
│   │   └── BlogDetails.jsx
│   ├── pages/
│   │   ├── AddBlog.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
└── vite.config.js
```

---

## 🧪 Features

- ✅ Add a new blog post with title, content, and author  
- ✅ View a list of all blog posts  
- ✅ View detailed content of a blog by clicking on its title  
- ✅ Responsive and clean layout with base CSS (no Tailwind)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-blog-app.git
cd mern-blog-app/client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `client/` folder:

```ini
VITE_API_BASE_URL=https://mern-blog-app-backend-kog2.onrender.com
```

### 4. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app locally.

---

## 🛠 Built With

- [React (Vite)](https://vitejs.dev/)
- [Axios](https://axios-http.com/) for API requests
- [React Router DOM](https://reactrouter.com/) for routing
- CSS for styling

---

## 🌐 Deployment

You can deploy the frontend on:

- GitHub Pages  
- Netlify  
- Vercel  

Make sure the environment variable `VITE_API_BASE_URL` points to your hosted backend.

---

## 🧑‍💻 Author

**Ahammed Salahuddeen N Y**  
[GitHub](https://github.com/technoas123) | [LinkedIn](https://www.linkedin.com/in/ahammed-salahuddeen-4128bb229/)

---

## 📄 License

This project is licensed under the MIT License.  
Feel free to use, modify, and share.

---

> Let me know if you'd like a separate README for the backend or a combined full-stack one!
