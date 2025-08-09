📝 Uncontrolled Components in React – With & Without useRef
🚀 How to Run
bash
Copy code
git clone https://github.com/hitaishi18-coder/uncontrolled-components-demo.git
cd uncontrolled-components-demo
npm install
npm run dev
🧠 About the Project
This project demonstrates:

The difference between uncontrolled components implemented using:

Direct DOM access via document.querySelector

React’s useRef hook

How form data can be accessed without binding inputs to state.

Why useRef is a cleaner way to handle uncontrolled inputs in React.

🛠 Tech Stack
⚛️ React (Vite)

🎨 CSS (App.css)

🖥 JavaScript (ES6+)

📂 Folder Structure
plaintext
Copy code
uncontrolled-components-demo/
├── src/
│   ├── App.jsx           # Main component with form examples
│   ├── App.css           # Styles
│   └── main.jsx          # Entry point
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Form 1: Uncontrolled component using document.querySelector
✅ Form 2: Uncontrolled component using useRef
✅ Submit handling without storing values in useState
✅ Side-by-side comparison of both approaches

💡 How It Works
1️⃣ Without useRef
javascript
Copy code
const handleForm = (event) => {
  event.preventDefault();
  const user = document.querySelector("#user").value;
  const pass = document.querySelector("#password").value;
  console.log(user, pass);
};
2️⃣ With useRef
javascript
Copy code
const userRef = useRef();
const passwordRef = useRef();

const handleFormRef = (event) => {
  event.preventDefault();
  const user = userRef.current.value;
  const pass = passwordRef.current.value;
  console.log(user, pass);
};
⚠ Note
Direct DOM access (like document.querySelector) works but is not considered best practice in React.

useRef is preferred because:

It doesn’t trigger re-renders.

Keeps code more “React-friendly” by avoiding manual DOM queries.

Makes the relationship between elements and variables explicit.

🧑‍💻 Author
Built with ❤️ by @hitaishi18-coder