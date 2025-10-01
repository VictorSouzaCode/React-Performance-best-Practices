import { createContext, type ReactNode, useContext, useState } from "react";

export type User = {
    name: string,
    email: string
}

const UserContext = createContext<User | undefined >(undefined)


export const useUser = () => {
    const ctx = useContext(UserContext)

    if(!ctx) throw new Error("useUser must be used inside UserProvider")
    
    return ctx;
}


type UserProviderProps = {
    children: ReactNode,
    user: User
}

export const UserProvider = ({children, user}: UserProviderProps) => { 

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}