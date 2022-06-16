import { Task } from "@graphql-mono/data";
import { createContext, ReactNode, useContext, useState } from "react";

export interface IGlobalContext {
    newTaskId: string;
    setNewTaskId: Function;
    newTodoId: string;
    setNewTodoId: Function;
    currentTask: Task | null;
    setCurrentTask: Function;
}

export const GlobalContext = createContext<IGlobalContext>({
    newTaskId: "",
    setNewTaskId: () => null,
    newTodoId: "",
    setNewTodoId: () => null,
    currentTask: null,
    setCurrentTask: () => null,
});

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [newTaskId, setNewTaskId] = useState<string>("");
    const [newTodoId, setNewTodoId] = useState<string>("");
    const [currentTask, setCurrentTask] = useState<Task | null>(null);
    const contextValue = {
        newTaskId,
        setNewTaskId,
        newTodoId,
        setNewTodoId,
        currentTask,
        setCurrentTask,
    };

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}

export const useGlobalState = () => useContext(GlobalContext);
