import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const CustomElement = (
  <a href='https://google.com' target='_blank'>Click me to ge to google custom</a>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  CustomElement
);