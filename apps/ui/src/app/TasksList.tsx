import { useEffect } from 'react';
import { useDelTaskMutation, useGetTasksListLazyQuery } from "@graphql-mono/data";

function TasksList(props: { newTaskId: string }) {
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
        <table border={1}>
            <tr><td>title</td><td>priority</td><td>...</td></tr>
            {
                data?.getTasksList.map((item, i) =>
                    <tr>
                        <td key={i}>{item.title}</td>
                        <td>{item.priority}</td>
                        <td><button onClick={() => { remove(item.id) }}>remove</button></td>
                    </tr>
                )
            }
        </table>
    );
}

export default TasksList;
