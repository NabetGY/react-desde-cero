import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root')

//const elemento = React.createElement(componente, propiedades, hijos)
//const elemento = React.createElement('h1', {className: 'saludo...'}, 'hola mundos...')

ReactDOM.render(<App />, root);

reportWebVitals();
