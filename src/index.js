import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import App from './App';
import { store } from './redux/store';
import './styles/App.css';

// Create a root element and render the app
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Router>  {/* Wrap with BrowserRouter */}
            <App />
        </Router>
    </Provider>
);
