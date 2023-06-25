import React from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {

    const task = {
        title: 'Test',
        completed: false
    };

    return (
        <ul>
            <TaskItem task={task}/>
        </ul>
    );
};

export default TaskList;