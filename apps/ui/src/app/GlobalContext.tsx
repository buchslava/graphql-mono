import { createContext, ReactNode, useContext, useState } from "react";

export interface IGlobalContext {
    newTaskId: string;
    setNewTaskId: Function;
}

export const GlobalContext = createContext<IGlobalContext>({
    newTaskId: "",
    setNewTaskId: () => null,
});

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [newTaskId, setNewTaskId] = useState<string>("");
    const contextValue = {
        newTaskId,
        setNewTaskId,
    };

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}

export const useGlobalState = () => useContext(GlobalContext);
