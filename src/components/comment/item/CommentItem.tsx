import React from "react";
import "./../comment.scss";
import { type TComment } from "../../../type/Comment";
import { type TRemoveCommentHandler } from "../list/CommentListContainer";
import { type TUser } from "../../../type/User";
import { ReactComponent as RemoveIcon } from "../../../assets/img/trash.svg";

type TCommentItem = {
    comment: TComment
    removeComment: TRemoveCommentHandler
    user: TUser | null
}

export const CommentItem: React.FC<TCommentItem> = (
    {
        comment,
        removeComment,
        user
    }
) => {
    return (
        <div className="comment__item">
            <div className="comment__header">
                <div className="comment__author-wrapper">
                    <div className="comment__author">
                        {comment.author.name}
                    </div>

                    <div className="comment__author-date">
                        {comment.date}
                    </div>
                </div>

                {
                    ((user && user.role === 'administrator') || (user && user.id === comment.author.id)) &&
                        <div className="comment__actions">
                            <RemoveIcon className="comment__remove" onClick={() => removeComment(comment.id)}/>
                        </div>
                }
            </div>

            <div className="comment__content">
                <div className="comment__content-inner">
                    {comment.content}
                </div>
            </div>
        </div>
    )
}