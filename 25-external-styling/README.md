🎨 React External CSS User Cards
🚀 Live Preview
To run this project locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-external-css-user-cards.git
cd react-external-css-user-cards
npm install
npm run dev
🧠 About the Project
This project demonstrates:

🎨 External CSS Styling in React

🖼 Profile Cards with image, name, and role

📏 Responsive Flexbox Layout for card arrangement

♻️ Reusable CSS classes for consistent design

🛠 Tech Stack
⚛️ React (Vite)

🎯 Functional Components

💅 External CSS Stylesheet

🖥 JavaScript (ES6+)

📂 Folder Structure
pgsql
Copy code
react-external-css-user-cards/
├── src/
│   ├── Css/
│   │   └── Style.css      # External CSS styles
│   ├── App.jsx            # Main component with user cards
│   └── main.jsx           # Entry point
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Multiple profile cards with consistent styling
✅ Flexbox layout for wrapping and responsiveness
✅ External .css file imported into React components
✅ Clean and reusable class-based styling

💡 How It Works
In App.jsx:
Import external styles:

javascript
Copy code
import './Css/Style.css';
Use className to assign styles from Style.css.

Arrange cards in a flex container with flex-wrap: wrap;.

Each card contains:

Profile image

User name

Role description

🔍 Example Usage
Heading → Green, centered text
Profile Cards → White background with border & shadow
Layout → Automatically adjusts for different screen sizes

🧑‍💻 Author
Built with ❤️ by @hitaishi18-coder