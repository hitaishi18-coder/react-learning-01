✅ Using useEffect Hook in React
This React app demonstrates how to use the useEffect hook to control side effects like function calls based on state changes (such as a counter).

🚀 Live Preview
To run the app locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-useeffect-counter.git
cd react-useeffect-counter
npm install
npm run dev
🧠 About the Project
This project includes:

⚙️ Demonstrating how useEffect works with dependencies

🎯 A simple counter that triggers useEffect on update

🧪 Console logs to observe hook behavior

🛠 Tech Stack
⚛️ React (Vite)

🎯 useEffect Hook

🧠 Functional Components

🖱️ useState for interactive counter

📂 Folder Structure
arduino
Copy code
react-useeffect-counter/
├── src/
│   ├── App.jsx         // Main logic for useEffect and counter
│   ├── App.css         // Basic styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Demonstrates use of useEffect with dependency array
✅ Logs output to console when counter updates
✅ Reusable function called only when specific changes happen
✅ Minimal and focused for educational purposes

💡 How It Works
useState sets up a counter state.

On button click, counter is incremented using setCounter.

useEffect watches counter as a dependency.

Every time counter changes, it triggers callOnce and counterFunction.

Console shows function executions based on the state update.

If you remove [counter] from useEffect, it will run only once on mount.

🧑‍💻 Author
Built with 🧠 by @hitaishi18-coder