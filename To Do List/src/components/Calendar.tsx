import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { useTodoStore } from '../store/todoStore';

export function Calendar() {
  const todos = useTodoStore((state) => state.todos);
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getTodosForDate = (date: Date) => {
    return todos.filter(
      (todo) =>
        todo.dueDate &&
        format(todo.dueDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        {format(today, 'MMMM yyyy')}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-gray-500 font-medium">
            {day}
          </div>
        ))}
        {days.map((date) => {
          const todosForDate = getTodosForDate(date);
          return (
            <div
              key={date.toString()}
              className={`p-2 text-center rounded-lg ${
                format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')
                  ? 'bg-blue-100'
                  : ''
              }`}
            >
              <div className="font-medium">{format(date, 'd')}</div>
              {todosForDate.length > 0 && (
                <div className="mt-1">
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-blue-500 text-white rounded-full">
                    {todosForDate.length}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}