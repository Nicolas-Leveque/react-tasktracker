import Button from './Button'

const Header = (props) => {
    return (
        <header className="p-6 flex flex-row justify-between border-solid bg-gray-100 ">
            <p>React Tasktracker</p>
            <Button color="green">Add Task</Button>
        </header>
    );
}

export default Header;