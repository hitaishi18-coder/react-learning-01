✅ Reusing Components in Loops with React .map()
This React app demonstrates how to loop through data using .map() and reuse a custom User component to display individual user information.

🚀 Live Preview
To run the app locally:

bash
Copy code
git clone https://github.com/your-username/react-user-reuse-loop.git
cd react-user-reuse-loop
npm install
npm run dev
🧠 About the Project
This project includes:

🔁 Reusing React components inside .map() loops

🧩 Passing props to reusable components

💌 Clean UI rendering of dynamic data with props

🛠 Tech Stack
⚛️ React (Vite)

🧠 Functional Components

📦 Props for component communication

💅 Inline CSS styling

📂 Folder Structure
pgsql
Copy code
react-user-reuse-loop/
├── src/
│   ├── App.jsx        // Maps user data & renders <User /> component
│   ├── User.jsx       // Reusable component to display user info
│   ├── App.css        // Optional styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Loops through a hardcoded array of user objects
✅ Passes each user as props to the User component
✅ Clean and reusable structure
✅ Styled user cards with inline CSS

💡 How It Works
A hardcoded array userData stores multiple user objects.

The map() function loops through this array inside App.jsx.

Each object is passed to the <User /> component via props (data={user}).

Inside the User component, props are accessed as data.data.name, data.data.email, etc.

🧑‍💻 Author
Built with 💚 by @hitaishi18-coder

