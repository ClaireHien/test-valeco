import React from 'react';

interface Task {
    title: string;
    completed: boolean;
}
  
interface TaskItemProps {
    task: Task;
}
  
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
            />
            <span>{task.title}</span>
        </li>
    );
};

export default TaskItem;