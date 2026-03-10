import React, { useState } from 'react';
import type { ITodo } from '../types/todo';

interface TodoItemProps {
  todo: ITodo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export const TodoItem = ({ todo, onDelete, onToggle, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditText(todo.text); 
  };

 
  const handleSaveClick = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim()); 
      setIsEditing(false); 
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const liStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '8px',
    borderBottom: '1px solid #eee'
  };

  return (
    <li style={liStyle}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)} 
      />

    
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)}
            style={{ flexGrow: 1, padding: '4px' }}
          />
          <button onClick={handleSaveClick} style={{ color: 'green' }}>Зберегти</button>
          <button onClick={handleCancelClick} style={{ color: 'gray' }}>Відмінити</button>
        </>
      ) : (
        <>
          <span style={{ 
            flexGrow: 1,
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'gray' : 'black'
          }}>
            {todo.text}
          </span>
          <button onClick={handleEditClick} style={{ color: 'blue' }}>Редагувати</button>
          <button onClick={() => onDelete(todo.id)} style={{ color: 'red' }}>Видалити</button>
        </>
      )}
    </li>
  );
};