import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button";

function Task({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query}`)
    }

    return (


        <ul className="space-y-4 bg-slate-200 rounded-md shadow p-6"> {tasks.map((task) =>
            <li key={task.id} className="flex gap-2" >
                <button onClick={() => onTaskClick(task.id)}
                    className={`text-left w-full flex items-center gap-2 bg-slate-400 text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                    {task.isCompleted && <CheckIcon />}
                    {task.title}
                </button>
                <Button
                    onClick={() => onSeeDetailsClick(task)}
                    className="bg-slate-400 p-2 rounded-md text-white"> <ChevronRightIcon />
                </Button>
                <Button onClick={() => onDeleteTaskClick(task.id)}
                    className="bg-slate-400 p-2 rounded-md text-white">
                    <TrashIcon />
                </Button>


            </li>)}
        </ul >


    )


}

export default Task