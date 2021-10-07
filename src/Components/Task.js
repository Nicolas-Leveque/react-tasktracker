const Task = ({data, onToggle, onDelete}) => {

  return (
    <div className={`p-3 cursor-pointer ${data.reminder ? 'reminder' : ''}`} onDoubleClick={() => {onToggle(data.id)}}>
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-xl">{data.text}</h3>
        <i className="fas fa-times text-red-500" onClick={() =>{onDelete(data.id)}}></i>
      </div>
      <p>{data.day}</p>
    </div>
  );
}

export default Task;