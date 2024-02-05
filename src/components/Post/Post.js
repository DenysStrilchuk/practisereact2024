const Post = ({item}) => {
const {id, title, btn} = item;
    return (
        <div>
            <h2>{id} - {title}</h2>
            <button onClick={btn}>More info</button>
        </div>
    );
};

export {Post};