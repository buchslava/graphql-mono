import gql from "graphql-tag";

export const GET_TASKS = gql`
    query GetTasksList {
      getTasksList {
        id
        title
        priority
      }
    }
`;

export const ADD_TASK = gql`
    mutation AddTask($task: TaskInput!) {
      task {
        addTask(task: $task) {
          task {
            id
            title
            priority
          }
          error
        }
      }
    }
`;

export const DEL_TASK = gql`
    mutation DelTask($taskId: ID!) {
      task {
        delTask(taskId: $taskId) {
          task {
            id
            title
            priority
          }
          error
        }
      }
    }
`;
