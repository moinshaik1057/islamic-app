import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

// In index.js or App.js
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.css';

// Create a root element and render the app
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
