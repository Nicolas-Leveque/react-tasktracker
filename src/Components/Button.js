const Button = (props) => {
    return (
        <button 
            className={`bg-${props.color}-600 rounded-full px-2 text-white`}
            onClick={props.click} type={props.type}
            >
            {props.children}
        </button>
    );
}

export default Button