import Task from './Task';

const Tasks = ({data, onToggle, onDelete}) => {
    return (
        <section>
            {data.map((data)=>(
                <Task
                    data={data}
                    key={data.id}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    />
            ))}
            
        </section>
    );
}

export default Tasks;