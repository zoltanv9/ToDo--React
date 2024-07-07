import Button from "./Button.jsx";

export default function Menu({onButtonClick, onProjectClick, projects, selectedProjectIndex}) {
    return (
        <aside className="bg-stone-900 rounded-tr-2xl px-12 pt-[80px] w-1/3">
            <h1 className="uppercase text-stone-200 font-bold text-2xl mb-8">YOUR PROJECTS</h1>
            <Button
                className="bg-stone-700 hover:bg-stone-600 px-6 py-3"
                onClick={onButtonClick}>
                + Add project
            </Button>
            <ul className="mt-10 text-neutral-500 text-xl shadow-md rounded-lg">
                {projects.map((project, index) => {
                        let cssClasses = "px-4 py-2 hover:bg-neutral-800 hover:text-stone-300 mt-2";

                        if (index === selectedProjectIndex) {
                            cssClasses += " bg-neutral-800 text-stone-300";
                        }

                        return (
                            <li
                                key={index}
                                className={cssClasses}
                                onClick={() => onProjectClick(index)}
                            >
                                {project.title}
                            </li>
                        )
                    }
                )}
            </ul>
        </aside>
    );
}