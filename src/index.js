import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Greeting from './components/Greeting/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
      <App />
      <Greeting name="Alex" country="USA" />
      <Greeting name="John" country="USA" />
      <Greeting name="Jane" country="GB" />
      <Greeting name="Masha" country="Ukraine" />
    </React.Fragment>
);
