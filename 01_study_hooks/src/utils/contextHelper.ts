import { Context, createContext } from "react";

const contextObj: {
    [property: string]: Context<any>;
} = {};

export const createContextHelper = (contextName: string) => {
    let context = createContext<any>(null);
    contextObj[contextName] = context;
    return context;
}
export const useContextHelper = (contextName: string): Context<any> => {
    return contextObj[contextName];
}