const Character = ({name, age, img}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <img src={img} alt={name}/>
        </div>
    );
};

export {Character};