import { useState, useEffect } from 'react';
import type { ITodo } from '../types/todo';

export const useLocalStorage = (key: string, initialValue: ITodo[]) => {
    const [value, setValue] = useState<ITodo[]>(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]); 

    return [value, setValue] as const;

};