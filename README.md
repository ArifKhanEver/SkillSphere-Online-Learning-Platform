# 🎓 SkillSphere – Online Learning Platform

SkillSphere is a modern online learning platform where users can explore diverse courses, watch professional lessons, and enroll in skill-based programs. From Web Development to Digital Marketing, SkillSphere provides a seamless and responsive experience for learners worldwide.

## 🚀 Live URL
**Live Site:** https://skillsphere-online-learning-platform.vercel.app

## 📖 Project Purpose
The goal of SkillSphere is to bridge the gap between industry experts and students. It offers a structured way to browse courses, view detailed curriculum, and manage user profiles, all within a secure and high-performance environment.

## ✨ Key Features
- **Dynamic Course Exploration:** Browse a collection of 10+ professional courses with filtering and search functionality.
- **Secure Authentication:** Integrated **BetterAuth** for Email/Password and Google Social Login.
- **Protected Routes:** Course details and profile sections are only accessible to registered users.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop screens using Tailwind CSS.
- **User Profile Management:** Users can view and update their profile information (Name & Image).
- **Interactive UI:** Smooth animations and toast notifications for a better user experience.
- **Modern Tech Stack:** Built with Next.js App Router for optimized performance and SEO.

## 🛠️ Tech Stack & Packages
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, DaisyUI / HeroUI
- **Authentication:** BetterAuth
- **Icons:** React Icons
- **Notifications:** React Toastify
- **Animations:** Swiper.js / Framer Motion
- **Data Fetching:** Native Fetch API

## 💻 Prerequisites
Before running the project locally, ensure you have:
- Node.js (Latest LTS)
- npm or yarn

## ⚙️ Installation & Local Setup
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ArifKhanEver/SkillSphere-Online-Learning-Platform](https://github.com/ArifKhanEver/SkillSphere-Online-Learning-Platform)

2. **Navigate to the project directory:**
   ```bash
   cd skillsphere

3. **Install dependencies:**
   ```bash
   npm install

4. **Set up environment variables:**<br>
    **Create a .env.local file in the root and add:**
   ```bash
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    BETTER_AUTH_SECRET=your_secret_key
    GOOGLE_CLIENT_ID=your_google_id
    GOOGLE_CLIENT_SECRET=your_google_secret

5. **Run the development server:**
   ```bash
    npm run dev


**📂 Project Structure**
 ```bash
├── app/               # Next.js App Router (Pages & Routes)
├── components/        # Reusable UI Components
├── public/            # Static assets and data.json
├── lib/               # library files
├── utils/             # Helper functions and Auth config
└── README.md          # Project documentation
```
<br>

**👤 Author** <br>
GitHub: @arifkhanever

LinkedIn: @arifkhanever