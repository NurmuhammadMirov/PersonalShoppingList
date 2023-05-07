import { createContext } from "react";
import useDataFetching from "../hooks/useDataFetching";

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
    const [loading, error, data] = 
        useDataFetching('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/items');
        
    return (
        <ItemContext.Provider value={{ items: data, loading, error }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;

