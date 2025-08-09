🎨 Inline CSS Cards with Theme & Layout Toggle in React
This React app displays multiple profile cards styled using inline CSS with the ability to switch themes and toggle between grid & list view dynamically.

🚀 Live Preview
To run this project locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-inline-css-theme-toggle.git
cd react-inline-css-theme-toggle
npm install
npm run dev
🧠 About the Project
This project demonstrates:

🎨 Inline CSS Styling in React

🌈 Theme switching (Background + Text color change)

📏 Layout toggle between Grid and List view

♻️ State management with useState

📦 Rendering multiple cards dynamically

🛠 Tech Stack
⚛️ React (Vite)

🎯 Functional Components + Hooks

💅 Inline CSS

🖥 JavaScript (ES6+)

📂 Folder Structure
pgsql
Copy code
react-inline-css-theme-toggle/
├── src/
│   ├── App.jsx       # Main component with theme & layout toggle
│   ├── App.css       # Optional global styles
│   └── main.jsx      # Entry point
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Multiple profile cards with consistent styling
✅ Toggle between light and dark themes
✅ Switch between grid and list view
✅ Fully inline CSS with dynamic state updates

💡 How It Works
In App.jsx:
cardStyle state stores card styling (border, background, color, shadow).

updateTheme() changes card background & text color dynamically.

grid state controls whether cards are displayed in flex (grid) or block (list).

Profile cards are styled inline and reused multiple times.

🔍 Example Usage
Default Theme (White background + Black text)
Grey Theme (Grey background + Yellow text)
Grid Layout → Cards side by side
List Layout → Cards stacked vertically

🧑‍💻 Author
Built with ❤️ by @hitaishi18-coder