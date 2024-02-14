import {Comments} from "../components/CommentsContainer/Comments";
import {Outlet} from "react-router-dom";
import css from "../components/Main/MainCommentsStyle/CommentPage.module.css"

const CommentsPage = () => {
    return (
        <div className={css.Comment}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};