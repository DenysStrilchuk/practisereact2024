import {useSelector} from "react-redux";

const Characters = () => {
    const {characters} = useSelector(state => state.characters);
    return (
        <div>
            Characters
        </div>
    );
};

export {Characters};