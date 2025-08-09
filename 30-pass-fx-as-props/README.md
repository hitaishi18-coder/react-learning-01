🔄 Calling Parent Component Functions from Child Components in React
🚀 How to Run
bash
Copy code
git clone https://github.com/hitaishi18-coder/call-parent-from-child-demo.git
cd call-parent-from-child-demo
npm install
npm run dev
🧠 About the Project
This project demonstrates how child components can trigger functions defined in a parent component by passing functions as props.

The parent defines functions like displayName and getUser.

The child component (User) receives these functions as props and calls them on button clicks.

This pattern is essential for communication from child → parent in React.

🛠 Tech Stack
⚛️ React (Vite)

🎨 CSS (App.css)

🖥 JavaScript (ES6+)

📂 Folder Structure
plaintext
Copy code
call-parent-from-child-demo/
├── src/
│   ├── App.jsx      # Parent component with functions and multiple User components
│   ├── User.jsx     # Child component receiving and calling props
│   ├── App.css      # Styles
│   └── main.jsx     # Entry point
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Pass functions as props from parent to child
✅ Call parent functions from child events
✅ Reusable child components with different data
✅ Demonstrates child → parent communication pattern

💡 How It Works
Parent Component (App.jsx)
javascript
Copy code
const displayName = (name) => {
  alert(name);
};

const getUser = () => {
  alert("get user called");
};

<User displayName={displayName} name="hitaishi" getuser={getUser} />
Child Component (User.jsx)
javascript
Copy code
<button onClick={() => displayName(name)}>display name</button>
<button onClick={() => getuser()}>get user</button>
⚠ Note
This pattern works by passing function references (not execution) via props.

Avoid calling functions directly in JSX props (onClick={functionName} instead of onClick={functionName()}) unless you specifically want them to run immediately.

🧑‍💻 Author
Built with ❤️ by @hitaishi18-coder