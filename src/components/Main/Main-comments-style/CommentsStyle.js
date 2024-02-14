import css from "./Comment.module.css"
import {Comment} from "../../CommentsContainer/Comment";

const CommentsStyle = () => {
    return (
        <div className={css.Comment}>
            <Comment/>
        </div>
    );
};

export {CommentsStyle};