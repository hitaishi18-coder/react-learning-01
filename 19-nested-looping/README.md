✅ Nested Looping with .map() in React
This React app demonstrates how to perform nested looping using .map() in JSX — rendering multiple colleges and their respective students using reusable components.

🚀 Live Preview
To run the app locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-nested-looping.git
cd react-nested-looping
npm install
npm run dev
🧠 About the Project
This project includes:

🔁 Nested .map() for rendering complex hierarchical data

🏫 A College component for each college entry

🎓 A Students component nested inside College for displaying student data

💌 Props used to pass data to child components

🛠 Tech Stack
⚛️ React (Vite)

🧠 Functional Components

📦 Props for data communication

💅 Basic Inline CSS Styling

📂 Folder Structure
arduino
Copy code
react-nested-looping/
├── src/
│   ├── App.jsx         // Main app mapping over collegeData
│   ├── College.jsx     // Reusable component to display college info
│   ├── Student.jsx     // Nested component for rendering students
│   ├── App.css         // Styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Nested .map() structure for colleges and their students
✅ Props for sending data down from App → College → Students
✅ Modular structure with separate components
✅ Inline styles for quick UI rendering

💡 How It Works
collegeData is an array of colleges, each with a student array.

App.jsx loops through collegeData and renders a College component.

Inside College.jsx, props are used to access and display college info.

The Students.jsx component is nested inside College and receives the student array via props.

Students.jsx then maps through the student list and renders their info.

🧑‍💻 Author
Built with 💚 by @hitaishi18-coder

