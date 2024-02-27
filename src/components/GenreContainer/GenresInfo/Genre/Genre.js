import {Badge} from "react-bootstrap";


const Genre = ({genre}) => {
    const {name} = genre;
    return (
        <div>
            <Badge bg="secondary">{name}</Badge>
        </div>
    );
};

export {Genre};