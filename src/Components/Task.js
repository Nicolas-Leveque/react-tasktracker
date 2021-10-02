const Task = (props) => {

  console.log(props.data, 'task')
  return (
    <div>
      <p>{props.data[0].text}</p>
    </div>
  );
}

export default Task;