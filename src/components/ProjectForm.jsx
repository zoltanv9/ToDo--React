import {useRef} from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";

export default function ProjectForm({onNavigateBack, onSave}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef()
    const formRef = useRef();
    const modal = useRef();

    const handleOnSave = (e) => {
        e.preventDefault();
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDate = dateRef.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '') {
            modal.current.open();
            return;
        }

        onSave({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        })
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-2xl font-bold text-stone-800">Error</h2>
                <p className="text-lg text-stone-600">Please fill out all fields.</p>
                <div className="text-right">
                    <Button
                        onClick={() => modal.current.close()}
                        className="mt-6 bg-stone-800 hover:bg-stone-700 px-3 py-2"
                    >
                        Close
                    </Button>
                </div>
            </Modal>
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
                        className="bg-stone-800 hover:bg-stone-700 px-6 py-3"
                    >
                        Save
                    </Button>
                </menu>
                <Input
                    id="title"
                    label="Title"
                    isTextArea={false}
                    defaultValue="Learning"
                    type="text"
                    ref={titleRef}
                />
                <Input
                    id="description"
                    label="Description"
                    defaultValue="This is the description area."
                    isTextArea={true}
                    ref={descriptionRef}
                />
                <Input
                    id="date"
                    label="Due Date"
                    defaultValue={new Date().toISOString().split('T')[0]}
                    isTextArea={false}
                    type="date"
                    ref={dateRef}
                />
            </form>
        </>
    )
}