import React, { useRef } from 'react';

export const TextInputWithFocus: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    inputEl.current?.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" placeholder="Натисни кнопку, щоб я отримав фокус" />
      <button onClick={onButtonClick}>Дати фокус</button>
    </>
  );
};