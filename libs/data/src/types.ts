import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  task?: Maybe<TaskMutations>;
  todo?: Maybe<TodoMutations>;
};

export type Query = {
  __typename?: 'Query';
  getTasksList: Array<Task>;
  getTodosList: Array<Todo>;
};


export type QueryGetTodosListArgs = {
  taskId: Scalars['ID'];
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['ID'];
  priority?: Maybe<TaskPriority>;
  title?: Maybe<Scalars['String']>;
  todos: Array<Todo>;
};

export type TaskInput = {
  priority?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TaskMutations = {
  __typename?: 'TaskMutations';
  addTask: TaskResponse;
  delTask: TaskResponse;
  setTaskPriority: TaskResponse;
};


export type TaskMutationsAddTaskArgs = {
  task: TaskInput;
};


export type TaskMutationsDelTaskArgs = {
  taskId: Scalars['ID'];
};


export type TaskMutationsSetTaskPriorityArgs = {
  taskId: Scalars['ID'];
  taskPriority: Scalars['String'];
};

export enum TaskPriority {
  High = 'high',
  Low = 'low',
  Normal = 'normal'
}

export type TaskResponse = {
  __typename?: 'TaskResponse';
  error?: Maybe<Scalars['String']>;
  task?: Maybe<Task>;
};

export type Todo = {
  __typename?: 'Todo';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  status?: Maybe<TodoStatus>;
  title?: Maybe<Scalars['String']>;
};

export type TodoInput = {
  content?: InputMaybe<Scalars['String']>;
  taskId: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type TodoMutations = {
  __typename?: 'TodoMutations';
  addTodo: TodoResponse;
  delTodo: TodoResponse;
  setTodoStatus: TodoResponse;
};


export type TodoMutationsAddTodoArgs = {
  todo: TodoInput;
};


export type TodoMutationsDelTodoArgs = {
  todoId: Scalars['ID'];
};


export type TodoMutationsSetTodoStatusArgs = {
  todoId: Scalars['ID'];
  todoStatus: Scalars['String'];
};

export type TodoResponse = {
  __typename?: 'TodoResponse';
  error?: Maybe<Scalars['String']>;
  todo?: Maybe<Todo>;
};

export enum TodoStatus {
  Cancelled = 'cancelled',
  Done = 'done',
  New = 'new'
}

export type GetTasksListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksListQuery = { __typename?: 'Query', getTasksList: Array<{ __typename?: 'Task', id: string, title?: Maybe<string>, priority?: Maybe<TaskPriority> }> };

export type GetTodosListQueryVariables = Exact<{
  taskId: Scalars['ID'];
}>;


export type GetTodosListQuery = { __typename?: 'Query', getTodosList: Array<{ __typename?: 'Todo', id: string, title?: Maybe<string>, content?: Maybe<string>, status?: Maybe<TodoStatus> }> };

export type AddTaskMutationVariables = Exact<{
  task: TaskInput;
}>;


export type AddTaskMutation = { __typename?: 'Mutation', task?: Maybe<{ __typename?: 'TaskMutations', addTask: { __typename?: 'TaskResponse', error?: Maybe<string>, task?: Maybe<{ __typename?: 'Task', id: string, title?: Maybe<string>, priority?: Maybe<TaskPriority> }> } }> };

export type DelTaskMutationVariables = Exact<{
  taskId: Scalars['ID'];
}>;


export type DelTaskMutation = { __typename?: 'Mutation', task?: Maybe<{ __typename?: 'TaskMutations', delTask: { __typename?: 'TaskResponse', error?: Maybe<string>, task?: Maybe<{ __typename?: 'Task', id: string, title?: Maybe<string>, priority?: Maybe<TaskPriority> }> } }> };

export type AddTodoMutationVariables = Exact<{
  todo: TodoInput;
}>;


export type AddTodoMutation = { __typename?: 'Mutation', todo?: Maybe<{ __typename?: 'TodoMutations', addTodo: { __typename?: 'TodoResponse', error?: Maybe<string>, todo?: Maybe<{ __typename?: 'Todo', id: string, title?: Maybe<string>, content?: Maybe<string>, status?: Maybe<TodoStatus> }> } }> };

export type DelTodoMutationVariables = Exact<{
  todoId: Scalars['ID'];
}>;


export type DelTodoMutation = { __typename?: 'Mutation', todo?: Maybe<{ __typename?: 'TodoMutations', delTodo: { __typename?: 'TodoResponse', error?: Maybe<string>, todo?: Maybe<{ __typename?: 'Todo', id: string, title?: Maybe<string>, content?: Maybe<string>, status?: Maybe<TodoStatus> }> } }> };

export type SetTodoStatusMutationVariables = Exact<{
  todoId: Scalars['ID'];
  todoStatus: Scalars['String'];
}>;


export type SetTodoStatusMutation = { __typename?: 'Mutation', todo?: Maybe<{ __typename?: 'TodoMutations', setTodoStatus: { __typename?: 'TodoResponse', error?: Maybe<string>, todo?: Maybe<{ __typename?: 'Todo', id: string, title?: Maybe<string>, content?: Maybe<string>, status?: Maybe<TodoStatus> }> } }> };


export const GetTasksListDocument = gql`
    query GetTasksList {
  getTasksList {
    id
    title
    priority
  }
}
    `;

/**
 * __useGetTasksListQuery__
 *
 * To run a query within a React component, call `useGetTasksListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksListQuery(baseOptions?: Apollo.QueryHookOptions<GetTasksListQuery, GetTasksListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTasksListQuery, GetTasksListQueryVariables>(GetTasksListDocument, options);
      }
export function useGetTasksListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksListQuery, GetTasksListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTasksListQuery, GetTasksListQueryVariables>(GetTasksListDocument, options);
        }
export type GetTasksListQueryHookResult = ReturnType<typeof useGetTasksListQuery>;
export type GetTasksListLazyQueryHookResult = ReturnType<typeof useGetTasksListLazyQuery>;
export type GetTasksListQueryResult = Apollo.QueryResult<GetTasksListQuery, GetTasksListQueryVariables>;
export const GetTodosListDocument = gql`
    query GetTodosList($taskId: ID!) {
  getTodosList(taskId: $taskId) {
    id
    title
    content
    status
  }
}
    `;

/**
 * __useGetTodosListQuery__
 *
 * To run a query within a React component, call `useGetTodosListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosListQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useGetTodosListQuery(baseOptions: Apollo.QueryHookOptions<GetTodosListQuery, GetTodosListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosListQuery, GetTodosListQueryVariables>(GetTodosListDocument, options);
      }
export function useGetTodosListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosListQuery, GetTodosListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosListQuery, GetTodosListQueryVariables>(GetTodosListDocument, options);
        }
export type GetTodosListQueryHookResult = ReturnType<typeof useGetTodosListQuery>;
export type GetTodosListLazyQueryHookResult = ReturnType<typeof useGetTodosListLazyQuery>;
export type GetTodosListQueryResult = Apollo.QueryResult<GetTodosListQuery, GetTodosListQueryVariables>;
export const AddTaskDocument = gql`
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
export type AddTaskMutationFn = Apollo.MutationFunction<AddTaskMutation, AddTaskMutationVariables>;

/**
 * __useAddTaskMutation__
 *
 * To run a mutation, you first call `useAddTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskMutation, { data, loading, error }] = useAddTaskMutation({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useAddTaskMutation(baseOptions?: Apollo.MutationHookOptions<AddTaskMutation, AddTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTaskMutation, AddTaskMutationVariables>(AddTaskDocument, options);
      }
export type AddTaskMutationHookResult = ReturnType<typeof useAddTaskMutation>;
export type AddTaskMutationResult = Apollo.MutationResult<AddTaskMutation>;
export type AddTaskMutationOptions = Apollo.BaseMutationOptions<AddTaskMutation, AddTaskMutationVariables>;
export const DelTaskDocument = gql`
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
export type DelTaskMutationFn = Apollo.MutationFunction<DelTaskMutation, DelTaskMutationVariables>;

/**
 * __useDelTaskMutation__
 *
 * To run a mutation, you first call `useDelTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delTaskMutation, { data, loading, error }] = useDelTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useDelTaskMutation(baseOptions?: Apollo.MutationHookOptions<DelTaskMutation, DelTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DelTaskMutation, DelTaskMutationVariables>(DelTaskDocument, options);
      }
export type DelTaskMutationHookResult = ReturnType<typeof useDelTaskMutation>;
export type DelTaskMutationResult = Apollo.MutationResult<DelTaskMutation>;
export type DelTaskMutationOptions = Apollo.BaseMutationOptions<DelTaskMutation, DelTaskMutationVariables>;
export const AddTodoDocument = gql`
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
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const DelTodoDocument = gql`
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
export type DelTodoMutationFn = Apollo.MutationFunction<DelTodoMutation, DelTodoMutationVariables>;

/**
 * __useDelTodoMutation__
 *
 * To run a mutation, you first call `useDelTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delTodoMutation, { data, loading, error }] = useDelTodoMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useDelTodoMutation(baseOptions?: Apollo.MutationHookOptions<DelTodoMutation, DelTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DelTodoMutation, DelTodoMutationVariables>(DelTodoDocument, options);
      }
export type DelTodoMutationHookResult = ReturnType<typeof useDelTodoMutation>;
export type DelTodoMutationResult = Apollo.MutationResult<DelTodoMutation>;
export type DelTodoMutationOptions = Apollo.BaseMutationOptions<DelTodoMutation, DelTodoMutationVariables>;
export const SetTodoStatusDocument = gql`
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
export type SetTodoStatusMutationFn = Apollo.MutationFunction<SetTodoStatusMutation, SetTodoStatusMutationVariables>;

/**
 * __useSetTodoStatusMutation__
 *
 * To run a mutation, you first call `useSetTodoStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTodoStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTodoStatusMutation, { data, loading, error }] = useSetTodoStatusMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *      todoStatus: // value for 'todoStatus'
 *   },
 * });
 */
export function useSetTodoStatusMutation(baseOptions?: Apollo.MutationHookOptions<SetTodoStatusMutation, SetTodoStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetTodoStatusMutation, SetTodoStatusMutationVariables>(SetTodoStatusDocument, options);
      }
export type SetTodoStatusMutationHookResult = ReturnType<typeof useSetTodoStatusMutation>;
export type SetTodoStatusMutationResult = Apollo.MutationResult<SetTodoStatusMutation>;
export type SetTodoStatusMutationOptions = Apollo.BaseMutationOptions<SetTodoStatusMutation, SetTodoStatusMutationVariables>;