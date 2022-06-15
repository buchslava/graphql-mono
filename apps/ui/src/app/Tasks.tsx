import AddTask from './AddTask';
import TasksList from './TasksList';
import { useGlobalState } from './GlobalContext';
import { useEffect, useState } from 'react';

export function Tasks() {
    const { newTaskId } = useGlobalState();
    useEffect(() => {
        console.log('!!!!', newTaskId);
    }, [newTaskId]);
    return (
        <>
            <AddTask />
            <hr />
            <TasksList newTaskId={newTaskId} />
        </>
    );
}

export default Tasks;
