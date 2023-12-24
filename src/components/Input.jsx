import { useState } from "react"

function Input(props) {
    const [task, setTask] = useState("");
    const [key, setKey] = useState(0);

    function handleChange(e) {
        setTask(e.target.value);
    }

    function handleClick() {
        const newTask = {
            id: key,
            text: task
        }
        setKey(prev => prev+1);
        setTask("");
        props.addTask(newTask);
    }

    return (
        <div className="container mx-auto flex justify-center mt-6 px-4">
            <input 
                type="text" 
                value={task} 
                onChange={handleChange} 
                className="w-[30ch] border-2 rounded-l-md border-darker shadow-md shadow-dark px-1 py-2 text-darker font-medium"
            />
            <button 
                onClick={handleClick}
                className="bg-dark text-darker border-2 rounded-r-md border-darker shadow-md shadow-dark p-2 font-semibold hover:bg-darker hover:text-lighter"
            >
                Add
            </button>
        </div>
    )
}

export default Input