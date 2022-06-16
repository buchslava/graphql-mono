import AddTask from './AddTask';
import TasksList from './TasksList';
import { useGlobalState } from './GlobalContext';
import AddTodo from './AddTodo';
import TodosList from './TodosList';

export function Tasks() {
    const { newTaskId, newTodoId, currentTask } = useGlobalState();
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', padding: 100 }}>
            <div style={{ flex: '0 30%' }}>
                <h3>Tasks</h3>
                <AddTask />
                <TasksList newTaskId={newTaskId} />
            </div>
            {
                currentTask !== null && (
                    <div>
                        <h3>Todos for <span style={{ color: 'blue' }}>{currentTask.title}</span></h3>
                        <AddTodo />
                        <TodosList newTodoId={newTodoId} />
                    </div>
                )
            }
        </div>
    );
}

export default Tasks;
