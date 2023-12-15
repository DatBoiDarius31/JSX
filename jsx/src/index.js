/*5 step process to laying out js for index
    1. import react and react-dom
    2. get a reference to the root div in the html
    3. Tell react-dom to render the app in the root div
    4. Create the app component
    5. Create the app component
*/

// react is the library, react-dom is the package
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App';
const rootDiv = document.getElementById('root');
const root = ReactDOM.createRoot(rootDiv);
root.render(<App />);

//Variables must be enclosed in curly braces only show strings and numbers and a collapsed array
//object throws an error

/*Component layout
    1 calc values
    2 return JSX has to be one element and one element only
*/

/* Props
    Number must be wrapped in curly braces
    String must be wrapped in quotes
    Array wrap must be wrapped in curly braces
    Object wrapped in double curly braces
    Variables must be enclosed in curly braces
*/

/* Converting HTML to JSX
    1. class -> className
    2. for -> htmlFor
    3. style -> object
    4. onclick -> onClick
    5. camelCase
*/