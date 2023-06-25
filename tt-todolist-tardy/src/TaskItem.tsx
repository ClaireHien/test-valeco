import React, { useState } from 'react';

interface Task {
    title: string;
    completed: boolean;
}
  
interface TaskItemProps {
    task: Task;
}
  
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
        
    const [checked, setChecked] = useState(task.completed);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <span>{task.title}</span>
        </li>
    );
};

export default TaskItem;