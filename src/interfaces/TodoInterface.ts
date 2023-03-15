export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
  isEdit: boolean;
}

export interface TodoCard {
  onClose: (todoItem: Todo) => void;
  onEdit: (todoItem: Todo) => void;
  onUndo: (todoItem: Todo) => void;
  onDone: (todoItem: Todo) => void;
}
