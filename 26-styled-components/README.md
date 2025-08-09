🎨 React Styled Components Example
🚀 Live Preview
To run this project locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-styled-components-demo.git
cd react-styled-components-demo
npm install
npm run dev
🧠 About the Project
This project demonstrates:

💅 Styled Components in React

📦 Creating styled HTML elements with scoped CSS

🎯 Clean and reusable UI elements with component-level styling

🖥 No need for separate .css files for each styled element

🛠 Tech Stack
⚛️ React (Vite)

💅 Styled Components

📏 CSS-in-JS styling

🖥 JavaScript (ES6+)

📂 Folder Structure
pgsql
Copy code
react-styled-components-demo/
├── src/
│   ├── App.jsx            # Main component with styled elements
│   ├── App.css            # Optional global styles
│   └── main.jsx           # Entry point
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Define styled elements directly inside components
✅ Scoped styles that won’t leak into other components
✅ Dynamic styling based on props (extendable)
✅ Cleaner code without maintaining multiple CSS files

💡 How It Works
In App.jsx:
Import styled-components:

javascript
Copy code
import styled from 'styled-components';
Create styled elements:

javascript
Copy code
const Heading = styled.h4`
  color: red;
  border: 1px solid green;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
`;

const Button = styled.button`
  color: blue;
  width: 130px;
  height: 40px;
  margin: 20px;
`;
Use them like normal JSX elements:

jsx
Copy code
<Heading>Hello</Heading>
<Button>Login Here</Button>
🔍 Example Output
Heading → Red text with green border and padding

Button → Blue text with fixed dimensions and margin

🧑‍💻 Author
Built with ❤️ by @hitaishi18-coder

