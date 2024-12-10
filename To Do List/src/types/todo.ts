export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dueDate: Date | null;
  reminder: Date | null;
}