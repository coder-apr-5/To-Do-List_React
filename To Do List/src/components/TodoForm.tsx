import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState<string>('');
  const [reminder, setReminder] = useState<string>('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTodo({
      title: title.trim(),
      completed: false,
      dueDate: dueDate ? new Date(dueDate) : null,
      reminder: reminder ? new Date(reminder) : null,
    });

    setTitle('');
    setDueDate('');
    setReminder('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <input
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-500" />
          <input
            type="datetime-local"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </form>
  );
}