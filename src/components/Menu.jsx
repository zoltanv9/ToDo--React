import Button from "./Button.jsx";

export default function Menu({onButtonClick, onProjectClick, projects}) {
    return (
        <aside className="bg-stone-900 rounded-tr-2xl px-12 pt-[80px] w-1/3">
            <h1 className="uppercase text-stone-200 font-bold text-2xl mb-8">YOUR PROJECTS</h1>
            <Button
                className="bg-stone-700 hover:bg-stone-600"
                onClick={onButtonClick}>
                + Add project
            </Button>
            <ul className="mt-10 text-neutral-500 text-xl shadow-md rounded-lg">
                {projects.map((project, index) => (
                    <li
                        key={index}
                        className="px-4 py-2 hover:bg-neutral-800 hover:text-stone-300 mt-2"
                        onClick={() => onProjectClick(index)}
                    >
                        {project.title}
                    </li>
                ))}
            </ul>
        </aside>
    );
}