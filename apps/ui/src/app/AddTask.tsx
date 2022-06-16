import { useRef, useState, MutableRefObject } from 'react';
import { useAddTaskMutation } from "@graphql-mono/data";
import { useGlobalState } from './GlobalContext';

const INIT_PRIORITY = "normal";

function AddTask() {
    const { setNewTaskId } = useGlobalState();
    const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
    const [priorityInput, setPriorityInput] = useState(INIT_PRIORITY);

    const [addTaskMutation] = useAddTaskMutation({
        onCompleted: (res) => {
            setPriorityInput(INIT_PRIORITY);
            titleRef.current.value = '';
            setNewTaskId(res.task?.addTask.task?.id);
        },
        onError: console.log,
    });

    const addNewTask = () => {
        addTaskMutation({
            variables: {
                task: {
                    title: titleRef.current.value,
                    priority: priorityInput,
                }
            }
        });
    };

    return (
        <div>
            <p>
                Title:<br />
                <input ref={titleRef} /><br />
            </p>
            Prioprty: <br />
            <div>
                <label>
                    <input
                        type="radio"
                        name="low"
                        value={'low'}
                        checked={priorityInput === 'low'}
                        onChange={e => setPriorityInput(e.target.value)} />
                    Low</label>&nbsp;
                <label>
                    <input
                        type="radio"
                        name="normal"
                        value={INIT_PRIORITY}
                        checked={priorityInput === INIT_PRIORITY}
                        onChange={e => setPriorityInput(e.target.value)} />Normal
                </label>&nbsp;
                <label>
                    <input
                        type="radio"
                        name="high"
                        value={'high'}
                        checked={priorityInput === 'high'}
                        onChange={e => setPriorityInput(e.target.value)} />High
                </label>
            </div>
            <button onClick={addNewTask}>Add</button>
        </div>
    );
}

export default AddTask;
