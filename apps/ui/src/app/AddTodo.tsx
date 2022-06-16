import { useRef, MutableRefObject } from 'react';
import { useAddTodoMutation } from "@graphql-mono/data";
import { useGlobalState } from './GlobalContext';

function AddTodo() {
    const { setNewTodoId, currentTask } = useGlobalState();
    const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
    const contentRef = useRef() as MutableRefObject<HTMLInputElement>;

    const [addTodoMutation] = useAddTodoMutation({
        onCompleted: (res) => {
            titleRef.current.value = '';
            contentRef.current.value = '';
            setNewTodoId(res.todo?.addTodo.todo?.id);
        },
        onError: console.log,
    });

    const addNewTodo = () => {
        if (currentTask === null) {
            return;
        }
        addTodoMutation({
            variables: {
                todo: {
                    taskId: currentTask.id,
                    title: titleRef.current.value,
                    content: contentRef.current.value,
                }
            }
        });
    };

    return (
        <div>
            <p>
                Title:<br />
                <input ref={titleRef} /><br />
                Content:<br />
                <input ref={contentRef} /><br />
            </p>
            <button onClick={addNewTodo}>Add</button>
        </div>
    );
}

export default AddTodo;
