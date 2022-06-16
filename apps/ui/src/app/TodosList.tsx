import { useEffect } from 'react';
import { useDelTodoMutation, useSetTodoStatusMutation, useGetTodosListLazyQuery } from "@graphql-mono/data";
import { useGlobalState } from './GlobalContext';

function TodosList(props: { newTodoId: string }) {
    const { currentTask } = useGlobalState();
    const [getData, { data }] = useGetTodosListLazyQuery({ fetchPolicy: "network-only" });
    const getCurrentList = () => {
        if (currentTask) {
            getData({
                variables: {
                    taskId: currentTask.id
                }
            });
        }
    };
    const [delTodoMutation] = useDelTodoMutation({
        onCompleted: getCurrentList,
        onError: console.error
    });
    const [setTodoStatusMutation] = useSetTodoStatusMutation({
        onCompleted: getCurrentList,
        onError: console.error
    });

    useEffect(() => {
        getCurrentList();
    }, [props]);

    const remove = (todoId: string) => {
        delTodoMutation({ variables: { todoId } });
    };
    const setStatus = (todoId: string, todoStatus: string) => {
        setTodoStatusMutation({ variables: { todoId, todoStatus } });
    };

    return (
        <table border={1} style={{ marginTop: 50 }}><tbody>
            <tr><td>Title</td><td>Content</td><td>Status</td><td>...</td></tr>
            {
                data?.getTodosList.map((item, i) =>
                    <tr key={i}>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                        <td>{item.status}</td>
                        <td>
                            {
                                item.status !== 'new' && (
                                    <button onClick={() => { setStatus(item.id, 'new') }}>new</button>
                                )
                            }
                            {
                                item.status !== 'cancelled' && (
                                    <button onClick={() => { setStatus(item.id, 'cancelled') }}>cancel</button>
                                )
                            }
                            {
                                item.status !== 'done' && (
                                    <button onClick={() => { setStatus(item.id, 'done') }}>done</button>
                                )
                            }
                            <button onClick={() => { remove(item.id) }}>remove</button>
                        </td>
                    </tr>
                )
            }
        </tbody></table>
    );
}

export default TodosList;
