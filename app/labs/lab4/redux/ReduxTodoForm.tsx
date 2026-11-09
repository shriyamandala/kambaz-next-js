import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "./todosReducer";

export default function ReduxTodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] = useState<string | null>(null);
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        id="wd-redux-add-todo"
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        onClick={() => {
          if (editingId) {
            dispatch(updateTodo({ id: editingId, title }));
            setEditingId(null);
          } else {
            dispatch(addTodo(title));
          }
          setTitle("Learn Mongo");
        }}
      >
        {editingId ? "Update" : "Add"}
      </button>
    </div>
  );
}
