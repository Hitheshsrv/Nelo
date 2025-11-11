# 📝 Task Manager

A modern, feature-rich task management application built with **React** and **Tailwind CSS**. Organize your tasks efficiently with filtering, priority levels, and persistent storage.

## ✨ Features

- ✅ **Create Tasks** - Add new tasks with title, description, priority, and due dates
- 🔍 **Search & Filter** - Find tasks by status (completed/pending), priority level, or search term
- 🎯 **Priority Levels** - Categorize tasks as Low, Medium, or High priority
- 📅 **Due Dates** - Set and track task deadlines
- ✏️ **Edit Tasks** - Update task details on the fly
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 💾 **Persistent Storage** - Tasks are saved to browser's localStorage automatically
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Project Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx         # Form for creating/editing tasks
│   │   ├── TaskFilters.jsx      # Filter and search controls
│   │   ├── TaskCard.jsx         # Individual task display component
│   │   └── PriorityBadge.jsx    # Priority level badge component
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Entry point
│   ├── index.css                # Global styles
│   └── assets/
├── public/
│   └── vite.svg
├── package.json
├── vite.config.js               # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── eslint.config.js              # ESLint configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Technologies Used

- **React 19** - UI library for building interactive components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful SVG icons library
- **localStorage** - Browser API for persistent data storage

## 📋 Component Overview

### TaskForm
Handles task creation with form validation for:
- Task title (required)
- Description (optional)
- Priority level (Low, Medium, High)
- Due date

### TaskFilters
Provides filtering and search capabilities:
- Status filter (All, Completed, Pending)
- Priority filter (All, Low, Medium, High)
- Search by task title

### TaskCard
Displays individual task with:
- Task title and description
- Priority badge
- Due date
- Completion toggle
- Edit and delete actions

### PriorityBadge
Visual indicator for task priority with color coding

## 💾 Data Storage

Tasks are automatically saved to the browser's `localStorage` under the key `'tasks'`. This allows your tasks to persist between sessions.

**Task Object Structure:**
```javascript
{
  id: number,                // Unique timestamp-based ID
  title: string,             // Task title
  description: string,       // Task description
  priority: string,          // 'Low', 'Medium', or 'High'
  dueDate: string,           // ISO date string (YYYY-MM-DD)
  completed: boolean,        // Task completion status
  createdAt: string          // ISO timestamp when task was created
}
```

## 🎯 Usage

1. **Create a Task**: Fill out the form at the top with task details and click "Add Task"
2. **Mark Complete**: Click the checkbox on a task card to mark it as completed
3. **Filter Tasks**: Use the filter controls to show specific task categories
4. **Search**: Use the search box to find tasks by title
5. **Edit a Task**: Click the edit button on a task card to modify it
6. **Delete a Task**: Click the delete button to remove a task

## 🔄 Future Enhancements

- Categories/Tags for task organization
- Task recurring options
- Due date reminders and notifications
- Dark mode support
- Export/Import tasks
- Cloud synchronization

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by [Your Name]

---

**Happy task managing! 🚀**
