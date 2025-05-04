# 📊 DataTable — Next.js + JSON Server + TanStack Table

This is a full-stack data table project built with **Next.js 15**, **TanStack Table v8**, **TailwindCSS 4**, **ShadCN UI components**, and a **mock backend powered by JSON Server**.

It demonstrates **CRUD operations**, **server-side pagination**, **sorting**, **searching** — designed for managing posts on various social media platforms.

---

## 🚀 Features

✅ List of social media posts  
✅ Create a new post  
✅ Update existing posts  
✅ Delete posts  
✅ Server-side pagination  
✅ Server-side sorting  
✅ Global search functionality  
✅ Responsive & accessible frontend  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, TanStack Table 8, Tailwind CSS 4, ShadCN UI, Lucide React
- **Backend:** JSON Server (for mock API)
- **Utilities:** Radix UI, clsx, tailwind-merge, sonner for notifications

---

## 📦 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vishal1406/DataTable.git
cd DataTable
```

### 2️⃣ Set Up Backend

Navigate to the backend folder and start the mock API server:

```bash
cd backend
npm install json-server
npx json-server --watch db.json --port 3001
```

### 3️⃣ Set Up Frontend

Navigate to the frontend folder, install dependencies, and run the frontend application:

```bash
cd frontend
npm install
npm run dev
```

This will start the application on http://localhost:3000.

## 📸 Screenshots

Here’s a preview of the application in action:
<img width="1470" alt="1  Listing Of Post" src="https://github.com/user-attachments/assets/8a35fb3f-bae1-46e7-9c95-7de5ed1e2fc9" />

<img width="1470" alt="2  Create Post" src="https://github.com/user-attachments/assets/cdb60670-31fb-4812-9a3a-9e85d297b314" />

<img width="1470" alt="3  Update Post" src="https://github.com/user-attachments/assets/10c1ffd3-4cc4-4f9f-9339-887f0a96bddf" />

<img width="1470" alt="4  Delete Post" src="https://github.com/user-attachments/assets/e4f99281-6874-4587-a04b-13436ed176c2" />


📝 Notes
Make sure the backend is running before starting the frontend.

You can modify the db.json file in the backend folder to change the mock data.

This setup is for development purposes. You can replace the mock API with a real one as needed.
