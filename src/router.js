import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieCardPage, MoviesListPage} from "./pages";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children: [
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesListPage/>
            },
            {
                path:'movie/:id', element:<MovieCardPage/>
            },
            {
                path:'genres', element:<GenresPage/>
            }
        ]
    }
])

export {
    router
}