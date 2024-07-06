import {useRef, useState} from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

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
        <form ref={formRef} onSubmit={handleOnSave}
              className="mt-10 space-y-4 p-12 md:max-w-[840px] 2xl:max-w-[1024px]">
            <menu className="flex flex-row items-center justify-end space-x-4">
                <button
                    type="button"
                    className="px-4 py-2 text-xl text-stone-800 hover:bg-gray-300"
                    onClick={onNavigateBack}
                >
                    Cancel
                </button>
                <Button
                    type="submit"
                    className="bg-stone-800 hover:bg-stone-700 py-1"
                >
                    Save
                </Button>
            </menu>
            <Input
                data={formData.title}
                id="title"
                label="Title"
                isTextArea={false}
                handleOnChange={handleOnChange}
                type="text"
            />
            <Input
                data={formData.description}
                id="description"
                label="Description"
                isTextArea={true}
                handleOnChange={handleOnChange}
            />
            <Input
                data={formData.date}
                id="date"
                label="Due Date"
                isTextArea={false}
                handleOnChange={handleOnChange}
                type="date"
            />
        </form>
)
}