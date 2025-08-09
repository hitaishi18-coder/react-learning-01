✅ Handling Props Side Effects with useEffect in React
This React app demonstrates how to manage side effects that occur when props change using the useEffect hook in child components.

🚀 Live Preview
To run the app locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-props-useeffect.git
cd react-props-useeffect
npm install
npm run dev
🧠 About the Project
This project showcases:

🧬 Passing props (count and data) to a child component

🔁 Using useEffect to trigger specific functions when those props change

🔍 Understanding side effects in component lifecycle

🛠 Tech Stack
⚛️ React (Vite)

🎯 useEffect Hook

⚙️ Functional Components

📦 Props for parent-child communication

📂 Folder Structure
arduino
Copy code
react-props-useeffect/
├── src/
│   ├── App.jsx         // Main app managing state
│   ├── Counter.jsx     // Child component reacting to prop changes
│   ├── App.css         // Styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Tracks state changes via buttons
✅ Passes state values as props to child
✅ Child component uses useEffect to run functions when props change
✅ Logs behavior to console for debugging

💡 How It Works
App maintains two pieces of state: count and data.

These values are passed to the Counter component as props.

Inside Counter, there are two useEffect hooks:

One that listens to changes in count and calls handleCounter.

One that listens to changes in data and calls handleData.

Functions are logged to console on each relevant change.

You can also combine dependencies like this:

js
Copy code
useEffect(() => {
  handleData();
}, [data, count]);
🧑‍💻 Author
Built with 💚 by @hitaishi18-coder

