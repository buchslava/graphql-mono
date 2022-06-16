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

export const GET_TODOS = gql`
    query GetTodosList($taskId: ID!) {
      getTodosList(taskId: $taskId) {
        id
        title
        content
        status
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

export const ADD_TODO = gql`
    mutation AddTodo($todo: TodoInput!) {
      todo {
        addTodo(todo: $todo) {
          todo {
            id
            title
            content
            status
          }
          error
        }
      }
    }
`;

export const DEL_TODO = gql`
    mutation DelTodo($todoId: ID!) {
      todo {
        delTodo(todoId: $todoId) {
          todo {
            id
            title
            content
            status
          }
          error
        }
      }
    }
`;

export const SET_TODO_STATUS = gql`
    mutation SetTodoStatus($todoId: ID!, $todoStatus: String!) {
      todo {
        setTodoStatus(todoId: $todoId, todoStatus: $todoStatus) {
          todo {
            id
            title
            content
            status
          }
          error
        }
      }
    }
`;
