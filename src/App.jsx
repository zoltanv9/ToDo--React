import Menu from "./components/Menu.jsx";
import StartPage from "./components/StartPage.jsx";
import {useState} from "react";
import ProjectForm from "./components/ProjectForm.jsx";
import EditProjectPage from "./components/EditProjectPage.jsx";

function App() {
    console.log('app rereendered')
    const [activePage, setActivePage] = useState('start')
    const [projects, setProjects] = useState([])
    const [activeProjectIndex, setActiveProjectIndex] = useState(undefined);

    const handleOnSave = (project) => {
        setProjects((prevState) => [...prevState, project])
        setActivePage('start')
    }
    
    const handleOnEdit = (index) => {
        setActiveProjectIndex(index);
        setActivePage('edit')
    }

    const handleOnClickAddTask = (taskName) => {
        setProjects((prevState) => {
            return prevState.map((project, index) => {
                if (index === activeProjectIndex) {
                    return {
                        ...project,
                        tasks: project.tasks ? [...project.tasks, taskName] : [taskName],
                    };
                }
                return project;
            });
        });
    };

    const handleOnClickClearTask = (taskIndex) => {
        setProjects((prevState) => {
            return prevState.map((project, index) => {
                if (index === activeProjectIndex) {
                    return {
                        ...project,
                        tasks: project.tasks.filter((task, i) => i !== taskIndex),
                    };
                }
                return project;
            });
        });
    }

    const handleOnDelete = () => {
        setProjects((prevState) => {
            return prevState.filter((project, index) => index !== activeProjectIndex);
        });
        setActiveProjectIndex(undefined);
        setActivePage('start');
    }

    let content;

    if (activePage === 'edit') {
        content = <EditProjectPage
            key={activeProjectIndex}
            project={projects[activeProjectIndex]}
            onDelete={handleOnDelete}
            onClickAddTask={handleOnClickAddTask}
            onClickClearTask={handleOnClickClearTask}
        />;
    } else if (activePage === 'new') {
        content = <ProjectForm
            onNavigateBack={() => setActivePage('start')}
            onSave={handleOnSave}
        />;
    } else {
        content = <StartPage onButtonClick={() => setActivePage('new')} />
    }

    return (
            <main className="flex-grow flex h-screen pt-8">
                <Menu
                    projects={projects}
                    onButtonClick={() => setActivePage('new')}
                    onProjectClick={handleOnEdit}
                    selectedProjectIndex={activeProjectIndex}
                />
                <div className="w-2/3">
                    {content}
                </div>
            </main>
    );
}

export default App;
