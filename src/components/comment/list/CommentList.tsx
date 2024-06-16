import React from "react";
import "./../comment.scss";
import { CommentItem } from "../item/CommentItem";
import { type TComment } from "../../../type/Comment";
import { type TUser } from "../../../type/User";
import { type TRemoveCommentHandler } from "./CommentListContainer";

type TCommentList = {
    comments: TComment[]
    user: TUser | null
    removeComment: TRemoveCommentHandler
}

export const CommentList: React.FC<TCommentList> = (
    {
        comments,
        user,
        removeComment
    }
) => {
    return (
        <div className="comment__list-wrapper">
            <ul className="comment__list">
                {
                    comments.map(comment => <li key={comment.id} className="comment__list-item">
                        <CommentItem comment={comment} removeComment={removeComment} user={user} />
                    </li>)
                }
            </ul>
        </div>
    )
}