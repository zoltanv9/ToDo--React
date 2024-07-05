import {useRef, useState} from "react";

export default function ProjectForm({onNavigateBack, onSave }) {
    const [formData, setFormData] = useState({
        title: 'Learning',
        description: 'Description of the project',
        date: new Date().toISOString().split('T')[0]
    })
    const formRef = useRef();

    const handleOnChange = (event, index) => {
        setFormData((prevValue) => ({
            ...prevValue,
            [index]: event.target.value
        }))
    }
    
    const handleOnSave = (e) =>{
        e.preventDefault();
        onSave(formData)
    }
    
    return (
        <form ref={formRef} onSubmit={handleOnSave} className="mt-10 space-y-4 p-12 md:max-w-[840px] 2xl:max-w-[1024px]">
            <div className="flex flex-row justify-end space-x-4">
                <button
                    type="button"
                    className="px-4 py-2 text-xl hover:bg-gray-300"
                    onClick={onNavigateBack}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-6 py-3 text-xl bg-neutral-800 text-white rounded hover:bg-blue-600"
                >
                    Save
                </button>
            </div>
            <div className="space-y-1">
                <label htmlFor="title" className="uppercase block text-lg font-bold text-stone-600">
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    value={formData.title}
                    onChange={(event) => handleOnChange(event, 'title')}
                    className="block w-full px-2 py-2 text-lg bg-stone-200 border-b-2 border-stone-400 focus:outline-none focus:bg-stone-300 focus:border-stone-700"
                />
            </div>
            <div className="space-y-1">
                <label htmlFor="description" className="uppercase block text-lg font-bold text-stone-600">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Enter description"
                    value={formData.description}
                    onChange={(event) => handleOnChange(event, 'description')}
                    className="block w-full px-2 py-2 text-lg bg-stone-200 border-b-2 border-stone-400 focus:outline-none focus:bg-stone-300 focus:border-stone-700"
                />
            </div>
            <div className="space-y-1">
                <label htmlFor="date" className="uppercase block text-lg font-bold text-stone-600">
                    Due Date
                </label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={(event) => handleOnChange(event, 'date')}
                    className="block w-full px-1 py-1 text-lg bg-stone-200 border-b-2 border-stone-400 focus:outline-none focus:bg-stone-300 focus:border-stone-700"
                />
            </div>
        </form>
    )
}