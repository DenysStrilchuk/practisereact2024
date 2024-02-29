import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import './index.css';
import {router} from "./router";
import {ThemeProvider} from "./components";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
);

