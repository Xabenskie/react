import Task from "./Task";

function TaskItem(props){
    return(
    <div>
        {props.description.map((info) => (
            <Task
            key={info.id}
            info={info.info}
            />
        ))}
    </div>
    )
}

export default TaskItem