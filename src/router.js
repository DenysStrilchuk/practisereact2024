import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieCardPage, MoviesListPage} from "./pages";
import {MoviesByGenrePage} from "./pages/MoviesByGenrePage";
import {SearchPage} from "./pages/SearchPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children: [
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesListPage/>, children: [
                    {
                        path: 'search', element: <SearchPage/>
                    }
                ]
            },
            {
                path:'movie/:id', element:<MovieCardPage/>
            },
            {
                path:'genres', element:<GenresPage/>, children: [
                    {
                        path:':id', element:<MoviesByGenrePage/>
                    }
                ]
            }
        ]
    }
])

export {
    router
}