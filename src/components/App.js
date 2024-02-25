import {movieService} from "../services";

const App = () => {
    movieService.getAll().then(({data}) => console.log(data))
    return (
        <div>
            App
        </div>
    );
};

export {App};