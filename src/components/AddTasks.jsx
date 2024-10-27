import { useState } from "react"
import Input from "./Input"


function AddTasks({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div className="bg-slate-200 rounded-md shadow p-6 space-y-4 flex flex-col">

            <Input
                type="text"
                placeholder="Digite o título da tarefa" value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Digite a descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium" onClick={() => {
                //Verificação se o título e a descrição estão preenchidos
                if (!title.trim() || !description.trim()) {
                    return alert("Preencha o título e a descrição da tarefa.")
                }
                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }}>Adicionar</button>

        </div>

    )
}

export default AddTasks