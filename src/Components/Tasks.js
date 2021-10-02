import Task from './Task';

const Tasks = (props) => {
    
    return (
        <section>
            <Task data={props.data} />
        </section>
    );
}

export default Tasks;