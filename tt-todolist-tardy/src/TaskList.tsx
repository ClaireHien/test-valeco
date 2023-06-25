import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';


const TaskList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks');
            if (!response.ok) {
              throw new Error('Request failed');
            }
            const responseData = await response.json();
            setData(responseData);
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    return (
        <ul>
          {Array.isArray(data) &&
            data.map((task) => <TaskItem task={task} />)}
        </ul>
    );
};

export default TaskList;