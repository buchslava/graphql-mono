import { useEffect } from 'react';
import { useDelTaskMutation, useGetTasksListLazyQuery } from "@graphql-mono/data";
import { useGlobalState } from './GlobalContext';

function TasksList(props: { newTaskId: string }) {
    const { setCurrentTask } = useGlobalState();
    const [getData, { data }] = useGetTasksListLazyQuery({
        fetchPolicy: "network-only",
    });
    const [delTaskMutation] = useDelTaskMutation({
        onCompleted: () => {
            getData();
        },
        onError: (err) => {
            console.log(err);
        }
    });

    useEffect(() => {
        getData();
    }, [props]);

    const remove = (id: string) => {
        delTaskMutation({
            variables: {
                taskId: id
            }
        });
    };

    return (
        <table border={1} style={{ marginTop: 50 }}><tbody>
            <tr><td>title</td><td>priority</td><td>...</td></tr>
            {
                data?.getTasksList.map((item, i) =>
                    <tr key={i}>
                        <td><a href="#" onClick={() => { setCurrentTask(item) }}>{item.title}</a></td>
                        <td>{item.priority}</td>
                        <td><button onClick={() => { remove(item.id) }}>remove</button></td>
                    </tr>
                )
            }
        </tbody></table>
    );
}

export default TasksList;
