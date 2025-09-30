import { useState } from "react";

const Hero = () => {
  const [todos, setTodos] = useState(["Anna", "Benedict"]);
  const [newName, setNewName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editName, setEditName] = useState("");

  // Add student
  const addTodo = () => {
    if (newName.trim() === "") return;
    setTodos([...todos, newName]);
    setNewName("");
  };

  // Delete student
  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  // Start editing
  const startEdit = (index) => {
    setEditingIndex(index);
    setEditName(todos[index]);
  };

  // Save edited name
  const saveEdit = (index) => {
    const updated = [...todos];
    updated[index] = editName;
    setTodos(updated);
    setEditingIndex(null);
    setEditName("");
  };

  return (
    <div className="p-3 items-center justify-center flex flex-col bg-amber-200 min-h-[594px]">
      <h1 className="font-bold text-2xl text-amber-950 uppercase p-12">Student portal</h1>

      {/* Display student list */}
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {editingIndex === i ? (
              <>
                <input
                  type="text"
                  value={editName} className="border-1 border-gray-600"
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button
                  className="bg-green-500 text-white p-1 m-2 rounded-sm cursor-pointer"
                  onClick={() => saveEdit(i)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {t}
                <button
                  className="bg-yellow-500 text-white px-2 m-1 rounded-sm cursor-pointer"
                  onClick={() => startEdit(i)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 m-1 rounded-sm cursor-pointer"
                  onClick={() => deleteTodo(i)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Input field for new student */}
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter your name"
        className="w-[200px] border-1 border-gray-600 rounded-sm m-3"
      />

      {/* Register button */}
      <div className="flex flex-col">
        <button
          className="bg-amber-500 text-white p-2 rounded-sm cursor-pointer m-2"
          onClick={addTodo}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Hero;
