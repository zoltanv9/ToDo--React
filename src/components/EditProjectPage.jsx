import {useState} from 'react';

export default function EditProjectPage({project, onDelete, onClickAddTask, onClickClearTask}) {
    console.log('rerender Edit page')
    const [inputState, setInputState] = useState('');
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('us-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    const handleAddTask = () => {
        if (!inputState) return;
        onClickAddTask(inputState);
        setInputState('');
    }
    
    const formattedDate = formatDate(project.date);
    
    return (
        <div className="mt-20 pl-12  md:max-w-[840px] 2xl:max-w-[1024px]">
            <div className="flex place-content-between mb-2">
                <h1 className="text-4xl font-bold text-stone-700">{project.title}</h1>
                <button
                    type="button"
                    className="px-4 text-xl hover:bg-gray-300 text-stone-600"
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
            <h3 className="text-stone-500 mb-6">{formattedDate}</h3>
            <p className="text-xl whitespace-pre-wrap">{project.description}</p>
            <hr className="my-6 h-[3px] bg-gray-300"/>
            <h2 className="text-3xl font-bold text-stone-800">Tasks</h2>
            <div className="flex">
                <input
                    className="block w-[360px] my-6 px-2 py-1 text-lg bg-stone-200 border-stone-400 rounded-sm outline-none focus:bg-stone-300 focus:border-[3px] focus:border-blue-500"
                    type="text"
                    value={inputState}
                    onChange={(e) => setInputState(e.target.value)}
                ></input>
                <button
                    type="button"
                    className="p-6 text-lg text-stone-600 hover:text-blue-700"
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>
            {(project.tasks && project.tasks.length > 0) ? (<div
                className="bg-stone-2 px-10 py-4 bg-stone-100"
            >
            <ul>
                {project.tasks.map((taskName, index) => (
                    <li className="flex justify-between py-2" key={index}>
                        <span className="text-lg text-stone-600">{taskName}</span>
                        <button
                            className="hover:text-red-600"
                            onClick={() => onClickClearTask(index)}>
                            Clear
                        </button>
                    </li>
                ))}

            </ul>
                    </div>) :
                (<div>This project does not have any tasks yet.</div>)
            }
        </div>
    )
}