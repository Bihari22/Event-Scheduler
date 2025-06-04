# [📅 Event Scheduler Web App](https://bihari22.github.io/Event-Scheduler/)

A simple and intuitive event scheduler tool where users can:

- Schedule events with title, date, and time
- Receive reminders for upcoming events
- View scheduled events in a list
- Export schedule as a `.json` file

## 🚀 Features

- ✅ Clean and responsive user interface with Tailwind CSS
- ✅ Dynamic calendar rendering
- ✅ Real-time input validation with user feedback
- ✅ Reminder alerts via browser notifications
- ✅ Export events to JSON

## 🛠️ Technologies Used

- **HTML** — Structure of the application
- **CSS** — Responsive, modern design
- **JavaScript (Vanilla)** — Interactive functionality

## 📂 Project Structure

```
├── index.html        # Main HTML structure
├── styles.css        # Custom CSS styles
├── app.js            # JavaScript logic and interactivity
└── README.md         # Project documentation
```

## 💡 How to Use

1. Open `index.html` in a web browser.
2. Use the form to add a new event.
3. View all scheduled events below the form.
4. Click "Export Schedule" to download your schedule in JSON format.

## ⚙️ Setup (Local)

No build tools or server required.

```bash
# Clone the repository
$ git clone https://github.com/bihari22/Event-Scheduler.git

# Navigate into the project directory
$ cd Event-Scheduler

# Open in browser
$ open index.html
```

## 🧪 Validations & Edge Cases

- Empty fields: shows error message
- Scheduling past events: blocked with alert
- Browser reminders: scheduled with `setTimeout`

## 📤 Deployment

You can host the app on:
- GitHub Pages
- Netlify
- Vercel

Simply drag and drop the project folder or deploy via Git.

## 📃 License

MIT License. Free to use, modify, and distribute.

---

Made with ❤️ using HTML, CSS, and JavaScript.
