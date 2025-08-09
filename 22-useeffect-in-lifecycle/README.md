✅ React Lifecycle with useEffect Hook
This React project demonstrates how to simulate component lifecycle methods—Mounting, Updating, and Unmounting—using the useEffect hook in a functional component.

🚀 Live Preview
To run the app locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-useeffect-lifecycle.git
cd react-useeffect-lifecycle
npm install
npm run dev
🧠 About the Project
This app simulates the behavior of class-based lifecycle methods using the useEffect hook:

🟢 componentDidMount

🔄 componentDidUpdate

🔴 componentWillUnmount

🛠 Tech Stack
⚛️ React (Vite)

🧠 useEffect Hook

📦 Props & State

💅 Basic Inline Styling (optional)

🧩 Functional Components

📂 Folder Structure
arduino
Copy code
react-useeffect-lifecycle/
├── src/
│   ├── App.jsx         // Main component managing state and visibility
│   ├── Counter.jsx     // Simulates lifecycle with useEffect
│   ├── App.css         // Styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Simulates component lifecycle phases
✅ Tracks mount, update, and unmount stages via console logs
✅ Toggle component to test unmounting behavior
✅ Separate useEffect hooks for clarity

💡 How It Works
In App.jsx
count, data, and display are state variables.

The Counter component is conditionally rendered with display.

Three buttons let you update state or toggle visibility.

In Counter.jsx
js
Copy code
useEffect(() => {
  console.log("mounting phase only");
}, []);
➡️ Runs once when the component is mounted.

js
Copy code
useEffect(() => {
  console.log("update phase only");
}, [count]);
➡️ Runs every time count changes, simulating componentDidUpdate.

js
Copy code
useEffect(() => {
  return () => {
    console.log("unmount phase only");
  };
}, []);
➡️ Runs when the component unmounts, simulating componentWillUnmount.

🧑‍💻 Author
Built with 💚 by @hitaishi18-coder