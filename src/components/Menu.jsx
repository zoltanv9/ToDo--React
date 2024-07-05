export default function Menu({onButtonClick, onProjectClick, projects}) {
    return (
        <div className="bg-neutral-900 rounded-tr-2xl px-12 pt-[80px] h-full">
            <h1 className="uppercase text-white font-bold text-2xl mb-8">YOUR PROJECTS</h1>
            <button className="bg-stone-700 text-stone-400 text-xl px-6 py-3 rounded-xl" onClick={onButtonClick}>+ Add
                project
            </button>
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
        </div>
    );
}