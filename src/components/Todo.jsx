import { useRef, useState } from "react"
import Input from "./Input";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [editedTodo, setEditedtodo] = useState("");
    const [isModalOpen, setIsmodalopen] = useState(false);
    const editedTodoRef = useRef(null);

    function addTodo(newTask) {
        if(newTask.text === "") {
            alert("enter task");
            return;
        }
        setTodos((prev) => [...prev, newTask]);
    }

    function handleUpdate(key) {
        editedTodoRef.current = {id: key, text: ""}
        setIsmodalopen(true);
    }

    function handleDelete(key) {
        setTodos((prev) => prev.filter((todo) => todo.id !== key));
    }

    function display(todo) {
        return (
            <div key={todo.id} className="flex gap-1 items-center justify-between text-darker font-medium border-b-2 border-darker mt-2">
                <div 
                    className="py-2"
                >
                    {todo.text}
                </div>
                <div className="flex gap-4">
                    <button onClick={() => handleUpdate(todo.id)} className="bg-light border-2 border-dark rounded-xl p-1">Update</button>
                    <button onClick={() => handleDelete(todo.id)} className="bg-light border-2 border-dark rounded-xl p-1">Delete</button>
                </div>
            </div>
        )
    }

    function closeModal() {
        setIsmodalopen(false);
        if(editedTodoRef.current !== null) {
            setTodos(prev => prev.map(todo => todo.id === editedTodoRef.current.id ? {...todo, text: editedTodo} : todo));
        }
    }

    return (
        <>
            <Input addTask={addTodo}/>
            <div className="container mx-auto mt-6 flex flex-col justify-center px-4">
                {todos.map(display)}
            </div>
            {
                isModalOpen && (
                    <dialog id="modal" className={`container mx-auto flex justify-center mt-6 px-4`}>
                        <div className="h-screen w-screen overflow-hidden fixed top-0 bottom-0 left-0 right-0 bg-[rgba(49,49,49,0.8)]"></div>
                        <input 
                            type="text" 
                            value={editedTodo} 
                            onChange={(e) => setEditedtodo(e.target.value)} 
                            className="z-10 w-[30ch] border-2 rounded-l-md border-darker shadow-md shadow-dark px-1 py-2 text-darker font-medium"
                        />
                        <button 
                            onClick={closeModal}
                            className="z-10 bg-dark text-darker border-2 rounded-r-md border-darker shadow-md shadow-dark p-2 font-semibold hover:bg-darker hover:text-lighter"
                        >
                            Edit
                        </button>
                    </dialog>
                )
            }
        </>
    )
}

export default Todo