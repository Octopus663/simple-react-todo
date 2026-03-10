import React, { useReducer } from 'react';

const initialState = { items: [], total: 0 };

type Action = 
  | { type: 'ADD_ITEM'; payload: { name: string; price: number } }
  | { type: 'CLEAR_CART' };

function cartReducer(state: any, action: Action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload.name],
        total: state.total + action.payload.price
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
}

export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <h3>Кошик (Сума: {state.total} грн)</h3>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: { name: 'Кава', price: 50 } })}>
        Додати каву
      </button>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Очистити</button>
      
      <ul>
        {state.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};