# ⌨️ ExpressType

**ExpressType** is a modern and minimal **typing speed test web application** designed to help users improve their typing speed, accuracy, and consistency.  
It provides real-time statistics, customizable test durations, and a clean distraction-free interface.

---

## 🚀 Features

- ⌨️ **Real-time Typing Test**
  - Displays quotes for users to type
  - Highlights correct and incorrect characters

- 📊 **Live Statistics**
  - Words Per Minute (WPM)
  - Accuracy %
  - Remaining Time

- ⏱️ **Multiple Timer Options**
  - 15 seconds
  - 30 seconds
  - 60 seconds

- 📝 **Different Text Length Modes**
  - Short
  - Medium
  - Long

- 🎨 **Theme Customization**
  - Dark Theme
  - Light Theme
  - Forest Theme

- 🔠 **Adjustable Font Size**

- 👤 **User Profile**
  - Custom username
  - Avatar initials
  - Average WPM
  - Peak WPM

- 💾 **Local Storage Support**
  - Saves username
  - Stores typing history
  - Tracks average and best performance

- 🔄 **Reset / Next Test Button**
  - Instantly start a new typing session

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **LocalStorage API**
- **Google Fonts**
  - Inter
  - JetBrains Mono

---

## 📂 Project Structure

```
ExpressType/
│
├── index.html
├── expresstype.css
├── expresstype.js
└── README.md
```

---

## ⚙️ How It Works

1. A random quote is selected from predefined arrays (short, medium, long).
2. The quote is rendered character by character.
3. User input is compared in real-time.
4. Characters are marked:
   - Correct
   - Incorrect
   - Current typing position
5. WPM and accuracy are calculated dynamically.
6. After the timer ends, the session WPM is stored in **localStorage**.

---

## 🧠 WPM Calculation

WPM is calculated using the formula:

```
WPM = (Correct Characters / 5) / Time in Minutes
```

Where:
- **5 characters = 1 word (standard typing metric)**

---
## 🌟 Future Improvements

- Leaderboard system
- Multiplayer typing races
- Custom text upload
- Sound effects
- Detailed analytics dashboard
- Mobile typing optimization
- User authentication

---
## 🌐 Live Demo https://express-type-five.vercel.app/
---

## 👨‍💻 Author

Developed by **Aditya Sharma**

If you like this project, consider giving it a ⭐ on GitHub!
