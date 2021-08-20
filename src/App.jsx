/* eslint no-eval: 0 */
import React, { useState } from 'react';
import words from 'lodash.words';
import Result from './components/Result';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import './App.css';

const App = () => {
  const [stack, setStack] = useState(""); 
  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length ? items[items.length-1] : '';

  return (
    <main className='react-calculator'>
      <Result value={value}/>
      <Numbers onClickNumber={ number => setStack(`${stack}${number}`) }/>
      <Functions 
        onContentClear={() => setStack('')} 
        onDelete={del => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }} />
      <MathOperations 
        onClickOperation={op => setStack(`${Number(stack)}${op}`)} 
        onClickEqual={eq => { if (stack !== '') setStack(eval(stack).toString()); }} />
    </main>
  );
}

export default App;
