✅ Inline CSS Cards in React
This React app displays multiple profile cards styled using inline CSS and generated dynamically using JavaScript’s map() function.

🚀 Live Preview
To run the app locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-inline-css-cards.git
cd react-inline-css-cards
npm install
npm run dev
🧠 About the Project
This project demonstrates:

🎨 Styling components using inline CSS in React

♻️ Dynamically rendering multiple cards from an array

🖼 Adding images with inline styles for consistent layout

⚛️ Functional React component structure

🛠 Tech Stack
⚛️ React (Vite)

🎯 Functional Components

💅 Inline CSS for styling

🖥 JavaScript (ES6+)

📂 Folder Structure
pgsql
Copy code
react-inline-css-cards/
├── src/
│   ├── App.jsx        // Main component with inline CSS and cards
│   ├── App.css        // Optional global styling
│   └── main.jsx       // React entry point
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Multiple profile cards displayed in a grid layout
✅ Fully styled with inline CSS
✅ Responsive layout using flex and flex-wrap
✅ Easily reusable card component

💡 How It Works
In App.jsx
A cardStyle object stores common card styles.

An array of user objects is created with name, role, and img.

The .map() function loops over the array to generate cards dynamically.

The parent <div> uses flexbox with flex-wrap for responsive layout.

🔍 Example Usage
Cards displayed side-by-side with inline styling for images and text

🧑‍💻 Author
Built with 💚 by @hitaishi18-coder