✅ Mapping Over Arrays in JSX
This React app demonstrates how to loop through an array of user data using the .map() function and render it dynamically in a table.

🚀 Live Preview
To run this project locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-jsx-map.git
cd react-jsx-map
npm install
npm run dev
🧠 About the Project
This app includes:

📦 A sample user data array

🔁 .map() to render each user in a <table>

🧾 JSX with proper keys for each item

🧼 Clean tabular display of data

🛠 Tech Stack
⚛️ React (Vite)

🧠 React Functional Components

💅 Plain CSS

📂 Folder Structure
arduino
Copy code
react-jsx-map/
├── public/
├── src/
│   ├── App.jsx       // Contains map logic and rendering
│   ├── App.css       // Optional table styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Renders a list of users with:

Name

Age

Email

ID

✅ Uses map() for looping

✅ Adds key prop for each row

🧪 How It Works
Data is stored in a constant array userData.

Each object is rendered using .map() in JSX.

A <table> element structures the output.

👩‍💻 Author
Made with ❤️ by @hitaishi18-coder