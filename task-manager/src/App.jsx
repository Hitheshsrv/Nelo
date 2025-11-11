import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskFilters from './components/TaskFilters';
import TaskCard from './components/TaskCard';

function App() {
  // State management
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: new Date().toISOString().split('T')[0]
  });
  const [errors, setErrors] = useState({});
  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle task creation
  const handleSubmit = () => {
    if (!validateForm()) return;

    const newTask = {
      id: Date.now(),
      ...formData,
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTasks([newTask, ...tasks]);
    setFormData({
      title: '',
      description: '',
      priority: 'Medium',
      dueDate: new Date().toISOString().split('T')[0]
    });
    setErrors({});
  };

  // Handle toggle complete/pending
  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handle task deletion
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Handle task editing
  const handleEdit = (id, updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };

  // Filter tasks based on status, priority, and search
  const filteredTasks = tasks.filter(task => {
    const matchesStatus = 
      filter === 'all' ? true :
      filter === 'completed' ? task.completed :
      filter === 'pending' ? !task.completed : true;
    
    const matchesPriority = 
      priorityFilter === 'all' ? true :
      task.priority === priorityFilter;
    
    const matchesSearch = 
      task.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesPriority && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          📝 Task Manager
        </h1>

        {/* Task Creation Form */}
        <TaskForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          onSubmit={handleSubmit}
        />

        {/* Filters and Search */}
        <TaskFilters
          filter={filter}
          setFilter={setFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Task List */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Tasks ({filteredTasks.length})
            </h2>
          </div>

          {filteredTasks.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-500 text-lg">No tasks found. Create one to get started!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTasks.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={handleToggleComplete}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;