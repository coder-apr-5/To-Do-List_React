import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Calendar } from './components/Calendar';
import { CheckSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <CheckSquare className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Todo List</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <TodoForm />
            </div>
            <TodoList />
          </div>
          
          <div className="lg:col-span-1">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;