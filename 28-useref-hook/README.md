🔍 useRef Hook – DOM Manipulation Example
🚀 How to Run
bash
Copy code
git clone https://github.com/hitaishi18-coder/useref-demo.git
cd useref-demo
npm install
npm run dev
🧠 About the Project
This project demonstrates:

🛠 How to use React's useRef hook

🎯 How to directly manipulate DOM elements in React

⚠ Why direct DOM manipulation is not recommended in most cases (React prefers state-driven UI changes)

🛠 Tech Stack
⚛️ React (Vite)

🎨 CSS (App.css)

🖥 JavaScript (ES6+)

📂 Folder Structure
plaintext
Copy code
useref-demo/
├── src/
│   ├── App.jsx           # Main component with useRef logic
│   ├── App.css           # Styles
│   └── main.jsx          # Entry point
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Focus on input field when a button is clicked
✅ Change input styling (text color, placeholder, value) via useRef
✅ Toggle input visibility (hide/show)
✅ Change <h1> text color on button click

💡 How It Works
Create a reference

javascript
Copy code
const inputRef = useRef(null)
Attach it to an element

jsx
Copy code
<input ref={inputRef} type="text" placeholder="enter your name" />
Access and modify element properties

javascript
Copy code
inputRef.current.focus();
inputRef.current.style.color = 'green';
inputRef.current.value = '123';
Toggle element visibility

javascript
Copy code
if (inputRef.current.style.display !== 'none') {
    inputRef.current.style.display = 'none';
} else {
    inputRef.current.style.display = 'inline';
}
⚠ Note
Direct DOM manipulation is usually discouraged in React because it bypasses the virtual DOM.

Use useState and conditional rendering for most UI updates unless you specifically need low-level DOM access.

🧑‍💻 Author
Built with ❤️ by @hitaishi18-coder