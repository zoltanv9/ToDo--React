import logoImg from '/logo.png'
import Button from './Button.jsx'

export default function StartPage({onButtonClick}) {
    return (
        <div className="flex flex-col items-center mt-20 md:max-w-[840px] 2xl:max-w-[1024px]">
            <img src={logoImg} className="w-20 object-contain mx-auto" alt="logo"></img>
            <h1 className="text-2xl mt-4 text-stone-600 font-semibold">No Project Selected</h1>
            <p className="text-xl text-stone-500 mt-4">Select a project or get started with a new one</p>
            <Button className="bg-stone-800 hover:bg-stone-700 mt-8 px-6 py-3" onClick={onButtonClick}>Create new project
            </Button>
        </div>
    );
}