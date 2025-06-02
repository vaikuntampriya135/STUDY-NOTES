# STUDY-NOTES
# 📚 StudyNotes

**StudyNotes** is a smart, collaborative, and user-friendly web platform designed to simplify academic content sharing among college students. Whether you're preparing for exams, catching up on missed lectures, or looking for organized study materials, StudyNotes provides a centralized hub where learners can find, upload, and share notes with ease.

In today’s fast-paced academic environment, students often struggle to organize handwritten or digital notes and share them with peers. StudyNotes bridges this gap by offering a modern digital solution that empowers students with anytime, anywhere access to valuable study resources. From handwritten PDFs and lecture notes to typed summaries and reference documents, everything is categorized and accessible through a clean and responsive interface.

This project is ideal for:
- Students who want to build and access a note repository semester-wise.
- Classmates working together on group studies.
- Educational institutions aiming to promote collaborative learning.

With StudyNotes, your notes are no longer lost in chats or scattered across devices — they’re organized, searchable, and shareable.

🌐 **Live Demo**: [https://shiny-cranachan-1db4bd.netlify.app](https://shiny-cranachan-1db4bd.netlify.app)

## 📝 Features

- **User Authentication**: Secure login and registration system.
- **Upload Notes**: Users can upload notes in various formats.
- **Browse & Search**: Easily find notes by subject, course, or keywords.
- **Download Materials**: Access and download notes for offline study.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

- ## 🖼️ Screenshots

> 📌 Save your images in a folder like `assets/` and update the paths below.

### 🔐 Login Page

![Login Page](./assets/login.png)

### 🏠 Home / Dashboard

![Dashboard](./assets/dashboard.png)

### 📂 Upload Notes

![Upload Notes](./assets/upload.png)

### 🔎 Search Notes

![Search Notes](./assets/search.png)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Netlify (Frontend), Heroku (Backend)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB instance

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/studynotes.git
   cd studynotes

   Environment Variables
Create a .env file:
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
Run the app
bash

npm start
Access it at http://localhost:3000
