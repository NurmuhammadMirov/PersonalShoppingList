import { createContext, useCallback, useState } from "react";

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

    const fetchItems = useCallback(async (listId) => {
        try {
            const data = 
                await fetch(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists/${listId}/items`);
            const result = await data.json();

            if (result) {
                setItems(result);
                setLoading(false);
            }
        } catch(e) {
            setLoading(false);
            setError(e.message);
        }
    }, [])

    return (
        <ItemContext.Provider value={{ items, loading, error, fetchItems }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;

