import Button from './Button'


const Header = (props) => {
    return (
        <header className="p-6 flex flex-row justify-between  bg-green-500 rounded-2xl ">
            <p>React Tasktracker</p>
            <Button color={props.showAddTask ? 'red' : 'blue'} click={props.toggleAddTask}>Add Task</Button>
        </header>
    );
}

export default Header;