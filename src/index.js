import {RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './index.css';
import {router} from "./router";
import {ContextProvider} from "./hok";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
         <RouterProvider router={router}/>
    </ContextProvider>
);

