const Button = (props) => {
    return (
        <button 
            className={`border-solid bg-green-400 rounded-full px-2`}
            onClick={props.toggleAddTask}
            >
            {props.children}
        </button>
    );
}

export default Button