import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  return (
    <div id="wd-context-todo-list">
      <h3>Context Todo List</h3>
      <button
        type="button"
        onClick={addTodo}
        id="wd-context-todo-add-click"
        className="mb-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add Todo
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <input
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              id={`wd-context-todo-${todo.id}-title`}
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              id={`wd-context-todo-${todo.id}-delete-click`}
              className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
