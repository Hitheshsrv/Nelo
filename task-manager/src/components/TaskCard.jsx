import React, { useState } from 'react';
import { Trash2, Edit2, Check, X } from 'lucide-react';
import PriorityBadge from './PriorityBadge';

const TaskCard = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(task);

  const handleSave = () => {
    if (editForm.title.trim()) {
      onEdit(task.id, editForm);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditForm(task);
    setIsEditing(false);
  };

  // Editing mode view
  if (isEditing) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 border-2 border-blue-300">
        <div className="space-y-3">
          <input
            type="text"
            value={editForm.title}
            onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Task title"
          />
          <textarea
            value={editForm.description}
            onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description (optional)"
            rows="2"
          />
          <div className="flex gap-2 flex-wrap">
            <select
              value={editForm.priority}
              onChange={(e) => setEditForm({ ...editForm, priority: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <input
              type="date"
              value={editForm.dueDate}
              onChange={(e) => setEditForm({ ...editForm, dueDate: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition flex items-center justify-center gap-2"
            >
              <Check size={16} /> Save
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition flex items-center justify-center gap-2"
            >
              <X size={16} /> Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Normal view mode
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 transition-all hover:shadow-lg ${
      task.completed ? 'opacity-75 bg-gray-50' : ''
    }`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </h3>
        <PriorityBadge priority={task.priority} />
      </div>
      
      {task.description && (
        <p className={`text-sm mb-3 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
          {task.description}
        </p>
      )}
      
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
        <span className={`text-sm font-medium ${task.completed ? 'text-green-600' : 'text-orange-600'}`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className={`flex-1 px-4 py-2 rounded-md transition flex items-center justify-center gap-2 ${
            task.completed
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          <Check size={16} />
          {task.completed ? 'Mark Pending' : 'Complete'}
        </button>
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          <Edit2 size={16} />
        </button>
        <button
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this task?')) {
              onDelete(task.id);
            }
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;