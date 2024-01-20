import React from 'react';

/**
 * The provided file appears to be a part of a React application
 * and serves the purpose of initializing and rendering the main
 * App component within a specified HTML element
 */


// used to create a root for rendering components.
import { createRoot } from 'react-dom/client';

import App from './App';

// Get the HTML element with the id 'root' and assign it to the 'container' variable
const container = document.getElementById('root');

// Create a root using the 'createRoot' function and pass the 'container' as an argument
const root = createRoot(container);

// Render the 'App' component inside the 'root'
root.render(
  <App/>
);
