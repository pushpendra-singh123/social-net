# 🌐 SocialNet

SocialNet is a modern, full-stack social media application that allows users to interact with each other through posts, likes, comments, and follows.
Built using the MERN stack and enhanced with real-time and responsive features, SocialNet delivers a smooth and engaging user experience.
---

## 🚀 Features

- ⚛️ **Tech Stack:** React.js, MongoDB, Node.js, Express.js, Tailwind CSS
- 🔐 **Authentication:** Secure user authentication using JSON Web Tokens (JWT)
- 🔄 **React Query:** Efficient data fetching, caching, and synchronization
- 👥 **Suggested Users:** Discover people to follow
- ✍️ **Create Posts:** Share your thoughts with the world
- 🗑️ **Delete Posts:** Remove posts you no longer want (only if you are the owner)
- 💬 **Comment:** Engage in discussions with comments on posts
- ❤️ **Like Posts:** Show appreciation by liking posts
- 📝 **Edit Profile:** Update your personal info
- 🖼️ **Edit Images:** Customize your profile and cover photos
- 📷 **Image Uploads:** Upload and store images via **Cloudinary**
- 🔔 **Notifications:** Get real-time alerts for interactions
- 🌐 **Deployment Ready:** Fully optimized for production environments
- ⏳ **And Much More!**
- 
---

## 🧰 Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Query
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT-based Authentication
- **Image Hosting:** Cloudinary
- **State Management:** React Context API / React Query
- **Deployment:** *(Add platforms like Vercel, Netlify, Render, or Railway if applicable)*

---

## 📁 Project Structure
##  TwitterClone/
├── backend/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── post.controller.js
│   │   └── user.controller.js
│   ├── db/
│   │   └── connectMongoDB.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── post.route.js
│   │   └── user.route.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Posts.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   ├── skeletons/
│   │   │   │   └── ProfileHeaderSkeleton.jsx
│   │   │   └── svgs/
│   │   │       └── X.jsx
│   │   ├── hooks/
│   │   │   ├── useFollow.jsx
│   │   │   └── useUpdateUserProfile.jsx
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── LoginPage.jsx
│   │   │   │   └── signup/
│   │   │   │       └── SignUpPage.jsx
│   │   │   ├── notification/
│   │   │   │   └── NotificationPage.jsx
│   │   │   └── profile/
│   │   │       └── ProfilePage.jsx
│   │   ├── utils/
│   │   │   ├── date.js
│   │   │   └── db/
│   │   │       └── dummy.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── .env
├── package.json
└── README.md


# By P.S.R. Group(Mini Project)
