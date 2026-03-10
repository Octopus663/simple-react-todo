import { useState } from 'react';
import type { ITodo } from './types/todo';
import { TodoItem } from './components/TodoItem';
import { TodoInput } from './components/TodoInput';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store/store';
import { addTodo, toggleTodo, removeTodo, editTodo } from './store/todoSlice';


type FilterType = 'all' | 'active' | 'completed';


function App() {
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; 
  });

  
  const handleAdd = (text: string) => dispatch(addTodo(text));
  const handleToggle = (id: string) => dispatch(toggleTodo(id));
  const handleRemove = (id: string) => dispatch(removeTodo(id));
  const handleEdit = (id: string, text: string) => {
    dispatch(editTodo({ id, text })); 
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Мій список завдань</h1>
      
      <TodoInput onAdd={handleAdd} />

      <div>   
      <div style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
        {(['all', 'active', 'completed'] as FilterType[]).map(f => (
          <button 
            key={f} 
            onClick={() => setFilter(f)}
            style={{ fontWeight: filter === f ? 'bold' : 'normal' }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

    </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTodos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={handleRemove} 
          onToggle={handleToggle} 
          onEdit={handleEdit}
        />
      ))}
      </ul>
      
      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: 'gray' }}>Список порожній. Додайте перше завдання!</p>
      )}
    </div>
  );
}

export default App;
